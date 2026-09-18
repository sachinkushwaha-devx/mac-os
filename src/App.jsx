import React from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import "./app.scss"
import Github from './components/windows/Github'



const App = () => {
  return (
   <main>
    <Nav />
   <Doc />
    <Github />
   </main>
  )
}

export default App
 