import React, { useEffect, useRef, useState } from 'react'
import './nav.scss'
import DateTime from './DateTime'

const widgetIcons = {
  youtube: 'https://www.youtube.com/favicon.ico',
  drive: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png',
  games: 'https://www.google.com/favicon.ico',
  x: 'https://abs.twimg.com/favicons/twitter.3.ico',
}

const Nav = ({ openWindow, closeAllWindows, widgetOpen, setWidgetOpen }) => {
  const baseUrl = import.meta.env.BASE_URL
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    if (!widgetOpen && !openMenu) return

    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-trigger, .menu-panel, .widget-trigger')) {
        setOpenMenu(null)
        setWidgetOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [widgetOpen, openMenu, setWidgetOpen])

  const quickApps = [
    {
      key: 'youtube',
      icon: widgetIcons.youtube,
      action: () => window.open('https://www.youtube.com', '_blank', 'noopener,noreferrer'),
    },
    {
      key: 'drive',
      icon: widgetIcons.drive,
      action: () => window.open('https://drive.google.com', '_blank', 'noopener,noreferrer'),
    },
    {
      key: 'games',
      icon: widgetIcons.games,
      action: () => window.open('https://www.google.com/search?q=games', '_blank', 'noopener,noreferrer'),
    },
    {
      key: 'x',
      icon: widgetIcons.x,
      action: () => window.open('https://x.com', '_blank', 'noopener,noreferrer'),
    },
  ]

  const fileActions = [
    { label: 'Open Projects', action: () => openWindow('github') },
    { label: 'Open Notes', action: () => openWindow('note') },
    { label: 'Open Resume', action: () => openWindow('resume') },
    { label: 'Close All Windows', action: closeAllWindows },
  ]

  const terminalActions = [
    { label: 'Open Terminal', action: () => openWindow('cli') },
    { label: 'Terminal Help', action: () => openWindow('cli') },
  ]

  const runAction = (action) => {
    action()
    setOpenMenu(null)
    setWidgetOpen(false)
  }

  return (
    <nav>
      <div className="left">
        <div className="apple-icon" aria-label="Apple menu">
          <img src={`${baseUrl}nav-icons/apple.svg`} alt="Apple icon" />
        </div>

        <div className="nav-item brand-item">
          <p>Sachin Kushwaha</p>
        </div>
        <div className="menu-trigger">
          <button
            type="button"
            className={`nav-item menu-button ${openMenu === 'file' ? 'is-open' : ''}`}
            aria-expanded={openMenu === 'file'}
            aria-haspopup="menu"
            onClick={() => {
              setOpenMenu((current) => (current === 'file' ? null : 'file'))
              setWidgetOpen(false)
            }}
          >
            File
          </button>
          {openMenu === 'file' && (
            <div className="menu-panel" role="menu" aria-label="File menu">
              {fileActions.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="menu-option"
                  role="menuitem"
                  onClick={() => runAction(item.action)}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="nav-item nav-static-item">
          <p>Window</p>
        </div>
        <div className="menu-trigger">
          <button
            type="button"
            className={`nav-item menu-button ${openMenu === 'terminal' ? 'is-open' : ''}`}
            aria-expanded={openMenu === 'terminal'}
            aria-haspopup="menu"
            onClick={() => {
              setOpenMenu((current) => (current === 'terminal' ? null : 'terminal'))
              setWidgetOpen(false)
            }}
          >
            Terminal
          </button>
          {openMenu === 'terminal' && (
            <div className="menu-panel" role="menu" aria-label="Terminal menu">
              {terminalActions.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="menu-option"
                  role="menuitem"
                  onClick={() => runAction(item.action)}
                >
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="menu-divider" />
              <button
                type="button"
                className="menu-option is-disabled"
                role="menuitem"
                aria-disabled="true"
                title="A browser app cannot start an operating-system administrator terminal."
              >
                <span>Administrator mode</span>
                <span className="disabled-note">Unavailable</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="right">
        <div className="nav-icon" aria-label="Network status">
          <img src={`${baseUrl}nav-icons/wifi.svg`} alt="Wifi icon" />
        </div>

        <div className="widget-trigger" aria-label="Quick actions widget">
          <button
            type="button"
            className="widget-button"
            onClick={() => setWidgetOpen((open) => !open)}
            aria-label="Open quick actions"
          >
            <span className="widget-icon" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
          </button>

          {widgetOpen && (
            <div className="widget-panel">
              <div className="widget-section">
                <div className="widget-grid">
                  {quickApps.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="widget-app-button"
                      onClick={() => {
                        item.action()
                        setWidgetOpen(false)
                      }}
                      aria-label={item.key}
                    >
                      <img src={item.icon} alt={item.key} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="nav-item clock-item">
          <DateTime />
        </div>
      </div>
    </nav>
  )
}

export default Nav
