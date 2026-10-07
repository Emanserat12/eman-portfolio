# Eman Serat — portfolio

Vite + React + TypeScript + Tailwind CSS.

## Edit content
Everything (projects, services, experience, links, availability) is in `src/data/site.ts`.
To show a "Download CV" button, put the PDF in `public/` and set `cvUrl: '/Eman-Serat-CV.pdf'`.

## Contact details
Copy `.env.example` to `.env` and update the `VITE_` contact variables for local development.
Set the same variables in your deployment environment before building. Vite embeds `VITE_` values
in browser assets, so these values are public; do not put secrets in them.

## Contact form
The "Start a project" form uses Netlify Forms. After the first deploy, submissions appear in the
Netlify dashboard under Forms (turn on email notifications there). Anywhere else, the form falls
back to opening a pre-filled email.

To add a booking link, set `calUrl` in `src/data/site.ts` to your Calendly or Cal.com URL.

## Run locally
    npm install
    npm run dev        # http://localhost:5173, live reload
    npm run build && npm run preview   # http://localhost:4173, production build

## Deploy to Netlify
Option A (Git): push this folder to GitHub, then in Netlify choose "Add new site → Import an existing project".
Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `dist`).

Option B (drag and drop): run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop
