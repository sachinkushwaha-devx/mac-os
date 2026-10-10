import React from 'react'
import './dock.scss'

const CalendarIcon = () => {
  const date = new Date()
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate()

  return (
    <svg
      className="calendar-app-icon"
      viewBox="0 0 48 48"
      role="img"
      aria-label={`${month} ${day}`}
    >
      <rect x="5" y="4" width="38" height="40" rx="8" fill="#fff" />
      <path d="M5 12a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v8H5z" fill="#ed3b3b" />
      <path d="M15 2v8m18-8v8" stroke="#f7f7f7" strokeWidth="3" strokeLinecap="round" />
      <text x="24" y="17" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" letterSpacing="1">
        {month}
      </text>
      <text x="24" y="38" textAnchor="middle" fill="#282828" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="600">
        {day}
      </text>
    </svg>
  )
}

const Doc = ({ openWindow }) => {
  const baseUrl = import.meta.env.BASE_URL

  const dockItems = [
    { key: 'github', label: 'GitHub', src: `${baseUrl}doc-icons/github.svg`, action: () => openWindow('github') },
    { key: 'note', label: 'Notes', src: `${baseUrl}doc-icons/note.svg`, action: () => openWindow('note') },
    { key: 'resume', label: 'Resume', src: `${baseUrl}doc-icons/pdf.svg`, action: () => openWindow('resume') },
    { key: 'spotify', label: 'Spotify', src: `${baseUrl}doc-icons/spotify.svg`, action: () => openWindow('spotify') },
    { key: 'calendar', label: 'Calendar', src: `${baseUrl}doc-icons/calender.svg`, action: () => window.open('https://calendar.google.com/calendar/u/0/r', '_blank', 'noopener,noreferrer') },
    { key: 'mail', label: 'Mail', src: `${baseUrl}doc-icons/mail.svg`, action: () => window.open('mailto:sachinkushwaha8606@gmail.com', '_blank', 'noopener,noreferrer') },
    { key: 'linkedin', label: 'LinkedIn', src: `${baseUrl}doc-icons/link.svg`, action: () => window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer') },
    { key: 'cli', label: 'Terminal', src: `${baseUrl}doc-icons/cli.svg`, action: () => openWindow('cli') },
  ]

  return (
    <footer className="dock" aria-label="Application dock">
      {dockItems.map((item) => (
        <div
          key={item.key}
          onClick={item.action}
          className={`icon ${item.key}`}
          data-label={item.label}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              item.action()
            }
          }}
          aria-label={item.label}
        >
          {item.key === 'calendar' ? (
            <CalendarIcon />
          ) : (
            <img src={item.src} alt={item.label} />
          )}
        </div>
      ))}
    </footer>
  )
}

export default Doc
