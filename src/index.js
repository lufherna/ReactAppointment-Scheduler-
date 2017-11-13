import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'normalize.css'
require('./scss/app.scss')
window.React = React
ReactDom.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

// MuiThemeProvider is a wrapper component for MaterialUI's components
// here we'll import any necessary global libraries or wrapper
// components. We'll also use it as the render point for our
// React app