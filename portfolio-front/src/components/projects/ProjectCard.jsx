import { Link } from 'react-router-dom'
import { MINOR_TECH } from '../../constants'
import styles from './ProjectCard.module.css'

const MAX_TAGS = 5

export default function ProjectCard({ project, index, inView = true }) {
  const { id, title, description, techStack, period, role, images } = project
  const num = String(index + 1).padStart(2, '0')
  const thumbnail = images?.[0]

  const keyTech = techStack.filter((t) => !MINOR_TECH.has(t.name))
  const shown = keyTech.slice(0, MAX_TAGS)
  const hidden = techStack.length - shown.length

  return (
    <div
      className={`${styles.wrapper} ${inView ? styles.visible : ''}`}
      style={{ '--index': index }}
    >
      <Link to={`/projects/${id}`} className={styles.card}>
        <div className={styles.media}>
          {thumbnail ? (
            <img src={thumbnail} alt={`${title} 화면`} className={styles.thumb} loading="lazy" />
          ) : (
            <div className={styles.cover} aria-hidden="true">
              <span className={styles.coverNum}>{num}</span>
              <span className={styles.coverTitle}>{title}</span>
            </div>
          )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.meta}>{period} · {role}</p>
          <p className={styles.desc}>{description}</p>
          <div className={styles.tags}>
            {shown.map((tech) => (
              <span key={tech.name} className={styles.tag}>{tech.name}</span>
            ))}
            {hidden > 0 && <span className={`${styles.tag} ${styles.more}`}>+{hidden}</span>}
          </div>
          <span className={styles.cta}>자세히 보기 →</span>
        </div>
      </Link>
    </div>
  )
}
