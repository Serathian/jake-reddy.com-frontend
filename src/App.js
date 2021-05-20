import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactMe from './components/ContactMe/ContactMe.js'
import Home from './pages/Home.js'
import Navbar from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer.js'
import TimelinePopup from './components/TimelinePopup/TimelinePopup.js'

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [timelineIsOpen, setTimelineIsOpen] = useState(false)

  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)
  const toggleTimeline = () => setTimelineIsOpen(!timelineIsOpen)

  return (
    <>
      <Router>
        <TimelinePopup
          timelineIsOpen={timelineIsOpen}
          toggleTimeline={toggleTimeline}
        />
        <Sidebar isOpen={sidebarIsOpen} toggle={toggleSidebar} />
        <Navbar toggle={toggleSidebar} />
        <Switch>
          <Route exact path='/'>
            <Home toggleTimeline={toggleTimeline} />{' '}
          </Route>
          <Route exact path='/contact' component={ContactMe} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
