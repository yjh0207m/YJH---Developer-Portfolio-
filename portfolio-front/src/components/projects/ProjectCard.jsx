import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index, inView = true }) {
  const { id, title, description, techStack } = project
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className={`${styles.wrapper} ${inView ? styles.visible : ''}`}
      style={{ '--index': index }}
    >
      <Link to={`/projects/${id}`} className={styles.row}>
        <div className={styles.left}>
          <span className={styles.num}>{num}</span>
          <div className={styles.meta}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tags}>
              {techStack.map((tech) => (
                <span key={tech.name} className={styles.tag}>{tech.name}</span>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.desc}>{description}</p>
        <span className={styles.arrow}>→</span>
      </Link>
    </div>
  )
}
