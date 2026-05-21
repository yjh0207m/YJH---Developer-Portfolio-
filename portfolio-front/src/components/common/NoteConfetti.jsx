import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './NoteConfetti.module.css'

const NOTES = ['♩', '♪', '♫', '♬']

export default function NoteConfetti({ show, originRef }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!show) return

    const raf = requestAnimationFrame(() => {
      let startX = window.innerWidth * 0.5
      let startY = window.innerHeight * 0.65

      if (originRef?.current) {
        const rect = originRef.current.getBoundingClientRect()
        startX = rect.left + rect.width / 2
        startY = rect.top + rect.height / 2
      }

      setParticles(
        Array.from({ length: 70 }, (_, i) => ({
          id: i,
          note: NOTES[i % 4],
          x: startX + (Math.random() - 0.5) * 120,
          y: startY + (Math.random() - 0.5) * 20,
          dx: (Math.random() - 0.5) * 520,
          dy: -(60 + Math.random() * 480),
          delay: 0,
          dur: 1.4 + Math.random() * 1.2,
          size: 0.8 + Math.random() * 1.4,
          rotate: (Math.random() - 0.5) * 720,
        }))
      )
    })

    return () => cancelAnimationFrame(raf)
  }, [show, originRef])

  useEffect(() => {
    if (!particles.length) return
    const t = setTimeout(() => setParticles([]), 3200)
    return () => clearTimeout(t)
  }, [particles])

  if (!particles.length) return null

  return createPortal(
    <div className={styles.overlay}>
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.note}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}rem`,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--rotate': `${p.rotate}deg`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.note}
        </span>
      ))}
    </div>,
    document.body
  )
}
