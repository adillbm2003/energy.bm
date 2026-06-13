import { news } from '../data/news'
import { fetchMock, fetchMockById } from './api'

export const newsService = {
  getAll: () => fetchMock(news),
  getFeatured: () => fetchMock(news.filter((item) => item.featured)),
  getBySlug: (slug) => fetchMockById(news, slug, 'slug'),
  getCategories: () => fetchMock([...new Set(news.map((item) => item.category))]),
}
