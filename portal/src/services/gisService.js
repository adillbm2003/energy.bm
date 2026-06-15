import { gisInstallations } from '../data/installers'
import { fetchMock } from './api'

export const gisService = {
  getInstallations: async () => {
    try {
      const res = await fetch('/api/solar/installations')
      if (!res.ok) throw new Error('API error')
      return await res.json()
    } catch (err) {
      console.warn('GIS fallback:', err)
      return fetchMock(gisInstallations)
    }
  },
  getParishes: async () => {
    const all = await gisService.getInstallations()
    return [...new Set(all.map(i => i.parish))].sort()
  },
  getTypes: async () => {
    const all = await gisService.getInstallations()
    return [...new Set(all.map(i => i.type))].filter(Boolean).sort()
  },
}
