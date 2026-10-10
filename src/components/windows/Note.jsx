import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import MacWindow from './MacWindow'
import './note.scss'

const Note = ({ windowName, setWindowsState, closeWindow, activeWindow, setActiveWindow }) => {
  const [markdown, setMarkdown] = useState(null)
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    fetch(`${baseUrl}note.txt`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown('Unable to load notes.'))
  }, [baseUrl])

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      closeWindow={closeWindow}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      title="sachinkushwaha - notes"
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  )
}

export default Note

