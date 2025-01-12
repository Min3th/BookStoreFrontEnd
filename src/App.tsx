import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import Loginpage from './pages/loginpage';
import { AuthProvider } from '@asgardeo/auth-react';

const authConfig = {
  clientID: 'your-client-id',  // Replace with your actual client ID
  serverOrigin: 'https://your-auth-server-url',  // Replace with your Auth server URL
  redirectUri: 'http://localhost:3000',  // Adjust as per your setup
  endpoints: {
    authorizationEndpoint: 'https://your-auth-server-url/authorize',  // Replace with your server's authorization endpoint
    tokenEndpoint: 'https://your-auth-server-url/token',  // Replace with your server's token endpoint
    userinfoEndpoint: 'https://your-auth-server-url/userinfo',  // Replace with your server's userinfo endpoint
    jwksUri: 'https://your-auth-server-url/.well-known/jwks.json',  // Replace with your server's JWKS URI
    revocationEndpoint: 'https://your-auth-server-url/revoke',  // Add revocation endpoint if needed
    checkSessionIframe: 'https://your-auth-server-url/checksession',  // Add check session iframe endpoint if needed
    endSessionEndpoint: 'https://your-auth-server-url/end-session',  // Add end session endpoint if needed
    issuer: 'https://your-auth-server-url',  // Add issuer URL
  },
  signInRedirectURL: 'http://localhost:3000/login',  // URL to redirect after sign in
};

function App() {
  return (
    <AuthProvider config={authConfig}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
