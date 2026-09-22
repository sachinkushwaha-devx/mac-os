import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
const Resume = ({windowName, setWindowsState}) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
