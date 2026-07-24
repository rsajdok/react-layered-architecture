import { createFileRoute } from '@tanstack/react-router'
import { Payment } from '#/routes/step3/components/Payment'

export const Route = createFileRoute('/step3/')({
  component: Step3,
})

function Step3() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Step 3</p>
        <h1 className="display-title mb-3 text-4xl font-bold sm:text-5xl">
          Data modelling to encapsulate logic
        </h1>
        <p className="mb-6 text-[var(--sea-ink-soft)]">
          Introduced a PaymentMethod class that centralizes data and behaviour:
          label formatting, default selection. Views no longer contain business
          logic.
        </p>
        <Payment amount={19.8} />
      </section>
    </main>
  )
}
