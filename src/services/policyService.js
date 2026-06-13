import { policies, policyTracker } from '../data/policies'
import { fetchMock } from './api'

export const policyService = {
  getAll: () => fetchMock(policies),
  getTracker: () => fetchMock(policyTracker),
  getCategories: () => fetchMock([...new Set(policies.map((item) => item.category))]),
}
