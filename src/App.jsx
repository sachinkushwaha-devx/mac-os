import React from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import "./app.scss"
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'



const App = () => {
  return (
   <main>
    <Nav />
   <Doc />
    <Github />
    <Note />
    <Resume />
    <Spotify />
    <Cli />


   </main>
  )
}

export default App
 