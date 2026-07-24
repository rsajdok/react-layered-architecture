import type { PaymentMethod } from '#/routes/step3/models/PaymentMethod'

export const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: PaymentMethod[]
}) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.isDefaultMethod}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </>
)
