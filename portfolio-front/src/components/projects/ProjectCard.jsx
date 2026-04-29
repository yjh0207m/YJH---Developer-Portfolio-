import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { id, title, description, techStack } = project
  return (
    <Link to={`/projects/${id}`} className={styles.card}>
      <div className={styles.number}>0{id}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {techStack.map((tech) => (
          <span key={tech.name} className={styles.tag}>
            {tech.name}
          </span>
        ))}
      </div>
      <span className={styles.arrow}>→</span>
    </Link>
  )
}
