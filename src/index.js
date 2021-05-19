import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'theme/Baseline'
import { Typography } from 'theme/Default'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline Typography={Typography} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
