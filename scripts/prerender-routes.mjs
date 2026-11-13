import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'dist');
const routes = JSON.parse(
  await readFile(path.join(projectRoot, 'src', 'data', 'routeMetadata.json'), 'utf8')
);
const siteUrl = (process.env.VITE_SITE_URL || 'https://brothertravelers.tamilselvir932.workers.dev')
  .replace(/\/+$/, '');
const measurementId = process.env.VITE_GA4_MEASUREMENT_ID || '';
const googleVerification = process.env.VITE_GOOGLE_SITE_VERIFICATION || '';
const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const buildStructuredData = (route, canonicalUrl) => {
  const business = {
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${siteUrl}/#business`,
    name: "BROTHER'S TRAVELS",
    url: siteUrl,
    telephone: '+916381186895',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'City',
      name: 'Coimbatore',
    },
  };

  if (route.type === 'service') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        business,
        {
          '@type': 'Service',
          name: route.heading,
          description: route.description,
          areaServed: { '@type': 'City', name: 'Coimbatore' },
          provider: { '@id': `${siteUrl}/#business` },
          url: canonicalUrl,
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonicalUrl,
    ...(route.path === '/'
      ? { mainEntity: business }
      : { isPartOf: { '@type': 'WebSite', name: "BROTHER'S TRAVELS", url: siteUrl } }),
  };
};

const staticHtml = (route) => {
  const canonicalUrl = new URL(route.path.replace(/^\//, ''), `${siteUrl}/`).href;
  const structuredData = JSON.stringify(buildStructuredData(route, canonicalUrl))
    .replaceAll('<', '\\u003c');
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    )
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(route.title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(route.description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`)
    .replace(
      /<script id="business-schema" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="business-schema" type="application/ld+json">${structuredData}</script>`
    );

  if (measurementId) {
    html = html.replace(
      '</head>',
      `  <meta name="google-analytics-measurement-id" content="${escapeHtml(measurementId)}" />\n  </head>`
    );
  }
  if (googleVerification) {
    html = html.replace(
      '</head>',
      `  <meta name="google-site-verification" content="${escapeHtml(googleVerification)}" />\n  </head>`
    );
  }

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><noscript><main><h1>${escapeHtml(route.heading)}</h1><p>${escapeHtml(route.description)}</p><p><a href="/">BROTHER'S TRAVELS home</a></p></main></noscript></div>`
  );
  return { html, canonicalUrl };
};

for (const route of routes) {
  const { html } = staticHtml(route);
  const destination = route.path === '/'
    ? path.join(outputDirectory, 'index.html')
    : path.join(outputDirectory, route.path.replace(/^\//, ''), 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => {
    const url = new URL(route.path.replace(/^\//, ''), `${siteUrl}/`).href;
    return `  <url><loc>${escapeHtml(url)}</loc></url>`;
  }),
  '</urlset>',
  '',
].join('\n');
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

await writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap);
await writeFile(path.join(outputDirectory, 'robots.txt'), robots);
console.log(`Generated ${routes.length} SEO routes, sitemap.xml, and robots.txt.`);
