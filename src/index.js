import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const appJsx = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(appJsx, document.getElementById('root'))
