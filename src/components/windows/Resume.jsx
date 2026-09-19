import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
const Resume = () => {
  return (
    <div>
      <MacWindow>
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
