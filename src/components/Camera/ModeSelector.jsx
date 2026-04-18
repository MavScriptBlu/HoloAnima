/*
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useRef, useEffect} from 'react'
import {useStore} from '../../lib/store'
import modes from '../../lib/modes'
import './ModeSelector.css'

/**
 * Renders the horizontal list of selectable creative modes.
 */
export default function ModeSelector() {
  const activeMode = useStore.useActiveMode()
  const {setMode} = useStore.getState()
  const scrollRef = useRef(null)

  // Implement horizontal drag-to-scroll for mouse users
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let isDown = false
    let startX
    let scrollLeft

    const handleMouseDown = (e) => {
      isDown = true
      el.classList.add('grabbing')
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      el.classList.remove('grabbing')
    }

    const handleMouseUp = () => {
      isDown = false
      el.classList.remove('grabbing')
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', handleMouseDown)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('mouseup', handleMouseUp)
    el.addEventListener('mousemove', handleMouseMove)

    return () => {
      el.removeEventListener('mousedown', handleMouseDown)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.removeEventListener('mouseup', handleMouseUp)
      el.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <ul className="mode-selector" ref={scrollRef}>
      {Object.entries(modes).map(([key, {name, emoji}]) => (
        <li key={key}>
          <button
            onClick={() => setMode(key)}
            className={`mode-btn ${key === activeMode ? 'active' : ''}`}
            aria-pressed={key === activeMode}
          >
            <span className="emoji">{emoji}</span>
            <span className="name">{name}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
