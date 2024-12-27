# Next.js getServerSideProps Not Rerunning on Client-Side Navigation

This repository demonstrates a common issue in Next.js applications where `getServerSideProps` is not re-executed on client-side navigation. This can lead to stale data being displayed if the page's data changes after the initial render.

## Problem

The `bug.js` file shows a Next.js component that uses `router.push` for navigation.  When the button is clicked, it navigates to '/my-page', but `getServerSideProps` (if it were present) wouldn't be called again.

## Solution

The `bugSolution.js` file demonstrates how to use `useRouter` to make a call to another page that actually uses `getServerSideProps`, effectively refreshing the data.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button.  Notice that the data is not refreshed.
