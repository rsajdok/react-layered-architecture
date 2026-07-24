# Step 2 — The split of view and non-view code

## Structure

```
src/routes/step2/
├── index.tsx                          — route
├── README.md                          — describes the refactoring
├── types/remote-payment-method.ts     — same types
├── adapters/fetchAdapter.ts           — same mock
├── hooks/usePaymentMethods.ts         — state + fetching extracted
└── components/
    ├── Payment.tsx                    — simplified composition
    └── PaymentMethods.tsx             — pure rendering
```

## What changed

Refactored the `Payment` component by extracting two pieces:

### 1. `usePaymentMethods` hook

Moved all **state management** and **data fetching** out of the component into a custom hook:

- `useState` for holding the payment methods array
- `useEffect` + `fetch` for calling the remote API
- Data transformation (mapping `RemotePaymentMethod` → `LocalPaymentMethod`, appending cash)

The hook returns `{ paymentMethods }` — the component no longer knows where the data comes from.

### 2. `PaymentMethods` pure component

Extracted the radio button rendering into a standalone, **stateless** component:

- Receives `paymentMethods` as props
- Maps through the array and renders `<label>` + `<input type="radio">` for each
- No internal state, no side effects — a pure function

### 3. Simplified `Payment` component

The `Payment` component is now just composition:

```tsx
const { paymentMethods } = usePaymentMethods()
return (
  <div>
    <h3>Payment</h3>
    <PaymentMethods paymentMethods={paymentMethods} />
    <button>${amount}</button>
  </div>
)
```

## Problem solved

**Mixed concerns** — in Step 1, the `Payment` component handled data fetching, data transformation, and rendering all in one place. To make any change you had to mentally switch between three different layers of logic.

After this refactoring:

- **`Payment`** — reads like HTML, easy to understand the layout at a glance
- **`usePaymentMethods`** — can be tested independently without rendering any UI
- **`PaymentMethods`** — a pure function, trivial to test and reusable elsewhere

Each piece has a **single responsibility** and can be understood in isolation.

## Reference

This corresponds to the section
["The split of view and non-view code"](https://martinfowler.com/articles/modularizing-react-apps.html#TheSplitOfViewAndNon-viewCode)
in Martin Fowler's article.

---

**Next:** [Step 3 — Data modelling to encapsulate logic](../step3/README.md)
