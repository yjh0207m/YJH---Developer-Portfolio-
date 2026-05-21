import { useRef } from 'react'

export default function MagneticBtn({ children }) {
  const ref = useRef(null)

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.35
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = 'transform 0.15s ease'
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
  }

  return (
    <div
      ref={ref}
      style={{ display: 'inline-flex' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
