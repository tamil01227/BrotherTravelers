import React, { useState } from 'react';
import { X, Code, Globe, FileText, Check, Copy } from 'lucide-react';
import { SEO_LANDING_PAGES } from '../data/travelData';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, slug?: string) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [activeView, setActiveView] = useState<'html' | 'xml' | 'robots'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standardPages = [
    { title: 'Home Page', url: 'https://brotherstravels.com/', tab: 'home' },
    { title: 'About Us & Company Profile', url: 'https://brotherstravels.com/about', tab: 'about' },
    { title: 'Our Vehicles (Fleet Showcase)', url: 'https://brotherstravels.com/vehicles', tab: 'vehicles' },
    { title: 'Tour Packages & Custom Charters', url: 'https://brotherstravels.com/tours', tab: 'tours' },
    { title: 'Tourist Destinations & Itineraries', url: 'https://brotherstravels.com/destinations', tab: 'destinations' },
    { title: 'Wedding & Event Transportation', url: 'https://brotherstravels.com/events', tab: 'events' },
    { title: 'Contact Us & Coimbatore Pickup Points', url: 'https://brotherstravels.com/contact', tab: 'contact' },
  ];

  const seoPagesList = SEO_LANDING_PAGES.map((page) => ({
    title: page.title.en,
    url: `https://brotherstravels.com/services/${page.slug}`,
    slug: page.slug,
  }));

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Navigation Pages -->
  <url>
    <loc>https://brotherstravels.com/</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/vehicles</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/tours</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/destinations</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/events</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/about</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://brotherstravels.com/contact</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- High-Priority Regional SEO Landing Pages -->
  ${SEO_LANDING_PAGES.map(
    (p) => `<url>
    <loc>https://brotherstravels.com/services/${p.slug}</loc>
    <lastmod>2026-11-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`
  ).join('\n  ')}
</urlset>`;

  const robotsContent = `# robots.txt for BROTHER'S TRAVELS
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://brotherstravels.com/sitemap.xml
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-base sm:text-lg">Website Sitemap & SEO Verification</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            onClick={() => setActiveView('html')}
            className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
              activeView === 'html'
                ? 'border-sky-600 text-sky-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            HTML Navigation Index
          </button>
          <button
            onClick={() => setActiveView('xml')}
            className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
              activeView === 'xml'
                ? 'border-sky-600 text-sky-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            sitemap.xml Output
          </button>
          <button
            onClick={() => setActiveView('robots')}
            className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
              activeView === 'robots'
                ? 'border-sky-600 text-sky-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            robots.txt
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-sm">
          {activeView === 'html' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Website Pages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {standardPages.map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate(page.tab);
                        onClose();
                      }}
                      className="text-left p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50 transition-colors text-xs font-medium text-slate-800 cursor-pointer flex items-center justify-between"
                    >
                      <span>{page.title}</span>
                      <span className="text-[11px] text-sky-600 font-semibold">Visit →</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Dedicated Regional SEO Landing Pages
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {seoPagesList.map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate('seo-page', page.slug);
                        onClose();
                      }}
                      className="text-left p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50 transition-colors text-xs text-slate-800 cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="font-semibold block">{page.title}</span>
                        <span className="text-[11px] text-slate-400">{page.url}</span>
                      </div>
                      <span className="text-xs text-sky-600 font-semibold shrink-0 ml-2">Open Page →</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeView === 'xml' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-mono">XML Sitemap Ready for Google Search Console</span>
                <button
                  onClick={() => copyToClipboard(xmlContent)}
                  className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 font-semibold py-1 px-2.5 rounded-md bg-sky-50 hover:bg-sky-100 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy XML'}</span>
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
                {xmlContent}
              </pre>
            </div>
          )}

          {activeView === 'robots' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-mono">Standard robots.txt configuration</span>
                <button
                  onClick={() => copyToClipboard(robotsContent)}
                  className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 font-semibold py-1 px-2.5 rounded-md bg-sky-50 hover:bg-sky-100 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
                {robotsContent}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>Search Engine Ready (Google Search Console & Bing)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
