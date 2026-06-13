import { gisInstallations } from '../data/installers'
import { fetchMock } from './api'

export const gisService = {
  getInstallations: () => fetchMock(gisInstallations),
  getParishes: () => fetchMock([...new Set(gisInstallations.map((i) => i.parish))]),
  getTypes: () => fetchMock([...new Set(gisInstallations.map((i) => i.type))]),
}
