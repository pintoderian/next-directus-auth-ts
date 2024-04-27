# Simple Dashboard Template with Next.js 14, Tailwind CSS, NextAuth.js, and Directus

This project is a starting point for building a modern web dashboard using a robust technology stack. It provides you with the basic structure and tools necessary to kickstart the development of your own dashboard application.

![Auth Page](https://i.imgur.com/NrsfwoJ.png)

![Dashboard Page](https://i.imgur.com/QORgzmQ.png)

## Key Features

- A solid foundation for developing a modern web dashboard.
- An attractive and customizable style thanks to Tailwind CSS.
- Secure user authentication through NextAuth.js.
- Dynamic content management with Directus.
- Streamlines the initial setup of your project, saving you time.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for web applications.
- [Tailwind CSS](https://tailwindcss.com/): CSS design framework.
- [Shadcn](https://ui.shadcn.com/): Beautifully designed components built with Radix UI and Tailwind CSS.
- [next-auth](https://next-auth.js.org/): Authentication and authorization in Next.js.
- [next-themes](https://github.com/pacocoursey/next-themes): Theme switching in Next.js.
- [TypeScript](https://www.typescriptlang.org/): Programming language.
- [@directus/sdk](https://docs.directus.io/guides/sdk/): Client for Directus API.
- [zustand](https://github.com/pmndrs/zustand): Lightweight state management for React.
- [zod](https://github.com/colinhacks/zod): TypeScript schema validation.
- [Husky](https://github.com/typicode/husky): Git hooks for running commands on pre-commit and pre-push actions.
- [Prettier](https://prettier.io/): Automatic code formatter.
- [ESLint](https://eslint.org/): Static code analysis tool.

## Requirements

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/): version 18.8.0
- [npm](https://www.npmjs.com/): JavaScript package manager

## Configuration

Clone the repository:

```bash
git clone https://github.com/pintoderian/next-directus-auth-ts.git
cd your-project
```

Install dependencies:

```bash
npm run install
```

Prepare husky:

```bash
npm run prepare
```

Configure environment variables:
Create a .env.local file at the root of the project and define the necessary environment variables. Here's an example:

```bash
NEXT_PUBLIC_DIRECTUS_API=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Acme Inc"
NEXT_PUBLIC_SITE_DESCRIPTION="Lorem, ipsum dolor sit amet consectetur adipisicing elit."

```

Command for **NEXTAUTH_SECRET**

```bash
openssl rand -base64 32
```

## Running the Project

To run the project in a development environment, use the following command:

```bash
npm run dev
```

The project will be available at http://localhost:3000.

## Production

To build and run the project in a production environment, use the following commands:

```bash
npm run build

npm start
```
