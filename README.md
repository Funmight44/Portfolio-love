# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Portfolio setup
- `npm install`, `npm run dev`, `npm run build`.
- Edit personal details in `src/data/site.ts`, projects in `src/data/projects.ts` (images in `public/projects/`), services and FAQ in `src/data/`.
- Set `WEB3FORMS_ACCESS_KEY` in `.env` for the server-side Contact endpoint, and `VITE_CONSULTATION_WEBHOOK_URL` for the Consultation form's n8n webhook. In Netlify, configure both under **Site configuration → Environment variables**. Restart `npm run dev` after editing `.env` locally.
