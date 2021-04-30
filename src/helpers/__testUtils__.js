import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme, { Typography } from 'theme/default'
import CssBaseline from 'theme/baseline'
import { render as rtlRender } from '@testing-library/react'
import rtRenderer from 'react-test-renderer'

export function tlRender(ui) {
  const App = () => (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline Typography={Typography} />
      <Typography />
      {ui}
    </ThemeProvider>
  )
  return rtlRender(<App />)
}

export function tRender(ui) {
  const App = () => (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline Typography={Typography} />
      <Typography />
      {ui}
    </ThemeProvider>
  )
  return rtRenderer(<App />)
