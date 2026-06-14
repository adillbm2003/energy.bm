import { news } from '../data/news'
import { fetchMock, fetchMockById } from './api'
import { sortByNewest } from '../utils/sortContent'

export const newsService = {
  getAll: () => fetchMock(sortByNewest(news, ['publishDate'])),
  getFeatured: () => fetchMock(sortByNewest(news.filter((item) => item.featured), ['publishDate'])),
  getBySlug: (slug) => fetchMockById(news, slug, 'slug'),
  getCategories: () => fetchMock([...new Set(news.map((item) => item.category))]),
}
