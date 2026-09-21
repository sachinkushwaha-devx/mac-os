import React, { useState } from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import "./app.scss"
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'



const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  return (
   <main>
    < Nav />
   <Doc windowsState={windowsState} setWindowsState={setwindowsState} />
    { windowsState.github &&< Github />}
    { windowsState.note && <Note /> }
    { windowsState.resume && <Resume /> }
    { windowsState.spotify && <Spotify /> }
    <Cli />


   </main>
  )
}

export default App
 