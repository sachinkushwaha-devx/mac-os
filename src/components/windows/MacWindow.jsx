import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({
  children,
  width = '38vw',
  height = '46vh',
  windowName,
  setWindowsState,
  closeWindow,
  activeWindow,
  setActiveWindow,
  title = 'sachinkushwaha - zsh',
}) => {
  const isActive = activeWindow === windowName

  const handleClose = () => {
    if (closeWindow) {
      closeWindow(windowName)
      return
    }

    setWindowsState((state) => ({ ...state, [windowName]: false }))
  }

  return (
    <Rnd
      default={{
        width,
        height,
        x: Math.max(100, window.innerWidth * 0.18),
        y: Math.max(80, window.innerHeight * 0.14),
      }}
      minWidth={320}
      minHeight={220}
      bounds="window"
      dragHandleClassName="window-drag-handle"
    >
      <div
        className={`window ${isActive ? 'is-active' : ''}`}
        onMouseDown={() => setActiveWindow?.(windowName)}
      >
        <div className="nav window-drag-handle">
          <div className="dots">
            <div onClick={handleClose} className="dot red" aria-label="Close window" />
            <div className="dot yellow" aria-label="Minimize window" />
            <div className="dot green" aria-label="Expand window" />
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow
