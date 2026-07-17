import { ArrowUpRight, Stethoscope, Smile, Sparkles, Wrench, HeartPulse } from 'lucide-react';
import { serviceGroups } from '../lib/data';

const groupIcons = [
  <Stethoscope key="f" className="h-5 w-5" />,
  <Smile key="o" className="h-5 w-5" />,
  <Sparkles key="c" className="h-5 w-5" />,
  <Wrench key="m" className="h-5 w-5" />,
  <HeartPulse key="x" className="h-5 w-5" />,
];

type Props = {
  onBook: (service?: string) => void;
};

export default function Services({ onBook }: Props) {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">What we treat</span>
          <h2 className="mt-4 section-title">Comprehensive dental care, all under one roof</h2>
          <p className="mt-4 text-lg text-ink-600">
            Whether you need a routine clean, a cosmetic refresh, or complex restorative work, our
            team builds a plan around your goals and your budget.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group, i) => (
            <div key={group.title} className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
                  {groupIcons[i]} {group.title}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand-600" />
              </div>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onBook(item.name)}
                      className="group/item w-full text-left"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-base font-semibold text-ink-900 group-hover/item:text-brand-700">
                          {item.name}
                        </span>
                        <span className="h-px flex-1 bg-ink-100 group-hover/item:bg-brand-200" />
                      </div>
                      <p className="mt-1 text-sm text-ink-500">{item.description}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
