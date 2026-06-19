import { gisInstallations } from '../data/installers'
import { fetchFromAPI } from './api'

// Convert coordinate_x/y (0–100 percentage of Bermuda's bounding box) to lat/lng
function coordToLatLng(x, y) {
  const lat = 32.245 + (y / 100) * 0.155
  const lng = -64.92 + (x / 100) * 0.32
  return { lat, lng }
}

export const gisService = {
  getInstallations: async () => {
    // Prefer the Excel-parsed endpoint (uploaded via CMS), fall back to DB records, then mock
    let items = await fetchFromAPI('/api/solar/installations', [])
    if (!Array.isArray(items) || items.length === 0) {
      items = await fetchFromAPI('/api/solarInstallations', gisInstallations)
    }
    return items.map(i => {
      let lat = i.lat ?? null
      let lng = i.lng ?? null
      if (lat == null || lng == null) {
        const cx = i.coordinateX ?? i.coordinate_x ?? 50
        const cy = i.coordinateY ?? i.coordinate_y ?? 50
        const pos = coordToLatLng(cx, cy)
        lat = lat ?? pos.lat
        lng = lng ?? pos.lng
      }
      return {
        id: i.id,
        name: i.name,
        parish: i.parish,
        type: i.type,
        capacity: Number(i.capacity) || 0,
        status: i.status || 'Active',
        installDate: i.installDate || i.install_date,
        installer: i.installer,
        address: i.address || null,
        annualOutput: Number(i.annualOutput || i.annual_output) || 0,
        lat: Number(lat),
        lng: Number(lng),
        notes: i.notes,
      }
    })
  },
  getParishes: async () => {
    const items = await gisService.getInstallations()
    return [...new Set(items.map(i => i.parish).filter(Boolean))]
  },
  getTypes: async () => {
    const items = await gisService.getInstallations()
    return [...new Set(items.map(i => i.type).filter(Boolean))]
  },
}
