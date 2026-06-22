import { projects } from '../data/projects'
import { fetchFromAPI, toRelativeUrl } from './api'

export const projectService = {
  getAll: async () => {
    const items = await fetchFromAPI('/api/projects', projects)
    return items.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      status: p.status,
      summary: p.summary || p.description,
      location: p.location,
      startDate: p.startDate || p.start_date,
      expectedCompletion: p.expectedCompletion || p.timeline,
      progress: p.progress ?? 0,
      budget: p.budget,
      image: toRelativeUrl(p.image),
      milestones: p.milestones,
      documents: Array.isArray(p.documents) ? p.documents.map(d => typeof d === 'string' ? toRelativeUrl(d) : { ...d, url: toRelativeUrl(d.url) }) : p.documents,
      gallery: Array.isArray(p.gallery) ? p.gallery.map(toRelativeUrl) : p.gallery,
    }))
  },
  getById: async (id) => {
    const all = await projectService.getAll()
    const item = all.find(p => String(p.id) === String(id))
    if (!item) {
      const err = new Error('Resource not found')
      err.status = 404
      throw err
    }
    return item
  },
  getFeatured: async () => {
    const all = await projectService.getAll()
    return all.filter(p => p.progress < 100).slice(0, 3)
  },
}
