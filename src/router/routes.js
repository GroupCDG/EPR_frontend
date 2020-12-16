import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

// route object shape: [path, {element:<ElementToRended>}]

const routes = [
  ['/', Home],
  ['*', NotFound],
]

export default routes
