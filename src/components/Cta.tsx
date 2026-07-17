import { CalendarCheck, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

type Props = {
  onBook: () => void;
};

export default function Cta({ onBook }: Props) {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-12 text-white shadow-glow sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 ring-1 ring-white/15">
                Your go-to dentist in Toongabbie
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                10% price beat (Sydney) · Up to 10-year warranties
              </h2>
              <p className="mt-4 max-w-xl text-brand-100/90">
                Know your treatment options and fees upfront. Transparent pricing, a 10% price beat
                on valid written plans, and warranties up to 10 years on selected procedures.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={onBook} className="btn bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5">
                  <CalendarCheck className="h-5 w-5" /> Book Your Appointment
                </button>
                <a href="tel:12345678" className="btn-ghost">
                  <Phone className="h-4 w-4" /> (02) 1234 5678
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              <ActionCard icon={<CalendarCheck className="h-5 w-5" />} label="Appointment" onClick={onBook} />
              <ActionCard icon={<Phone className="h-5 w-5" />} label="Call us" href="tel:12345678" />
              <ActionCard
                icon={<MapPin className="h-5 w-5" />}
                label="Directions"
                href="https://maps.google.com/maps/dir//Dentist+Near+Me+-+Toongabbie"
              />
              <ActionCard
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                href="https://wa.me/61483967208"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionCard({
  icon,
  label,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <div className="group flex items-center justify-between rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
          {icon}
        </span>
        <span className="font-semibold text-white">{label}</span>
      </div>
      <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="text-left">
      {inner}
    </button>
  );
}
