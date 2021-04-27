import React from 'react'
import { routes, OnRoute } from 'router'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <OnRoute />
      <Routes>
        {routes.map(([path, Value]) => (
          <Route key={path} path={path} element={<Value />} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
