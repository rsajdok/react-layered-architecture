# Step 1 — Introduction of the Payment feature

## What it is

The initial implementation of a `Payment` component for an online ordering application. A customer can pick products, add them to an order, and then select a payment method to continue.

Payment method options are configured server-side and fetched via API. The radio buttons are data-driven — whatever the backend returns is rendered. When no payment methods are returned, nothing is shown and it defaults to "pay in cash".

## The code

A single `Payment` component handles everything:

1. **Data fetching** — `useEffect` calls `fetch()` to get payment methods from the remote API
2. **Data transformation** — maps `RemotePaymentMethod[]` to `LocalPaymentMethod[]`, appends the cash option
3. **View rendering** — iterates through methods, renders radio buttons, displays the total amount on a button

## The problem

The component is **too busy**. It mixes three different concerns in one place:

- To make any change you must understand how to initialise the network request
- How to map data to a local format the component can consume
- How to render each payment method
- The overall rendering logic for the `Payment` component itself

This isn't a big problem for a simple example, but as the code grows, this **everything-in-component** pattern leads to:

- **Higher cognitive load** — you constantly switch context while reading
- **Harder modifications** — unrelated concerns are tangled together
- **Poor reusability** — logic is coupled to the view and can't be reused elsewhere
- **Difficult testing** — you can't test business logic without involving the UI

This is the starting point for the refactoring journey described in Martin Fowler's article
["Modularizing React Applications with Established UI Patterns"](https://martinfowler.com/articles/modularizing-react-apps.html).
