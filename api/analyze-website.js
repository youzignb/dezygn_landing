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

    // Return the run_id immediately for client-side polling
    console.log('✅ Returning run_id for client-side polling');
    return new Response(JSON.stringify({
      run_id: pipelineStartData.run_id,
      status: 'started',
      message: 'Pipeline started successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    
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