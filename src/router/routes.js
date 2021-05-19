import Home from 'pages/home'
import NotFound from 'pages/NotFound'

// route object shape: [path, {element:<ElementToRended>}]

const routes = [
  ['/', Home],
  ['*', NotFound],
]

export default routes
