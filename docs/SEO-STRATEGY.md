# ArrLink site structure and SEO

## Positioning

Custom software, SaaS products and practical AI automation for founders and
businesses. The homepage speaks directly to prospective US clients without
claiming a US office, US customers, or unconfirmed working hours.

## Current pages

- `/`: services, named clients, technologies, six projects, engagement options,
  delivery process and inquiry call to action.
- `/services` and `/services/:slug`: capabilities and relevant project examples.
- `/about`, `/contact`, `/blog`, published articles and active blog categories.
- `/privacy`, `/terms` and a noindex 404 page.

Retired industry routes redirect permanently to `/services` on Vercel and have
client-side equivalents in React Router. They are excluded from the sitemap.

## Implemented metadata

`src/seo/routes.ts` owns titles and descriptions. `scripts/prerender.mjs` outputs
static HTML, canonical URLs, Open Graph and Twitter metadata, the XML sitemap,
and blog RSS. It includes last-modified dates only when the content supplies one.
Organization, website and service JSON-LD identify ArrLink; detailed service and
article pages add their own relevant structured data.

The organization logo, favicons and sharing card are local assets. `robots.txt`
and `llms.txt` point to the production domain and current content.

## Publication checklist

- Confirm the production domain and EmailJS environment settings.
- Deploy the build and check redirect/404 HTTP statuses on the production host.
- Submit the sitemap using the site's verified search-console accounts.
- Verify actual inquiry delivery. Client-side tests mock the email provider.
- Add genuine client-approved results and founder details when available.

No search ranking or lead-volume guarantee is implied. This repository does not
contain verified production search analytics or conversion figures.
