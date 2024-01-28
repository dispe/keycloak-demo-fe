import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import keycloak from './keycloak'
import { ReactKeycloakProvider } from "@react-keycloak/web"


const initOptions = {
  // onLoad: 'require-login'  // The application has no free access, so the user is redirected to the login page.
  onLoad: 'check-sso'         // The application has some non restricted pages, but can have restricted areas.
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <App />
    </ReactKeycloakProvider>
  </>
)
