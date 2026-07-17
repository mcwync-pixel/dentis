import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../lib/data';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 section-title">Questions our patients ask</h2>
            <p className="mt-4 text-ink-600">
              Can&apos;t find what you&apos;re looking for? Our front desk is happy to help — call{' '}
              <a href="tel:12345678" className="font-semibold text-brand-700 link-underline">
                (02) 1234 5678
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className={`overflow-hidden rounded-2xl ring-1 transition-all duration-300 ${
                      isOpen ? 'bg-white shadow-soft ring-brand-200' : 'bg-white/60 ring-ink-100 hover:ring-brand-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                          isOpen ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
