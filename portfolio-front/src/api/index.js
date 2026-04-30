const BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

async function get(path) {
  const res = await fetch(BASE + path)
  if (res.status === 404) {
    const err = new Error('not found')
    err.status = 404
    throw err
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export const api = {
  getProjects: () => get('/projects'),
  getProject: (id) => get(`/projects/${id}`),
  getProfile: () => get('/profile'),
  getResume: () => get('/resume'),
  getSkills: () => get('/skills'),
  getHighlights: () => get('/highlights'),
  contact: (body) =>
    fetch(`${BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
}
