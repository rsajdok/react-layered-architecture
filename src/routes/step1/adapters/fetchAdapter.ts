// It's from https://github.com/mkrtchian/modularizing-react-apps/blob/main/app/adapters/fetchAdapter.ts

import type { RemotePaymentMethod } from "../types/remote-payment-method";

export type FetchPort = (url: string) => Promise<FetchResponse>;

type FetchResponse = {
  json: () => Promise<RemotePaymentMethod[]>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function fetchMock() {
  return {
    // eslint-disable-next-line @typescript-eslint/require-await
    json: async () => [
      { name: "credit card", fee: 0.03 },
      { name: "paypal", fee: 0.05 },
    ],
  };
}
