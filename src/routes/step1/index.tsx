import { createFileRoute } from '@tanstack/react-router'
import { Payment } from '#/routes/step1/components/Payment'

export const Route = createFileRoute('/step1/')({
  component: Step1,
})

function Step1() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Step 1</p>
        <h1 className="display-title mb-3 text-4xl font-bold sm:text-5xl">
          Introduction of the Payment feature
        </h1>
        <p className="mb-6">
          The initial implementation with all logic mixed in one component:
          data fetching, data transformation, and rendering.
        </p>
        <Payment amount={19.8} />
      </section>
    </main>
  )
}
