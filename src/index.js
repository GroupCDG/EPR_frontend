import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'theme/baseline'
import { Typography } from 'theme/default'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline Typography={Typography} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
