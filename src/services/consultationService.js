import { consultations } from '../data/consultations'
import { fetchMock } from './api'

export const consultationService = {
  getAll: () => fetchMock(consultations),
  getByStatus: (status) => fetchMock(consultations.filter((c) => c.status === status)),
  getActive: () => fetchMock(consultations.filter((c) => c.status === 'active')),
}
