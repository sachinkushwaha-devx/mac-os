import React, { useState } from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import './app.scss'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const windowDefaults = {
  github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false,
}

const App = () => {
  const [windowsState, setWindowsState] = useState(windowDefaults)
  const [activeWindow, setActiveWindow] = useState(null)
  const [widgetOpen, setWidgetOpen] = useState(false)

  const openWindow = (name) => {
    setWindowsState((state) => ({ ...state, [name]: true }))
    setActiveWindow(name)
    setWidgetOpen(false)
  }

  const closeWindow = (name) => {
    setWindowsState((state) => ({ ...state, [name]: false }))
    setActiveWindow((current) => (current === name ? null : current))
  }

  const closeAllWindows = () => {
    setWindowsState(windowDefaults)
    setActiveWindow(null)
  }

  return (
    <main
      className="desktop-shell"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}mac-wallpaper.jpg)` }}
    >
      <div className="desktop-overlay" />
      <Nav
        openWindow={openWindow}
        closeAllWindows={closeAllWindows}
        widgetOpen={widgetOpen}
        setWidgetOpen={setWidgetOpen}
      />
      <Doc openWindow={openWindow} />

      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowsState.note && (
        <Note
          windowName="note"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowsState.cli && (
        <Cli
          windowName="cli"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
    </main>
  )
}

export default App
 