import { createContext, useContext, useState, useCallback } from 'react'
import { api } from '../api'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [projectsCache, setProjectsCache] = useState(null)

  const fetchProjects = useCallback(async () => {
    if (projectsCache) return projectsCache
    const data = await api.getProjects()
    setProjectsCache(data)
    return data
  }, [projectsCache])

  return (
    <AppContext.Provider value={{ projectsCache, fetchProjects }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
