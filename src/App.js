import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactMe from './components/ContactMe/ContactMe.js'
import Home from './pages/Home.js'
import Navbar from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer.js'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={ContactMe} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
