<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# BROTHER'S TRAVELS

React and Vite website for vehicle and travel enquiries based in Coimbatore.

## Run Locally

**Prerequisites:** Node.js and npm

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local URL printed by Vite (by default, `http://localhost:3000`).
4. To view on another device on the same Wi-Fi, open `http://<computer-local-IP>:3000`; allow the dev server through the computer's firewall if asked.

## Production build

Run `npm run build`. The post-build step creates a static HTML entry point for each path in [`src/data/routeMetadata.json`](./src/data/routeMetadata.json), along with `sitemap.xml` and `robots.txt` in `dist/`. Deploy the contents of `dist/` to the static host. Set `VITE_SITE_URL` at build time if the site uses a different public origin.

Optional build-time settings are listed in [`.env.example`](./.env.example). Set `VITE_GA4_MEASUREMENT_ID` only when a real GA4 property is configured; analytics will not load until a visitor opts in. Set `VITE_GOOGLE_SITE_VERIFICATION` only to a verification token issued for the deployed domain. Do not commit real credentials.

## Validation and admin boundary

Run `npm run lint` for the TypeScript check. See [`docs/admin-dashboard-architecture.md`](./docs/admin-dashboard-architecture.md) for the backend and security decisions required before adding any admin or customer-data feature.
