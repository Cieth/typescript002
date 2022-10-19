import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-lkdpc934.us.auth0.com'
      clientId='lNqk6eBm53HpBUykPgzrEAMhd3vqSkr6' //tried .env but didnt work
      redirectUri={window.location.origin}
      baseURL='http://localhost:3000'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
