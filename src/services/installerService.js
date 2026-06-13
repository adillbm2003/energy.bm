import { certifiedInstallers } from '../data/installers'
import { fetchMock } from './api'

export const installerService = {
  getAll: () => fetchMock(certifiedInstallers),
}
