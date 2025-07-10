export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  console.log('🔍 Poll results API called:', {
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
    const { run_id } = await request.json();
    console.log('📝 Poll request:', { run_id });
    
    if (!run_id) {
      console.log('❌ No run_id provided');
      return new Response(
        JSON.stringify({ error: 'run_id is required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

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

    // Poll Gumloop for results
    console.log('🔄 Polling Gumloop for results:', { run_id });
    const pollResponse = await fetch(
      `https://api.gumloop.com/api/v1/get_pl_run?run_id=${run_id}&user_id=nwu3TTmHaTNYcwsuIVPPjGBGp752`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.GUMLOOP_KEY}`
        }
      }
    );

    if (!pollResponse.ok) {
      console.log('❌ Gumloop poll failed:', pollResponse.status);
      throw new Error(`Polling failed: ${pollResponse.status}`);
    }

    const pollData = await pollResponse.json();
    console.log('📊 Gumloop poll response:', {
      state: pollData.state,
      hasOutputs: !!pollData.outputs,
      outputsKeys: pollData.outputs ? Object.keys(pollData.outputs) : [],
      finished_ts: pollData.finished_ts,
      timestamp: new Date().toISOString()
    });

    // Return the current status using correct Gumloop API fields
    const response = {
      status: pollData.state || 'RUNNING',
      completed: pollData.state === 'DONE',
      failed: pollData.state === 'FAILED' || pollData.state === 'TERMINATED',
      outputs: pollData.outputs || null
    };

    console.log('✅ Returning poll response:', {
      status: response.status,
      completed: response.completed,
      hasOutputs: !!response.outputs
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    
  } catch (error) {
    console.error('💥 Poll error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return new Response(
      JSON.stringify({ 
        error: 'Polling failed. Please try again later.',
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