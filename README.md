This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Overall structure

This is Next.js 14 app, with App router. The ideia was to create as many reusable components.

- Some styling was done directly on `style` prop to make easy export and checking with the design.
- The `Lottie` animation was imported with [dynamic imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic) because it was throwing an error even with `use client` directive.
- Using [`svgr`](https://github.com/gregberge/svgr) to load svg's directly from files.
- A debug function is available to fill the form automatically for test purposes with `cmd + 1`/`ctrl + 1`.

### Animations

To implement the animations on component unmount, the lib [`framer-motion`](https://www.framer.com/motion/) was used instead of `tailwindcss` animations.

### Form submission

Form submission is handled with [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations). As well as nickname availability check.

### Input type date - Native calendar

Adding type date to the input, caused the OS to add a calendar icon next to it. Which changes the design but was left in favor of the acessibility provided by it. I assume the final the application would have a custom calendar component/date input that is not present in the figma design.