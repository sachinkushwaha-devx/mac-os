import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({ windowName, setWindowsState, closeWindow, activeWindow, setActiveWindow }) => {
  const pdfUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <div>
      <MacWindow
        windowName={windowName}
        setWindowsState={setWindowsState}
        closeWindow={closeWindow}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        title="sachinkushwaha - resume"
      >
        <div className="resume-window">
          <embed src={pdfUrl} title="Sachin Kushwaha resume" />
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
