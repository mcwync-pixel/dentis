import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';

type Props = {
  onBook: () => void;
};

const serviceLinks = [
  'Cleans',
  'Deep Cleans',
  'Fillings',
  'Extractions',
  'Braces',
  'Invisalign',
  'Veneers',
  'Teeth Whitening',
  'Root Canal',
  'Crowns & Bridges',
  'Dentures',
  'Dental Implants',
];

export default function Footer({ onBook }: Props) {
  return (
    <footer className="relative bg-ink-950 text-ink-300">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white">
                <span className="font-display text-xl font-semibold">D</span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold text-white">Dentist Near Me</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
                  Toongabbie
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Expertly curated dental care in Toongabbie with a patient-centred approach. Trusted by
              families across Western Sydney for over 20 years.
            </p>
            <button onClick={onBook} className="btn-primary mt-6">
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </button>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Services</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-ink-300 transition-colors hover:text-brand-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-400" />
                <span className="text-ink-300">
                  Shop 13/58–62 Fitzwilliam Rd, Old Toongabbie NSW 2146
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400" />
                <a href="tel:0279050814" className="text-ink-200 hover:text-white">
                  (02) 7905 0814
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400" />
                <a href="mailto:toongabbie@dentistnearme.clinic" className="break-all text-ink-200 hover:text-white">
                  toongabbie@dentistnearme.clinic
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-brand-400" />
                <span className="text-ink-300">
                  Mon–Fri · 9:00am – 6:30pm
                  <br />
                  Saturday · 9:00am – 5:00pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Dentist Near Me — Toongabbie. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink-200">Privacy</a>
            <a href="#" className="hover:text-ink-200">Terms</a>
            <a href="#faq" className="hover:text-ink-200">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
