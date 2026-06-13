import { projects } from '../data/projects'
import { fetchMock, fetchMockById } from './api'

export const projectService = {
  getAll: () => fetchMock(projects),
  getById: (id) => fetchMockById(projects, id),
  getFeatured: () => fetchMock(projects.filter((p) => p.progress < 100).slice(0, 3)),
}
