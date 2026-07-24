import type { LocalPaymentMethod } from '#/routes/step2/types/remote-payment-method'

export const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[]
}) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.provider === 'cash'}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </>
)
