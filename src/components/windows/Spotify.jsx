import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"
const Spotify = ({windowName, setWindowsState}) => {
  return (  
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width='25vw'>
        <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8IWBJcgQt4I?utm_source=generator&theme=0&si=ea5391f9779a491b" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
