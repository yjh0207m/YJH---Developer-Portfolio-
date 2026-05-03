import { useParams, Link } from 'react-router-dom'
import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import MetricCard from '../components/projects/MetricCard'
import Spinner from '../components/common/Spinner'
import { CATEGORY_ORDER } from '../constants'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const { data: project, loading, error } = useFetch(
    () => api.getProject(id),
    [id]
  )

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <Spinner />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.notFound}>
        <h2>{error.status === 404 ? '프로젝트를 찾을 수 없습니다.' : '오류가 발생했습니다.'}</h2>
        <Link to="/projects" className={styles.backLink}>
          ← 목록으로
        </Link>
      </div>
    )
  }

  if (!project) return null

  const {
    title, period, role, implementationType, techStack,
    metrics, githubUrl, demoUrl, pptUrl, description, lesson,
  } = project

  const summary = description
  const type = implementationType ?? role

  const techGroups = CATEGORY_ORDER.reduce((acc, cat) => {
    const names = (techStack ?? []).filter(t => t.category === cat).map(t => t.name)
    if (names.length > 0) acc.push({ category: cat, names })
    return acc
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/projects" className={styles.breadLink}>Projects</Link>
          <span className={styles.breadSep}>›</span>
          <span className={styles.breadCurrent}>{title}</span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>{period}</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>{type}</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>{role}</span>
          </div>
        </header>

        {/* Tech Stack grouped */}
        <div className={styles.techGroups}>
          {techGroups.map(({ category, names }) => (
            <div key={category} className={styles.techGroup}>
              <span className={styles.techGroupLabel}>{category}</span>
              <div className={styles.techGroupTags}>
                {names.map(name => (
                  <span key={name} className={styles.tag}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>프로젝트 요약</h2>
          <p className={styles.body}>{summary}</p>
        </section>

        {/* Metrics */}
        {metrics?.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>성과 지표</h2>
            <div className={styles.metricsGrid}>
              {metrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </section>
        )}

        {/* Lesson */}
        {lesson && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>느낀 점</h2>
            <p className={styles.body}>{lesson}</p>
          </section>
        )}

        {/* Links */}
        <div className={styles.links}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              GitHub 보기
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.btnSecondary}
            >
              시연 영상
            </a>
          )}
          {pptUrl && (
            <a
              href={pptUrl}
              download
              className={styles.btnSecondary}
            >
              PPT 다운로드
            </a>
          )}
          <Link to="/projects" className={styles.btnBack}>
            ← 목록으로
          </Link>
        </div>
      </div>
    </div>
  )
}
