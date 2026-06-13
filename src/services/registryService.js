import { registryEntries } from '../data/installers'
import { fetchMock } from './api'

export const registryService = {
  getAll: () => fetchMock(registryEntries),
  getParishes: () => fetchMock([...new Set(registryEntries.map((e) => e.parish))]),
  getTypes: () => fetchMock([...new Set(registryEntries.map((e) => e.type))]),
}
