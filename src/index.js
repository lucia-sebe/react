/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import Store from "../src/Redux/store";
import {Provider} from 'react-redux';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <Auth0Provider 
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID} 
    redirectUri={process.env.REACT_APP_REDIRECT_URI}
    >
    <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
