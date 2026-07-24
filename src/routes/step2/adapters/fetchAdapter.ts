import type { RemotePaymentMethod } from '../types/remote-payment-method'

export async function fetchMock() {
  return {
    json: async (): Promise<RemotePaymentMethod[]> => [
      { name: 'credit card' },
      { name: 'paypal' },
    ],
  }
}
