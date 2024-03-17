import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="784790034393-eul4r23vbq012jcfpt01l4254jmlh8gn.apps.googleusercontent.com">
     <App />
  </GoogleOAuthProvider>  
  
);
reportWebVitals();
