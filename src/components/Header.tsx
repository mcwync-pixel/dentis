import { useEffect, useState } from 'react';
import { Phone, Menu, X, CalendarCheck, MapPin, Clock } from 'lucide-react';

type Props = {
  onBook: () => void;
};

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Fees & Finance', href: '#fees' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header({ onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-brand-900 text-brand-50/90 lg:block">
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-200" />
              Shop 13/58–62 Fitzwilliam Rd, Old Toongabbie NSW 2146
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-200" />
              Mon–Fri 9:00am – 6:30pm · Sat 9:00am – 5:00pm
            </span>
          </div>
          <a href="tel:0279050814" className="inline-flex items-center gap-2 font-semibold text-white link-underline">
            <Phone className="h-3.5 w-3.5" /> (02) 7905 0814
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-soft backdrop-blur-md ring-1 ring-ink-100'
            : 'bg-white/0'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
              <span className="font-display text-xl font-semibold">D</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-display text-lg font-semibold ${scrolled ? 'text-ink-900' : 'text-ink-900'}`}>
                Dentist Near Me
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-600">
                Toongabbie
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700 link-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:0279050814" className="btn-outline">
              <Phone className="h-4 w-4" /> Call
            </a>
            <button onClick={onBook} className="btn-primary">
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-white/80 text-ink-800 ring-1 ring-ink-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden">
            <div className="container-px pb-6">
              <div className="card overflow-hidden p-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 p-2">
                  <a href="tel:0279050814" className="btn-outline w-full">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <button
                    onClick={() => {
                      setOpen(false);
                      onBook();
                    }}
                    className="btn-primary w-full"
                  >
                    <CalendarCheck className="h-4 w-4" /> Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
