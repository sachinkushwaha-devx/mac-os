import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({ windowName, setWindowsState, closeWindow, activeWindow, setActiveWindow }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      closeWindow={closeWindow}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="28vw"
      height="52vh"
      title="sachinkushwaha - spotify"
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          title="Spotify playlist"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8IWBJcgQt4I?utm_source=generator&theme=0&si=ea5391f9779a491b"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </MacWindow>
  )
}

export default Spotify
