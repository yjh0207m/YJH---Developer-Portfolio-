import { Link } from 'react-router-dom'
import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import ProjectCard from '../components/projects/ProjectCard'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'
import { CATEGORY_ORDER } from '../constants'
import styles from './Home.module.css'

export default function Home() {
  const { data: projects, loading, error } = useFetch(api.getProjects)
  const { data: skills } = useFetch(api.getSkills)
  const { data: highlights } = useFetch(api.getHighlights)
  const { data: profile } = useFetch(api.getProfile)

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>개발자 유조현</p>
            <h1 className={styles.headline}>
              창작이 곧<br />
              개발이었습니다.
            </h1>
            <p className={styles.sub}>
              기술로 무언가를 만들고 자동화하는 일에 매력을 느끼는 풀스택 개발자입니다.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/projects" className={styles.btnPrimary}>
                프로젝트 보기
              </Link>
              <Link to="/contact" className={styles.btnSecondary}>
                연락하기
              </Link>
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

      {/* Featured Projects */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <Link to="/projects" className={styles.seeAll}>
              전체 보기 →
            </Link>
          </div>
          {loading && <Spinner />}
          {error && <ErrorMessage message={error.message} />}
          {projects && (
            <div className={styles.projectGrid}>
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
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
                      <span
                        key={name}
                        className={`${styles.skillTag} ${styles.core}`}
                      >
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

      {/* Stats */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Highlights</h2>
          <div className={styles.statsGrid}>
            {(highlights ?? []).map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
