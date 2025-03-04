import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.tsx';
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientid: string | undefined = import.meta.env.VITE_CLIENT_ID; 

if (!clientid) {
  console.error("Google Client ID is missing! Check your .env file.");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {clientid ? (
      <GoogleOAuthProvider clientId={clientid}>
        <BrowserRouter>  
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    ) : (
      <p>Missing Google Client ID</p>
    )}
  </StrictMode>,
);
