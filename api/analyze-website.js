export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  console.log('🚀 Audit API called:', {
    method: request.method,
    url: request.url,
    timestamp: new Date().toISOString()
  });

  // Enable CORS
  if (request.method === 'OPTIONS') {
    console.log('✅ CORS preflight request handled');
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    console.log('❌ Invalid method:', request.method);
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { websiteUrl } = await request.json();
    console.log('📝 Request body parsed:', { websiteUrl });
    
    if (!websiteUrl) {
      console.log('❌ No website URL provided');
      return new Response(
        JSON.stringify({ error: 'Website URL is required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    const hasGumloopKey = !!process.env.GUMLOOP_KEY;
    console.log('🔑 Environment check:', { 
      hasGumloopKey,
      keyLength: hasGumloopKey ? process.env.GUMLOOP_KEY.length : 0
    });

    if (!process.env.GUMLOOP_KEY) {
      console.log('❌ GUMLOOP_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'API configuration error. Please contact support.' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Call Gumloop webhook
    const gumloopUrl = 'https://api.gumloop.com/api/v1/start_pipeline?user_id=nwu3TTmHaTNYcwsuIVPPjGBGp752&saved_item_id=fUs1dKcqkEHy2bKDHrpE9k';
    console.log('🔄 Calling Gumloop API:', { 
      url: gumloopUrl, 
      websiteUrl,
      timestamp: new Date().toISOString() 
    });

    const gumloopResponse = await fetch(gumloopUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GUMLOOP_KEY}`
      },
      body: JSON.stringify({ websiteURL: websiteUrl })
    });

    console.log('📡 Gumloop response status:', {
      status: gumloopResponse.status,
      statusText: gumloopResponse.statusText,
      ok: gumloopResponse.ok
    });

    if (!gumloopResponse.ok) {
      const errorText = await gumloopResponse.text();
      console.log('❌ Gumloop API error response:', errorText);
      throw new Error(`Gumloop API error: ${gumloopResponse.status} - ${errorText}`);
    }

    const pipelineStartData = await gumloopResponse.json();
    console.log('✅ Gumloop pipeline started:', {
      run_id: pipelineStartData.run_id,
      saved_item_id: pipelineStartData.saved_item_id,
      timestamp: new Date().toISOString()
    });

    // Now poll for results
    const runId = pipelineStartData.run_id;
    const maxAttempts = 12; // 12 attempts * 15 seconds = 3 minutes max
    const pollInterval = 15000; // 15 seconds
    
    console.log('🔄 Starting to poll for results:', { runId, maxAttempts, pollInterval });

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      console.log(`📊 Polling attempt ${attempt}/${maxAttempts} for run_id: ${runId}`);
      
      // Wait before polling
      await new Promise(resolve => setTimeout(resolve, pollInterval));
      
      try {
        const pollResponse = await fetch(
          `https://api.gumloop.com/api/v1/get_pl_run?run_id=${runId}&user_id=nwu3TTmHaTNYcwsuIVPPjGBGp752`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.GUMLOOP_KEY}`
            }
          }
        );

        if (!pollResponse.ok) {
          console.log(`❌ Poll attempt ${attempt} failed:`, pollResponse.status);
          continue;
        }

        const pollData = await pollResponse.json();
        console.log(`📊 Poll attempt ${attempt} response:`, {
          status: pollData.status,
          hasOutputs: !!pollData.outputs,
          timestamp: new Date().toISOString()
        });

        // Check if pipeline is complete
        if (pollData.status === 'completed' && pollData.outputs) {
          console.log('✅ Pipeline completed! Returning results');
          return new Response(JSON.stringify(pollData.outputs), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        if (pollData.status === 'failed') {
          console.log('❌ Pipeline failed:', pollData);
          throw new Error('Analysis pipeline failed');
        }

        console.log(`⏳ Pipeline still running (${pollData.status}), continuing to poll...`);
        
      } catch (pollError) {
        console.log(`❌ Error during poll attempt ${attempt}:`, pollError.message);
      }
    }

    // If we get here, polling timed out
    console.log('⏰ Polling timed out after maximum attempts');
    throw new Error('Analysis timed out. Please try again.');
    
  } catch (error) {
    console.error('💥 Analysis error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return new Response(
      JSON.stringify({ 
        error: 'Analysis failed. Please try again later.',
        details: error.message 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}