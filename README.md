# nextjs-airtable-starter

Boilerplate Next.js + Airtable project

## Purpose

I made this project with the purpose of getting acqauinted with Next.js and
using the Airtable API. This project will get you some basics in place with a
working example once you have created an [Airtable Base](#airtable-base)

## Getting started

### Setup your data store

Start a new Airtable 'Base' from a template called
['Project Tracker'](https://airtable.com/templates/featured/expZJgLA5YjprHz55/project-tracker)
by following the link (if you do not already have an Airtable account, creating
your free Airtable account will be included in the creation flow.. fricken
beautiful!)

### Get the starter project code

1.  Run the following in terminal to clone the project folder with files:

    ```bash
    git clone nextjs-airtable-starter
    ```

2.  Install libraries

    ```bash
    npm install
    ```

### Setup environment variables for Airtable

1. Create a `.env.local` file in your project root or rename the included
   example `.env.local.example` to`.env.local`

2. Open `.env.local` in your editor of choice and add your Airtable credentials.
   It'll look something like this:

   ```bash
   AIRTABLE_API_KEY=key**************
   AIRTABLE_BASE_ID=app**************
   ```

   Visit your [Airtable Account page](https://airtable.com/account) to get your
   API key.

   The Airtable Base ID can be found in the
   [Airtable API documentation](https://airtable.com/api) under 'RATE LIMITS' or
   'AUTHENTICATION'.

### Test drive the app

1.  Run the following in terminal:

    ```bash
    npm run dev
    ```

## Test included

1.  Run the following in terminal:

    ```bash
    npm run test
    ```

    This will run a Jest test on the app.

    [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) is included
    to mock the fetch call to Airtable.

## Thanks to the following resources/authors

- [Airtable API documentation](https://airtable.com/api)
- [Next.js Getting Started documentation](https://nextjs.org/docs/getting-started)
- [Next.js Environment Variable documentation](https://nextjs.org/docs/basic-features/environment-variables)
- ["Setting Up Testing Library with NextJS" by Malcolm Laing ](https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d)
- ["Building a Next.js static website based on Airtable" by Maxime Khoy](https://humble.dev/building-a-next-js-static-website-based-on-airtable)
