import Button from '../../ui/Button'
import { isExternalUrl } from '../../../utils/mockDownload'

export default function InstallerCard({ installer }) {
  const hasWebsite = isExternalUrl(installer.website)

  return (
    <article className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 card-shadow transition-all hover:border-teal-200 hover:card-shadow-hover">
      <div className="flex items-center gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-navy-800 text-base font-bold text-white"
          aria-hidden="true"
        >
          {installer.name.charAt(0)}
        </div>
        <h3 className="text-base font-semibold text-navy-900">{installer.name}</h3>
      </div>

      {hasWebsite && (
        <Button
          href={installer.website}
          variant="outline"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
      )}
    </article>
  )
}
