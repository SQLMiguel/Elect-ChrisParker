import type { ReactNode } from "react"

export function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string
  effectiveDate: string
  children: ReactNode
}) {
  return (
    <>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl text-foreground sm:text-7xl">{title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">Effective {effectiveDate}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 space-y-10 text-lg leading-relaxed text-foreground [&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:uppercase [&_h2]:tracking-wide [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </section>
    </>
  )
}
