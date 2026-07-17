import { CalendarCheck, Clock, Phone, Mail, Star, ShieldCheck, ArrowRight } from 'lucide-react';

type Props = {
  onBook: () => void;
};

export default function Hero({ onBook }: Props) {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative container-px grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <span className="eyebrow animate-floatUp">
            <Star className="h-3.5 w-3.5 text-gold-400" /> Patient-centred care in Toongabbie
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
            Your <span className="shimmer-text">smile</span>, expertly cared for — close to home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            From affordable dental implants to Invisalign, veneers and emergency dentistry, our
            state-of-the-art Toongabbie clinic puts you first. Transparent pricing, warranties up to
            10 years, and a 10% price beat on valid written plans.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onBook} className="btn-primary text-base">
              <CalendarCheck className="h-5 w-5" /> Book Appointment
            </button>
            <a href="#services" className="btn-outline text-base">
              Explore services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-600">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-600" /> Up to 10-year warranties
            </div>
            <div className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400" /> Trusted by families across Western Sydney
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={<CalendarCheck className="h-6 w-6" />}
              title="Make Appointment"
              subtitle="Book online in under a minute"
              cta="Book Now"
              onClick={onBook}
              accent
            />
            <InfoCard
              icon={<Clock className="h-6 w-6" />}
              title="Timing Schedule"
              subtitle={
                <div className="space-y-0.5 text-sm">
                  <div>Mon–Fri · 9:00am – 6:30pm</div>
                  <div>Saturday · 9:00am – 5:00pm</div>
                </div>
              }
            />
            <InfoCard
              icon={<Phone className="h-6 w-6" />}
              title="Call Now"
              subtitle={
                <a href="tel:12345678" className="font-semibold text-ink-900">
                  (02) 1234 5678
                </a>
              }
            />
            <InfoCard
              icon={<Mail className="h-6 w-6" />}
              title="Email Us"
              subtitle={
                <a href="mailto:toongabbie@dentistnearme.clinic" className="break-all text-sm font-medium text-ink-900">
                  toongabbie@dentistnearme.clinic
                </a>
              }
            />
          </div>
        </div>
      </div>

      <div className="relative border-y border-ink-100 bg-brand-50/60">
        <div className="container-px grid grid-cols-2 divide-x divide-ink-100 py-6 text-center sm:grid-cols-4">
          <Stat value="20+" label="Years of dental care" />
          <Stat value="6" label="Clinic locations" />
          <Stat value="10%" label="Price beat guarantee" />
          <Stat value="$50k" label="Payment plans available" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  subtitle,
  cta,
  onClick,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  cta?: string;
  onClick?: () => void;
  accent?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-5 transition-all duration-300 ${
        accent
          ? 'bg-brand-600 text-white shadow-glow'
          : 'bg-white text-ink-800 shadow-soft ring-1 ring-ink-100 hover:-translate-y-1 hover:shadow-glow'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            accent ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-700'
          }`}
        >
          {icon}
        </span>
        <div>
          <div className={`text-xs font-semibold uppercase tracking-wider ${accent ? 'text-brand-100' : 'text-brand-600'}`}>
            {title}
          </div>
          <div className={`mt-0.5 ${accent ? 'text-white' : 'text-ink-900'}`}>{subtitle}</div>
        </div>
      </div>
      {cta && (
        <button
          onClick={onClick}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white link-underline"
        >
          {cta} <ArrowRight className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2">
      <div className="font-display text-2xl font-semibold text-brand-700 sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500">{label}</div>
    </div>
  );
}
