import { consultations } from '../data/consultations'
import { fetchMock } from './api'
import { sortByNewest } from '../utils/sortContent'

const sortedConsultations = sortByNewest(consultations, ['openingDate'])

export const consultationService = {
  getAll: () => fetchMock(sortedConsultations),
  getByStatus: (status) => fetchMock(sortedConsultations.filter((c) => c.status === status)),
  getActive: () => fetchMock(sortedConsultations.filter((c) => c.status === 'active')),
}
