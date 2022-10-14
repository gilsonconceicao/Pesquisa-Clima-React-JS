import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthStoreContextProvider } from './contexts/authStoreContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthStoreContextProvider>
      <App/>
    </AuthStoreContextProvider>
  </React.StrictMode>
)
