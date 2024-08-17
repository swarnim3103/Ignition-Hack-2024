import React from 'react';
import { useEffect } from 'react';

const Signin = () => {
  const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: CLIENT_ID,
        });
      });
    };
    
    const addGoogleSignInButton = () => {
      window.gapi.signin2.render('google-signin-button', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
      });
    };

    initializeGoogleSignIn();
    addGoogleSignInButton();
  }, []);

  const onSuccess = (googleUser) => {
    console.log('Logged in as:', googleUser.getBasicProfile().getName());
    // Handle the login success, maybe send the token to your server
  };

  const onFailure = (error) => {
    console.log('Google Sign-In failed:', error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 text-center">
        <h1 className="text-2xl font-bold">Sign in to Your Account</h1>
        <div id="google-signin-button"></div>
      </div>
    </div>
  );
};

export default Signin;
