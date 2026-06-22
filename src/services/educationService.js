import { educationResources, educationCategories } from '../data/education'
import { fetchFromAPI, fetchMock, toRelativeUrl } from './api'

const INFOGRAPHIC_GUIDES = educationResources.filter(r => r.type === 'Infographic')

export const educationService = {
  getAll: async () => {
    const items = await fetchFromAPI('/api/education', [])
    if (!Array.isArray(items) || items.length === 0) {
      return fetchMock(educationResources)
    }
    const apiResources = items.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      type: item.type || 'Guide',
      description: item.description,
      image: toRelativeUrl(item.image) || null,
      downloadUrl: toRelativeUrl(item.attachment || item.downloadUrl || item.pdfLink) || '#',
      fileSize: item.fileSize || '1.5 MB',
      videoUrl: toRelativeUrl(item.videoUrl) || null,
      duration: item.duration || null,
      relatedRoute: item.relatedRoute || null,
    }))
    // Always prepend the official DoE infographic guides (they have local image paths)
    const apiIds = new Set(apiResources.map(r => r.id))
    const newGuides = INFOGRAPHIC_GUIDES.filter(g => !apiIds.has(g.id))
    return [...newGuides, ...apiResources]
  },
  getCategories: async () => {
    const items = await fetchFromAPI('/api/education', [])
    if (!Array.isArray(items) || items.length === 0) return fetchMock(educationCategories)
    const apiCats = items.map(item => item.category)
    return [...new Set(['Appliance Guides', 'Renewable Energy', 'EVs', ...educationCategories, ...apiCats])]
  },
}
