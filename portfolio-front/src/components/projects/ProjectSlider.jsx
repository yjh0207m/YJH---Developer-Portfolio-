import { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import styles from './ProjectSlider.module.css'

const AUTOPLAY_MS = 4500
const SLIDE_MS = 700
const EDGE_TOLERANCE = 4
const DRAG_THRESHOLD = 5
const FRICTION = 0.94
const MIN_VELOCITY = 0.03
const HINT_SEEN_KEY = 'yjh-slider-hint-seen'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function readHintSeen() {
  try {
    return sessionStorage.getItem(HINT_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

export default function ProjectSlider({ projects, inView, heading }) {
  const trackRef = useRef(null)
  const raf = useRef(0)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false, samples: [] })
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(2)
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [hintSeen, setHintSeen] = useState(readHintSeen)

  const count = projects.length
  const maxIndex = Math.max(0, count - visible)
  const showHint = inView && !hintSeen

  function dismissHint() {
    if (hintSeen) return
    setHintSeen(true)
    try {
      sessionStorage.setItem(HINT_SEEN_KEY, '1')
    } catch {
      // 저장소 접근 불가 시 무시
    }
  }

  function metrics() {
    const el = trackRef.current
    const first = el?.firstElementChild
    if (!el || !first) return null
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const step = first.getBoundingClientRect().width + gap
    return { el, gap, step }
  }

  function sync() {
    const m = metrics()
    if (!m) return
    const { el, gap, step } = m
    const perView = Math.max(1, Math.round((el.clientWidth + gap) / step))
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - EDGE_TOLERANCE
    const raw = atEnd ? count - perView : Math.round(el.scrollLeft / step)
    setVisible(perView)
    setIndex(Math.min(Math.max(0, raw), Math.max(0, count - perView)))
  }

  function stopAnimation() {
    cancelAnimationFrame(raf.current)
  }

  function animateTo(to) {
    const el = trackRef.current
    if (!el) return
    stopAnimation()
    if (prefersReducedMotion()) {
      el.scrollLeft = to
      return
    }
    const from = el.scrollLeft
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / SLIDE_MS)
      el.scrollLeft = from + (to - from) * easeInOutCubic(t)
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  function goTo(i) {
    const m = metrics()
    if (!m) return
    animateTo(Math.min(Math.max(0, i), maxIndex) * m.step)
  }

  // 드래그를 놓은 뒤 속도에 비례해 서서히 멈추는 관성 스크롤
  function glide(initialVelocity) {
    const el = trackRef.current
    if (!el || prefersReducedMotion()) return
    stopAnimation()
    let velocity = initialVelocity
    let last = performance.now()
    const tick = (now) => {
      const dt = now - last
      last = now
      const before = el.scrollLeft
      el.scrollLeft = before + velocity * dt
      velocity *= Math.pow(FRICTION, dt / 16)
      const stuck = el.scrollLeft === before
      if (Math.abs(velocity) > MIN_VELOCITY && !stuck) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  // 일정 시간마다 한 칸씩 이동, 마지막에 도달하면 처음으로 (호버·드래그 중에는 정지)
  useEffect(() => {
    if (hovered || dragging || maxIndex === 0 || prefersReducedMotion()) return
    const t = setTimeout(() => {
      if (document.hidden) return
      goTo(index >= maxIndex ? 0 : index + 1)
    }, AUTOPLAY_MS)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, hovered, dragging, maxIndex])

  function onPointerDown(e) {
    stopAnimation()
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    const el = trackRef.current
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
      samples: [{ t: performance.now(), x: e.clientX }],
    }
    setDragging(true)
  }

  function onPointerMove(e) {
    const d = drag.current
    if (!d.active) return
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > DRAG_THRESHOLD) d.moved = true
    trackRef.current.scrollLeft = d.startScroll - dx
    d.samples.push({ t: performance.now(), x: e.clientX })
    if (d.samples.length > 6) d.samples.shift()
  }

  function endDrag() {
    const d = drag.current
    if (!d.active) return
    d.active = false
    setDragging(false)
    const first = d.samples[0]
    const last = d.samples[d.samples.length - 1]
    const elapsed = last.t - first.t
    const idle = performance.now() - last.t
    if (elapsed > 0 && idle < 80) glide(-(last.x - first.x) / elapsed)
  }

  function onClickCapture(e) {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <>
      <div className={styles.head}>{heading}</div>

      <div
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={stopAnimation}
        onTouchStart={stopAnimation}
        onClick={dismissHint}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div
          ref={trackRef}
          className={`${styles.track} ${dragging ? styles.dragging : ''}`}
          onScroll={sync}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          role="region"
          aria-label="주요 프로젝트 목록"
          aria-roledescription="carousel"
        >
          {projects.map((p, i) => (
            <div key={p.id} className={styles.slide}>
              <ProjectCard project={p} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {showHint && (
          <div className={styles.hint} role="note">
            <div className={styles.hintBox}>
              <span className={`${styles.hintArrow} ${styles.hintLeft}`} aria-hidden="true">‹</span>
              <div className={styles.hintText}>
                <strong>좌우로 밀어서 넘겨보세요</strong>
                <span>다른 프로젝트를 확인할 수 있어요 · 클릭하면 사라집니다</span>
              </div>
              <span className={`${styles.hintArrow} ${styles.hintRight}`} aria-hidden="true">›</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.dots} role="group" aria-label="프로젝트 선택">
        {projects.map((p, i) => {
          const active = i >= index && i < index + visible
          return (
            <button
              key={p.id}
              type="button"
              className={`${styles.dot} ${active ? styles.dotActive : ''}`}
              onClick={() => {
                dismissHint()
                goTo(i)
              }}
              aria-label={`${i + 1}번째 프로젝트: ${p.title}`}
              aria-current={active ? 'true' : undefined}
            />
          )
        })}
      </div>
    </>
  )
}
