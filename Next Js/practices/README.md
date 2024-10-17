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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## layout

in ths layout.js file we have to create our application common layout which is show commonly in application
Also for specific routes we can make layout for that we have to create this file in that folder

## not-found

Using this name we can make file which is used to make 404 page

## Script tag

<!-- <Script> by next js which is used to add script to the to the specific component for not the application loaded by using this tag we can add to different script to componentns   -->

## font otimaztion

we can use fonts by next js which is add to comopents like given example using server side component for that extra request not call on website so our privacy maintane and

// import {Roboto} from 'next/font/google'
// const roboto = Roboto({
// weight:500,
// style:'normal',
// // display:
// })

## dynamic routing

For that we use [folder name] structure and in that nested dynamic routing we use like [...folder Name] in that we can make nested routing
in this dynamic page we want to get data from the using params which we can add to make dynamic routes

## generateMetadata

It is Used for the add dynamic title and description to the website using that funcation which is return object with title and description

## generateStaticParams

It is used to make static page (which is create at bulid time and benefits the webistie loading speed ) using this function name 'generateStaticParams' in this we have pass which folder of pages you want to make static

## redirect

when we want to redirect page we have to used redirect in that page using import it from next/navigation or we can redirect it from next.config.js file pass redirects keys and inside that key pass asyc function and return array of objects in that source:'page name that we want to redirect(for dynamic routes add /:page name ) ', destination : 'where we want to redirect ' , permanent : 'false or true' for shortime or maintaince gave false else gave true

## env

for make env file use env.local