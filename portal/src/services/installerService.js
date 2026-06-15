import { certifiedInstallers } from '../data/installers'
import { fetchFromAPI } from './api'

export const installerService = {
  getAll: async () => {
    const items = await fetchFromAPI('/api/installers', certifiedInstallers);
    return items
      .filter(item => !item.status || item.status === 'Active')
      .map((item) => ({
        id: item.id,
        name: item.name,
        website: item.website || null,
      }));
  },
}
