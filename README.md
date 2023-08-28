# Full Stack E-Commerce Store (Admin Dashboard + CMS) 

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

Key Features:

- Shadcn UI
- Admin Dashboard serves as both CMS, Admin and API!
- Ability to control mulitple vendors / stores through this single CMS. (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and this CMS will generate API routes for all of those individually.)
- Ability to create, update and delete categories.
- Ability to create, update and delete products.
- Ability to able to upload multiple images for products, and change them.
- Ability to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- Ability to Search through all categories, products, sizes, colors, billboards with included pagination.
- Ability to control which products are "featured" so they show on the homepage.
- Ability to see your orders, sales, etc.
- Ability to see graphs of your revenue etc.
- Clerk Authentication
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/IgorTheFixer/admin-dashboard-commerce.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |