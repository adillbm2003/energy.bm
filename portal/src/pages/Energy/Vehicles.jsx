import { Link } from 'react-router-dom'
import PageBanner from '../../components/common/PageBanner'
import SectionHeading from '../../components/ui/SectionHeading'
import Button from '../../components/ui/Button'
import { PAGE_IMAGES } from '../../constants/branding'
import { DOCUMENTS } from '../../constants/documents'
import { ROUTES } from '../../constants/routes'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

const FUEL_TYPES = [
  {
    title: 'Gasoline & Diesel',
    description: 'Traditional internal combustion vehicles remain the largest share of Bermuda’s registered fleet.',
    image: PAGE_IMAGES.transport,
  },
  {
    title: 'Hybrid',
    description: 'Hybrid vehicles combine combustion engines with battery assistance to improve fuel efficiency.',
    image: PAGE_IMAGES.van,
  },
  {
    title: 'Electric (EV)',
    description: 'Battery electric vehicles support Bermuda’s transition to cleaner transport and lower emissions.',
    image: PAGE_IMAGES.ev,
  },
  {
    title: 'Motorcycles & Scooters',
    description: 'Two-wheel transport is an important part of island mobility and fuel consumption patterns.',
    image: PAGE_IMAGES.motorcycle,
  },
]

const PRIORITIES = [
  'Supporting electric vehicle adoption and charging infrastructure planning',
  'Tracking the island’s vehicle fleet composition by fuel type',
  'Promoting efficient transport choices for residents and businesses',
  'Aligning transport policy with Bermuda’s wider energy transition goals',
]

function DownloadFuelTypeButton() {
  return (
    <a
      href={DOCUMENTS.vehiclesByFuelType}
      download="Vehicles by Fuel Type.xls"
      className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
    >
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
      </svg>
      Download Vehicles by Fuel Type
    </a>
  )
}

export default function Vehicles() {
  useDocumentTitle('Vehicles')

  return (
    <>
      <PageBanner
        title="Vehicles & Transport Energy"
        subtitle="Information on Bermuda’s vehicle fleet, fuel types, and the Department’s work to support cleaner transport."
        breadcrumbs={[
          { label: 'Energy', to: ROUTES.energy },
          { label: 'Vehicles', to: ROUTES.vehicles },
        ]}
        image={PAGE_IMAGES.ev}
        action={<DownloadFuelTypeButton />}
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Transport & Energy" className="mb-4" />
              <p className="text-slate-600 leading-relaxed">
                Transport is a significant part of Bermuda’s energy use. The Department of Energy monitors vehicle
                registration trends, fuel types, and the shift toward electric and hybrid options as part of the
                island’s broader energy strategy.
              </p>
              <ul className="mt-6 space-y-3">
                {PRIORITIES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-navy-900 to-teal-900 text-white card-shadow">
              <img src={PAGE_IMAGES.charging} alt="" className="h-44 w-full object-cover opacity-90" loading="lazy" />
              <div className="card-padding">
                <h3>Fleet Data Download</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Download the latest spreadsheet showing registered vehicles grouped by fuel type. Use this data
                  for research, reporting, and planning.
                </p>
                <div className="mt-4">
                  <DownloadFuelTypeButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            title="Vehicle Fuel Types"
            subtitle="Overview of the main fuel and power categories in Bermuda’s registered vehicle fleet"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {FUEL_TYPES.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white card-shadow transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:card-shadow-hover"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="card-padding">
                  <h3>{item.title}</h3>
                  <p className="mt-2 text-body-small text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-navy-900">Explore the Energy Transition Dashboard</h2>
                <p className="mt-2 max-w-2xl text-body-small text-slate-600">
                  View transport-related indicators alongside renewable energy and emissions data.
                </p>
              </div>
              <Button to={ROUTES.transitionDashboard} variant="primary">
                View Dashboard
              </Button>
            </div>
          </div>

          <p className="mt-6 text-body-small text-slate-500">
            For consumer guidance on efficient vehicle choices, visit the{' '}
            <Link to={ROUTES.education} className="font-medium text-teal-700 hover:text-teal-800">
              Education Centre
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
