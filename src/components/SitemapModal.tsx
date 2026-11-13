import React from 'react';
import { ExternalLink, Globe, X } from 'lucide-react';
import routeMetadata from '../data/routeMetadata.json';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="sitemap-title"
        className="my-6 max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between bg-[#142B49] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-teal-300" aria-hidden="true" />
            <h2 id="sitemap-title" className="font-bold">Website pages</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close sitemap" className="rounded-lg p-2 hover:bg-white/10">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="max-h-[calc(85vh-72px)] overflow-y-auto p-5">
          <div className="mb-5 flex flex-wrap gap-3">
            <a href="/sitemap.xml" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-slate-100 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-200">
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open generated sitemap.xml
            </a>
            <a href="/robots.txt" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-slate-100 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-200">
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open robots.txt
            </a>
          </div>
          <p className="mb-3 text-xs leading-5 text-slate-500">
            These paths correspond to the pages included in the production sitemap.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {routeMetadata.map((route) => (
              <li key={route.path}>
                <a
                  href={route.path}
                  className="block rounded-xl border border-slate-200 p-3 hover:border-teal-500 hover:bg-teal-50"
                  onClick={onClose}
                >
                  <span className="block text-sm font-semibold text-slate-900">{route.heading}</span>
                  <span className="mt-1 block break-all text-xs text-slate-500">{route.path}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
