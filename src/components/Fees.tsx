import { Landmark, CreditCard, Check } from 'lucide-react';
import { feeOptions } from '../lib/data';

type Props = {
  onBook: () => void;
};

export default function Fees({ onBook }: Props) {
  const gov = feeOptions.filter((f) => f.category === 'Government Scheme');
  const plans = feeOptions.filter((f) => f.category === 'Payment Plans');

  return (
    <section id="fees" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Fees &amp; financing</span>
          <h2 className="mt-4 section-title">Flexible ways to pay for the care you need</h2>
          <p className="mt-4 text-lg text-ink-600">
            Finances should never be a reason to sacrifice your oral health. We accept government
            schemes and offer payment plans up to $50,000 so you can spread the cost.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FeeColumn
            icon={<Landmark className="h-5 w-5" />}
            title="Government schemes"
            items={gov}
          />
          <FeeColumn
            icon={<CreditCard className="h-5 w-5" />}
            title="Payment plans"
            items={plans}
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-lg font-semibold text-brand-900">
              10% price beat on all treatments (Sydney)
            </div>
            <div className="mt-1 text-sm text-ink-600">
              Bring a valid written treatment plan from another dentist and we will beat it by 10%.
            </div>
          </div>
          <button onClick={onBook} className="btn-primary shrink-0">
            Get a quote
          </button>
        </div>
      </div>
    </section>
  );
}

function FeeColumn({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: { name: string; description: string }[];
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink-900">{title}</h3>
      </div>
      <ul className="mt-5 divide-y divide-ink-100">
        {items.map((item) => (
          <li key={item.name} className="flex items-start gap-3 py-3">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Check className="h-3.5 w-3.5" />
            </span>
            <div>
              <div className="font-semibold text-ink-900">{item.name}</div>
              <div className="text-sm text-ink-500">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
