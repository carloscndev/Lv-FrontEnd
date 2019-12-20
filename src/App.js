// Import Modules
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Components
import Routes from './routes'

// Import Styles
import './styles/reset.scss'

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default App
