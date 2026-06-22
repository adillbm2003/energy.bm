import PageBanner from '../../components/common/PageBanner'
import { PAGE_IMAGES } from '../../constants/branding'
import SectionHeading from '../../components/ui/SectionHeading'
import Button from '../../components/ui/Button'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { ROUTES } from '../../constants/routes'

const AREAS = [
  'Telecommunications licensing and regulation',
  'Spectrum management and coordination',
  'Broadband infrastructure policy',
  'Consumer protection in communications services',
  'International telecommunications treaties',
  '5G and next-generation network policy',
]

const FRAMEWORK = [
  {
    icon: '📋',
    title: 'Licensing',
    description: 'Issuing and administering licences for telecommunications operators, service providers, and spectrum users in Bermuda.',
  },
  {
    icon: '📡',
    title: 'Spectrum Management',
    description: 'Allocating and coordinating radio frequency spectrum to ensure efficient, interference-free use across all sectors.',
  },
  {
    icon: '🌐',
    title: 'Broadband Policy',
    description: 'Driving infrastructure investment and policy frameworks to expand reliable, affordable broadband access island-wide.',
  },
  {
    icon: '🛡️',
    title: 'Consumer Protection',
    description: 'Safeguarding residents and businesses through service standards, complaint resolution, and fair market practices.',
  },
]

const INITIATIVES = [
  {
    tag: 'Infrastructure',
    title: '5G Network Policy',
    description: 'Developing the regulatory framework to support safe and efficient 5G deployment across Bermuda, including spectrum planning and infrastructure siting guidance.',
    image: PAGE_IMAGES.telecom,
  },
  {
    tag: 'Connectivity',
    title: 'Broadband Expansion',
    description: 'Advancing national broadband coverage to underserved areas and improving affordability through competition policy and infrastructure investment.',
    image: PAGE_IMAGES.grid,
  },
  {
    tag: 'Digital Economy',
    title: 'Digital Infrastructure Strategy',
    description: 'Supporting Bermuda\'s digital economy through policy coordination, international treaty obligations, and resilient communications infrastructure.',
    image: PAGE_IMAGES.innovation,
  },
]

export default function ElectronicCommunications() {
  useDocumentTitle('Electronic Communications')

  return (
    <>
      <PageBanner
        title="Electronic Communications"
        subtitle="Regulating and advancing Bermuda's telecommunications and digital infrastructure."
        breadcrumbs={[
          { label: 'Sector', to: ROUTES.energy },
          { label: 'Electronic Communications', to: ROUTES.electronicCommunications },
        ]}
        image={PAGE_IMAGES.telecom}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Overview" className="mb-4" />
              <p className="text-slate-600 leading-relaxed">
                The Department of Energy oversees Bermuda&apos;s electronic communications regulatory framework,
                ensuring reliable, affordable, and secure telecommunications services for residents and businesses.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our work spans licensing, spectrum management, infrastructure policy, and consumer protection —
                supporting Bermuda&apos;s digital economy and connectivity goals.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The Department works closely with the Bermuda Regulatory Authority (BRA) and international
                bodies to ensure Bermuda&apos;s communications sector meets global standards and serves the needs
                of all residents and businesses.
              </p>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl">
                <img src={PAGE_IMAGES.telecom} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-lg border border-slate-200 bg-white card-padding card-shadow">
                <h3 className="text-lg font-semibold text-navy-900">Key Responsibilities</h3>
                <ul className="mt-4 space-y-2">
                  {AREAS.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionHeading
            title="Regulatory Framework"
            subtitle="The pillars of Bermuda's electronic communications oversight"
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORK.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white card-padding card-shadow flex flex-col gap-3"
              >
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            title="Current Initiatives"
            subtitle="Active programmes shaping Bermuda's digital future"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {INITIATIVES.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white card-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="card-padding">
                  <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-semibold text-navy-900 leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Enquiries CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-teal-900 text-white">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy-900 mb-4">
                Licensing
              </span>
              <h2 className="text-white text-2xl font-bold leading-snug">
                Applying for a Communications Licence?
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Telecommunications operators, service providers, and spectrum users must hold the
                appropriate licence to operate in Bermuda. Contact the Department of Energy for
                information on licence categories, application requirements, and fees.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  Fixed and mobile telecommunications services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  Internet service providers and data networks
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  Radio and spectrum licences
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  Broadcasting and satellite uplink services
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 lg:items-start">
              <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm card-padding w-full">
                <h3 className="text-white font-semibold">Contact the Department</h3>
                <p className="mt-2 text-sm text-slate-300">
                  For licensing enquiries, spectrum coordination, or regulatory guidance, reach out to
                  the Department of Energy.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button to={ROUTES.contact} variant="gold">
                    Contact Us
                  </Button>
                  <Button to={ROUTES.policies} variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    View Policies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
