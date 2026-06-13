import {
  homeStats,
  renewableKPIs,
  solarGrowthData,
  capacityByType,
  batteryStorageData,
  penetrationData,
  transitionKPIs,
  evAdoptionData,
  evByCategory,
  chargingInfrastructure,
  publicTransportElectrification,
  energyEfficiencyMetrics,
} from '../data/dashboard'
import { fetchMock } from './api'

export const dashboardService = {
  getHomeStats: () => fetchMock(homeStats),
  getRenewableKPIs: () => fetchMock(renewableKPIs),
  getSolarGrowth: () => fetchMock(solarGrowthData),
  getCapacityByType: () => fetchMock(capacityByType),
  getBatteryStorage: () => fetchMock(batteryStorageData),
  getPenetration: () => fetchMock(penetrationData),
  getTransitionKPIs: () => fetchMock(transitionKPIs),
  getEVAdoption: () => fetchMock(evAdoptionData),
  getEVByCategory: () => fetchMock(evByCategory),
  getChargingInfrastructure: () => fetchMock(chargingInfrastructure),
  getPublicTransport: () => fetchMock(publicTransportElectrification),
  getEfficiencyMetrics: () => fetchMock(energyEfficiencyMetrics),
}
