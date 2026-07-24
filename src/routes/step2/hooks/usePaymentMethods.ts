import { useState, useEffect } from 'react'
import type {
  RemotePaymentMethod,
  LocalPaymentMethod,
} from '#/routes/step2/types/remote-payment-method'
import { fetchMock } from '../adapters/fetchAdapter'

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([])

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const response = await fetchMock()
      const methods: RemotePaymentMethod[] = await response.json()

      if (methods.length > 0) {
        const extended: LocalPaymentMethod[] = methods.map((method) => ({
          provider: method.name,
          label: `Pay with ${method.name}`,
        }))
        extended.push({ provider: 'cash', label: 'Pay in cash' })
        setPaymentMethods(extended)
      } else {
        setPaymentMethods([])
      }
    }

    fetchPaymentMethods()
  }, [])

  return {
    paymentMethods,
  }
}
