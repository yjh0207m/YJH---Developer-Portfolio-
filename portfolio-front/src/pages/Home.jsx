import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import { useInView } from '../hooks/useInView'
import ProjectCard from '../components/projects/ProjectCard'
import MagneticBtn from '../components/common/MagneticBtn'
import Pagination from '../components/common/Pagination'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'
import { usePagination } from '../hooks/usePagination'
import { CATEGORY_ORDER, PROJECT_ORDER } from '../constants'
import styles from './Home.module.css'

// 타이핑 효과 훅
function useTypewriter(text, delay = 500, speed = 55) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed('')
    setDone(false)
    const t = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text, delay, speed])
  return { displayed, done }
}

// 카운트업 훅
function useCountUp(targetStr, inView) {
  const [display, setDisplay] = useState('')
  const started = useRef(false)
  useEffect(() => {
    if (!inView || started.current) return
    const match = targetStr.match(/^([\d.]+)(.*)$/)
    if (!match) { setDisplay(targetStr); return }
    started.current = true
    const target = parseFloat(match[1])
    const suffix = match[2]
    const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
    const duration = 1400
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay((eased * target).toFixed(decimals) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, targetStr])
  return display || targetStr
}

function StatCard({ value, label, sub, inView }) {
  const animated = useCountUp(value, inView)
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{animated}</div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statSub}>{sub}</div>
    </div>
  )
}

export default function Home() {
  const { data: projects, loading, error } = useFetch(api.getProjects)
  const { data: skills } = useFetch(api.getSkills)
  const { data: highlights } = useFetch(api.getHighlights)
  const { data: profile } = useFetch(api.getProfile)

  const { displayed: typed, done: typingDone } = useTypewriter('코드를 창작합니다.')

  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [statsRef, statsInView] = useInView()

  const { page: projPage, setPage: setProjPage, totalPages: projTotalPages, slice: pagedProjects } =
    usePagination(
      [...(projects ?? [])].sort((a, b) => {
        const ai = PROJECT_ORDER.indexOf(a.id)
        const bi = PROJECT_ORDER.indexOf(b.id)
        return (ai === -1 ? -Infinity : ai) - (bi === -1 ? -Infinity : bi)
      }),
      5
    )

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>♩ 음악에서 코드로</p>
            <h1 className={styles.headline}>
              악보처럼<br />
              <span className={styles.headlineAccent}>
                {typed}
                {!typingDone && <span className={styles.cursor}>|</span>}
              </span>
            </h1>
            <p className={styles.sub}>
              선율을 설계하듯 코드를 안정적이게 구조화하고<br />
              신기술을 활용하여 빠르게 성과를 보여주는 풀스택 개발자입니다.
            </p>
            <div className={styles.heroBtns}>
              <MagneticBtn>
                <Link to="/projects" className={styles.btnPrimary}>프로젝트 보기</Link>
              </MagneticBtn>
              <MagneticBtn>
                <Link to="/contact" className={styles.btnSecondary}>연락하기</Link>
              </MagneticBtn>
            </div>
            <div className={styles.infoStrip}>
              {profile?.location && (
                <span className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  {profile.location}
                </span>
              )}
              {profile?.phone && (
                <span className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  {profile.phone}
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroProfile}>
            <div className={styles.profileCard}>
              <img
                src="/profile.jpg"
                alt="프로필"
                className={styles.profileImg}
              />
              <div className={styles.profileName}>{profile?.name ?? ''}</div>
              <div className={styles.profileTitle}>{profile?.position ?? ''}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skillsRef}
        className={`${styles.section} ${styles.fadeUp} ${skillsInView ? styles.inView : ''}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillGroups}>
            {CATEGORY_ORDER.map((cat) => {
              const items = (skills ?? []).filter((s) => s.category === cat)
              if (items.length === 0) return null
              return (
                <div key={cat} className={styles.skillGroup}>
                  <span className={styles.skillGroupLabel}>{cat}</span>
                  <div className={styles.skillTags}>
                    {items.map(({ name }) => (
                      <span key={name} className={`${styles.skillTag} ${styles.core}`}>
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        ref={statsRef}
        className={`${styles.section} ${styles.fadeUp} ${statsInView ? styles.inView : ''}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Highlights</h2>
          <div className={styles.statsGrid}>
            {(highlights ?? []).map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                label={s.label}
                sub={s.sub}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        ref={projectsRef}
        className={`${styles.section} ${styles.fadeUp} ${projectsInView ? styles.inView : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <Link to="/projects" className={styles.seeAll}>전체 보기 →</Link>
          </div>
          {loading && <Spinner />}
          {error && <ErrorMessage message={error.message} />}
          {projects && (
            <>
              <div className={styles.projectGrid}>
                {pagedProjects.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={(projPage - 1) * 5 + i}
                    inView={projectsInView}
                  />
                ))}
              </div>
              <Pagination
                page={projPage}
                totalPages={projTotalPages}
                onPageChange={(p) => {
                  setProjPage(p)
                  projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              />
            </>
          )}
        </div>
      </section>
    </div>
  )
}
