import { Shield, Sparkles, Gift, Wallet, BadgeCheck, Heart } from 'lucide-react';
import { highlights } from '../lib/data';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  gift: <Gift className="h-6 w-6" />,
  wallet: <Wallet className="h-6 w-6" />,
  badge: <BadgeCheck className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 section-title">Real reasons to choose Dentist Near Me</h2>
          <p className="mt-4 text-lg text-ink-600">
            We back our dentistry with warranties, transparent pricing and genuine flexibility — so
            you can plan treatment with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/60 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
                {iconMap[h.icon]}
              </span>
              <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug text-ink-900">
                {h.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
