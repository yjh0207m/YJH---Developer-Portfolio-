import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import ProjectCard from '../components/projects/ProjectCard'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'
import styles from './Projects.module.css'

export default function Projects() {
  const { data: projects, loading, error } = useFetch(api.getProjects)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>프로젝트</h1>
          <p className={styles.sub}>풀스택 · 모바일 · RPA 프로젝트입니다.</p>
        </header>

        {loading && <Spinner />}
        {error && <ErrorMessage message={error.message} />}
        {projects && (
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
