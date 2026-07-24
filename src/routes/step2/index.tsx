import { createFileRoute } from '@tanstack/react-router'
import { Payment } from '#/routes/step2/components/Payment'

export const Route = createFileRoute('/step2/')({
  component: Step2,
})

function Step2() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Step 2</p>
        <h1 className="display-title mb-3 text-4xl font-bold sm:text-5xl">
          The split of view and non-view code
        </h1>
        <p className="mb-6 text-(--sea-ink-soft)">
          Extracted a custom hook for state/fetching and a pure component for
          rendering. The Payment component is now a thin composition layer.
        </p>
        <Payment amount={19.8} />
      </section>
    </main>
  )
}
