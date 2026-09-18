import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date) => {
    const weekday = date
      .toLocaleDateString('en-US', { weekday: 'short' })
      .charAt(0)
      .toUpperCase() + date
        .toLocaleDateString('en-US', { weekday: 'short' })
        .slice(1)
        .toLowerCase()
    const month = date
      .toLocaleDateString('en-US', { month: 'short' })
      .toLowerCase()
    const day = date.getDate()
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',    
    })

    return `${weekday} ${month} ${day} ${time}`
  }

  return <div>{formatDateTime(currentTime)}</div>
}

export default DateTime
