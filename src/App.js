import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.js'
import Navbar from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer.js'
import VerticalTimelinePopup from './components/VerticalTimelinePopup/VerticalTimelinePopup.js'
import TradRackCalculator from './pages/TradRackCalculator.js'
import ContactFormPopup from './components/ContactFormPopup/ContactFormPopup.js'
import { StylesProvider } from '@material-ui/core/styles'
import { ToastContainer } from 'react-toastify'

function App() {
  //Sidebar logic and state
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

  //Timelinepopup logic and state
  const [timelineIsOpen, setTimelineIsOpen] = useState(false)
  const toggleTimeline = () => setTimelineIsOpen(!timelineIsOpen)

  //ContactFormPopup logic and state
  const [contactIsOpen, setContactIsOpen] = useState(false)
  const toggleContactPopup = () => setContactIsOpen(!contactIsOpen)

  //Stops background scroll when timeline is open
  useEffect(() => {
    const popupIsOpen = () => {
      if (timelineIsOpen || contactIsOpen) {
        return true
      } else {
        return false
      }
    }

    if (popupIsOpen()) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <>
      <ToastContainer />
      <StylesProvider injectFirst>
        <Router>
          <ContactFormPopup
            contactIsOpen={contactIsOpen}
            toggleContact={toggleContactPopup}
          />

          <VerticalTimelinePopup
            timelineIsOpen={timelineIsOpen}
            toggleTimeline={toggleTimeline}
          />
          <Sidebar isOpen={sidebarIsOpen} toggle={toggleSidebar} />
          <Navbar
            toggleSidebar={toggleSidebar}
            toggleContactPopup={toggleContactPopup}
          />
          <Switch>
            <Route exact path='/'>
              <Home toggleTimeline={toggleTimeline} />{' '}
            </Route>
            <Route exact path='/tradrack' component={TradRackCalculator} />
          </Switch>
          <Footer />
        </Router>
      </StylesProvider>
    </>
  )
}

export default App
