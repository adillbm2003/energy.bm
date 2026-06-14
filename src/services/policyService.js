import { policies, policyTracker } from '../data/policies'
import { fetchMock } from './api'
import { sortByNewest } from '../utils/sortContent'

export const policyService = {
  getAll: () => fetchMock(sortByNewest(policies, ['publishedAt'])),
  getTracker: () => fetchMock(sortByNewest(policyTracker, ['lastUpdated'])),
  getCategories: () => fetchMock([...new Set(policies.map((item) => item.category))]),
}
