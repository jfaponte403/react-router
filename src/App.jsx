import './App.css'
import {useEffect, useState} from "react";
import {EVENTS} from "./utils.js";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


export function navigate(href) {
  window.history.pushState(null, null, href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
