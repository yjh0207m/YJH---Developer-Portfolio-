import { useEffect, useRef } from 'react'
import styles from './CursorTrail.module.css'

const NOTES = ['♩', '♪', '♫', '♬']

export default function CursorTrail() {
  const containerRef = useRef(null)

  useEffect(() => {
    // 터치 전용 디바이스에서는 비활성화
    if (window.matchMedia('(hover: none)').matches) return

    const container = containerRef.current
    let lastTime = 0

    function handleMouseMove(e) {
      const now = Date.now()
      if (now - lastTime < 85) return
      lastTime = now

      const note = document.createElement('span')
      note.className = styles.note
      note.textContent = NOTES[Math.floor(Math.random() * NOTES.length)]
      note.style.left = `${e.clientX}px`
      note.style.top  = `${e.clientY}px`
      note.style.setProperty('--dx', `${(Math.random() - 0.5) * 32}px`)
      note.style.setProperty('--dy', `${-(16 + Math.random() * 28)}px`)
      container.appendChild(note)

      note.addEventListener('animationend', () => note.remove(), { once: true })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={containerRef} className={styles.container} />
}
