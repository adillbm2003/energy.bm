import { innovationTopics, digitalCurrencyPlaceholder } from '../data/innovation'
import { fetchFromAPI, fetchMock } from './api'

const IMAGE_BY_TITLE = Object.fromEntries(innovationTopics.map(t => [t.title, t.image]))

export const innovationService = {
  getTopics: async () => {
    const items = await fetchFromAPI('/api/innovation', innovationTopics)
    if (!Array.isArray(items) || items.length === 0) return fetchMock(innovationTopics)
    return items
      .filter(item => item.status !== 'Coming Soon')
      .map(item => ({
        title: item.title,
        description: item.description,
        status: item.status || 'Active',
        image: IMAGE_BY_TITLE[item.title] || innovationTopics[0].image,
        linkTo: item.linkTo,
        linkLabel: item.linkLabel || 'Learn more',
      }))
  },
  getDigitalCurrency: async () => {
    const items = await fetchFromAPI('/api/innovation', [])
    if (Array.isArray(items) && items.length > 0) {
      const digital = items.find(i => i.status === 'Coming Soon' || (i.title || '').toLowerCase().includes('digital'))
      if (digital) {
        return {
          title: digital.title,
          status: digital.status,
          image: digitalCurrencyPlaceholder.image,
          description: digital.description,
          note: digital.linkLabel,
        }
      }
    }
    return fetchMock(digitalCurrencyPlaceholder)
  },
}
