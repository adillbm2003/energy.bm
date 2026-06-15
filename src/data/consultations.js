// Mock consultation data. Real data is fetched from /api/consultations.
// All consultations link to the Government Citizens Forum for submissions.

export const consultations = [
  {
    id: 'con-001',
    title: 'Clean Energy Act Amendments 2026',
    description:
      'Proposed amendments to strengthen grid interconnection standards, community solar provisions, and installer licensing requirements.',
    status: 'Open',
    openingDate: '2026-04-01',
    closingDate: '2026-06-30',
    externalUrl: 'https://forum.gov.bm/en/',
  },
  {
    id: 'con-002',
    title: 'EV Charging Tariff Structure Review',
    description:
      'Review of proposed tariff structures for public electric vehicle charging to ensure equitable access and grid stability.',
    status: 'Open',
    openingDate: '2026-03-15',
    closingDate: '2026-05-31',
    externalUrl: 'https://forum.gov.bm/en/',
  },
  {
    id: 'con-003',
    title: 'Energy Efficiency Building Code 2025',
    description:
      'Consultation on updated energy performance requirements for new construction and major renovations.',
    status: 'Closed',
    openingDate: '2025-03-01',
    closingDate: '2025-06-30',
    externalUrl: 'https://forum.gov.bm/en/',
  },
  {
    id: 'con-004',
    title: 'Community Solar Pilot Design',
    description:
      'Design parameters and eligibility criteria for Bermuda\'s community solar pilot programme.',
    status: 'Closed',
    openingDate: '2024-09-01',
    closingDate: '2024-12-15',
    externalUrl: 'https://forum.gov.bm/en/',
  },
]
