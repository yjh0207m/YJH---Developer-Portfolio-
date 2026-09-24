import { profile, projects, skills, highlights, resume } from '../data/portfolio'
import { PROJECT_ORDER } from '../constants'

const resolve = (data) => Promise.resolve(data)

const rank = (id) => {
  const i = PROJECT_ORDER.indexOf(id)
  return i === -1 ? PROJECT_ORDER.length : i
}
const sortedProjects = [...projects].sort((a, b) => rank(a.id) - rank(b.id))

export const api = {
  getProjects: () => resolve(sortedProjects),
  getProject: (id) => {
    const project = projects.find((p) => String(p.id) === String(id))
    if (!project) {
      const err = new Error('not found')
      err.status = 404
      return Promise.reject(err)
    }
    return resolve(project)
  },
  getProfile: () => resolve(profile),
  getResume: () => resolve(resume),
  getSkills: () => resolve(skills),
  getHighlights: () => resolve(highlights),
}
