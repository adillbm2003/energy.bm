import { educationResources, educationCategories } from '../data/education'
import { fetchMock } from './api'

// Infographic guides are always sourced from static data (they have local image paths)
const INFOGRAPHIC_GUIDES = educationResources.filter(r => r.type === 'Infographic')

export const educationService = {
  getAll: async () => {
    try {
      const res = await fetch('/api/education');
      if (!res.ok) throw new Error('API error');
      const items = await res.json();
      const apiResources = items.map(item => {
        const isVideo = item.type === 'Video';
        const fileUrl = item.pdfLink || item.videoUrl || '#';
        return {
          id: item.id,
          title: item.title,
          category: item.category,
          type: isVideo ? 'Video' : 'Guide',
          description: item.description,
          image: item.image || null,
          [isVideo ? 'videoUrl' : 'downloadUrl']: fileUrl,
          fileSize: isVideo ? undefined : '1.5 MB',
          duration: isVideo ? '15 min' : undefined,
          relatedRoute: '#',
        };
      });
      // Always prepend the official DoE infographic guides
      const apiIds = new Set(apiResources.map(r => r.id));
      const nonDuplicateGuides = INFOGRAPHIC_GUIDES.filter(g => !apiIds.has(g.id));
      return [...nonDuplicateGuides, ...apiResources];
    } catch (err) {
      console.warn("Failed to fetch education resources, falling back:", err);
      return fetchMock(educationResources);
    }
  },
  getCategories: async () => {
    try {
      const res = await fetch('/api/education');
      if (!res.ok) throw new Error('API error');
      const items = await res.json();
      const apiCats = items.map(item => item.category);
      return [...new Set(['Appliance Guides', 'Renewable Energy', 'EVs', ...apiCats])];
    } catch (err) {
      return fetchMock(educationCategories);
    }
  },
}
