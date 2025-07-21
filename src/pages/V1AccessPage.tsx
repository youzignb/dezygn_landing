import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

declare global {
  interface Window {
    cloudinary: any;
  }
}

export default function V1AccessPage() {
  const [email, setEmail] = useState('');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  
  const CLOUD_NAME = 'dtm0wkisu';
  const API_KEY = '928351182567289';
  
  useEffect(() => {
    if (window.cloudinary) {
      setIsScriptLoaded(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://media-library.cloudinary.com/global/all.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      // Don't remove the script on cleanup as it might be used by other instances
    };
  }, []);
  
  const handleOpenLibrary = () => {
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    
    if (!isScriptLoaded || !window.cloudinary) {
      alert('Cloudinary is still loading, please try again in a moment');
      return;
    }
    
    try {
      const ml = window.cloudinary.createMediaLibrary(
        {
          cloud_name: CLOUD_NAME,
          api_key: API_KEY,
          search: {
            expression: `tags="${email}"`
          },
          multiple: true,
          inline_container: null
        },
        {
          insertHandler: function(data: any) {
            console.log('Selected assets:', data.assets);
          },
          showHandler: function() {
            console.log('Media library opened for email:', email);
          }
        }
      );
      
      ml.show();
    } catch (error) {
      console.error('Error opening media library:', error);
      alert('Error opening media library. Please try again.');
    }
  };
  
  return (
    <Layout>
      <div className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Access your v1 Images
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
              Dezygn v1 is now being sunsetted. You can still access your created images by entering your email below. Thank you.
            </p>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Enter your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleOpenLibrary();
                      }
                    }}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all"
                  />
                </div>
                
                <button
                  onClick={handleOpenLibrary}
                  disabled={!isScriptLoaded}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isScriptLoaded ? 'Submit' : 'Loading...'}
                </button>
                
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <p className="text-sm text-gray-600">
                    Your v1 images are tagged with your email address. Enter the email you used with Dezygn v1 to access your image library.
                  </p>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Want to upgrade?</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      To update your account to the latest version of Dezygn, 
                      <a 
                        href="https://chat.dezygn.com/legacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-medium ml-1"
                      >
                        follow this link
                      </a>.
                    </p>
                    <p className="text-sm text-gray-600">
                      If you already upgraded, you can simply click on the Login link at the top of this page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}