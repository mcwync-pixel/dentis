import { Check, MapPin, ArrowRight } from 'lucide-react';
import { clinics } from '../lib/data';

type Props = {
  onBook: () => void;
};

const points = [
  'Patient-centred care approach',
  'State-of-the-art facilities',
  'Transparent, upfront pricing',
  'Warranties on all treatments',
  'After-hours emergency dentistry',
  'Children and families welcome',
];

export default function About({ onBook }: Props) {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative container-px grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 ring-1 ring-white/15">
            About us
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Local dentists trusted across Western Sydney
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-100/90">
            Our local dentists have been in the industry for many years, delivering quality care with
            genuine compassion. Our main clinic is in Toongabbie, with sister clinics across the Hills
            and Greater Western Sydney. At Dentist Near Me, we aim to provide optimal care that
            exceeds expectations.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-brand-50">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/30 ring-1 ring-brand-400/40">
                  <Check className="h-3.5 w-3.5 text-brand-200" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <button onClick={onBook} className="btn-primary mt-9">
            Book your visit <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          <div className="card relative overflow-hidden bg-white/5 p-6 text-white ring-1 ring-white/10 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              Our locations
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Six clinics, one standard of care</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {clinics.map((c) => (
                <div
                  key={c}
                  className="group flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-all hover:bg-white/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/30 text-brand-100 ring-1 ring-brand-400/30">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-brand-50">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-500/20 to-gold-400/10 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Main clinic — Toongabbie</div>
              <div className="mt-1 text-sm text-brand-100/80">
                Shop 13/58–62 Fitzwilliam Rd, Old Toongabbie NSW 2146
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
