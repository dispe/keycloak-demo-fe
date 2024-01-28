import { useState } from 'react'
import './App.css'
import { useKeycloak } from '@react-keycloak/web'

function App() {

  const { keycloak } = useKeycloak();

  return (
    <>
      <h1>Keycloak Integration in a React app</h1>
      <div className="card">
        {!keycloak.authenticated ? (
          <>
            <h2>Not authenticated</h2>
            <p>
              <button onClick={() => keycloak.login()}>Login</button>
            </p>
          </>
        ) : (
          <>
            <h2>Authenticated</h2>
            <p>
              <button onClick={() => keycloak.logout()}>Logout</button>
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default App
