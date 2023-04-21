import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import ThemeProvider from './style/ThemeProvider'
import GlobalStyle from './style/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
