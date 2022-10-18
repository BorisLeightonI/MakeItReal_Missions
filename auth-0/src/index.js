import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider 
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}> */}
    <Auth0Provider domain={'dev-21gth2is.us.auth0.com'} clientId={'fjlPWGa4ZFZBoVlLwEn2cAySsffLLKrL'} redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);