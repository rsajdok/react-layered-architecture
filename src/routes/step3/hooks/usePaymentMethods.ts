import { useState, useEffect } from 'react'
import type { RemotePaymentMethod } from '#/routes/step3/types/remote-payment-method'
import { PaymentMethod } from '../models/PaymentMethod'
import { fetchMock } from '../adapters/fetchAdapter'

const payInCash = new PaymentMethod({ name: 'cash' })

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return []
  }

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method),
  )
  extended.push(payInCash)

  return extended
}

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const response = await fetchMock()
      const methods: RemotePaymentMethod[] = await response.json()

      setPaymentMethods(convertPaymentMethods(methods))
    }

    fetchPaymentMethods()
  }, [])

  return {
    paymentMethods,
  }
}
