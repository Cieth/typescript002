import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const config = {
  allowedConnections: ['facebook', 'github', 'facebook'],
};
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-lkdpc934.us.auth0.com'
      clientId='lNqk6eBm53HpBUykPgzrEAMhd3vqSkr6'
      redirectUri={window.location.origin}
      baseURL='http://localhost:3000'
      options={config}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
