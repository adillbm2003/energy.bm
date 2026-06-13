import { educationResources, educationCategories } from '../data/education'
import { fetchMock } from './api'

export const educationService = {
  getAll: () => fetchMock(educationResources),
  getCategories: () => fetchMock(educationCategories),
}
