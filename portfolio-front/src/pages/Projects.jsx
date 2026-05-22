import { useRef } from 'react'
import { api } from '../api'
import { useFetch } from '../hooks/useFetch'
import { usePagination } from '../hooks/usePagination'
import ProjectCard from '../components/projects/ProjectCard'
import Pagination from '../components/common/Pagination'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'
import { PROJECT_ORDER } from '../constants'
import styles from './Projects.module.css'

export default function Projects() {
  const listRef = useRef(null)
  const { data: projects, loading, error } = useFetch(api.getProjects)

  const { page, setPage, totalPages, slice: pagedProjects } =
    usePagination(
      [...(projects ?? [])].sort((a, b) => {
        const ai = PROJECT_ORDER.indexOf(a.id)
        const bi = PROJECT_ORDER.indexOf(b.id)
        return (ai === -1 ? -Infinity : ai) - (bi === -1 ? -Infinity : bi)
      }),
      5
    )

  function handlePageChange(p) {
    setPage(p)
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.sub}>풀스택 · 모바일 · RPA 영역의 프로젝트입니다.</p>
        </header>

        {loading && <Spinner />}
        {error && <ErrorMessage message={error.message} />}
        {projects && (
          <>
            <div ref={listRef} className={styles.grid}>
              {pagedProjects.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={(page - 1) * 5 + i}
                />
              ))}
            </div>
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}
