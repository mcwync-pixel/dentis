import { useEffect, useState } from 'react';
import { X, CalendarCheck, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase, type Appointment } from '../lib/supabase';
import { serviceGroups, timeSlots } from '../lib/data';

type Props = {
  open: boolean;
  onClose: () => void;
  presetService?: string;
};

const allServices = serviceGroups.flatMap((g) => g.items.map((i) => i.name));

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function BookingModal({ open, onClose, presetService }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [form, setForm] = useState<Omit<Appointment, 'id' | 'status' | 'created_at'>>({
    full_name: '',
    email: '',
    phone: '',
    service: presetService ?? 'Cleans',
    preferred_date: '',
    preferred_time: timeSlots[0],
    message: '',
  });

  useEffect(() => {
    if (presetService) setForm((f) => ({ ...f, service: presetService }));
  }, [presetService]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && status !== 'submitting') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, status, onClose]);

  if (!open) return null;

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('appointments').insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        message: form.message?.trim() || null,
      });
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
        onClick={() => status !== 'submitting' && onClose()}
      />
      <div className="relative m-0 w-full max-w-2xl animate-floatUp overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:m-6 sm:rounded-3xl">
        <div className="relative bg-brand-700 px-6 py-5 text-white">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg font-semibold">Book an appointment</div>
                <div className="text-xs text-brand-100">We&apos;ll confirm your booking by phone or email.</div>
              </div>
            </div>
            <button
              onClick={onClose}
              disabled={status === 'submitting'}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-50"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {status === 'success' ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-700 animate-pulseRing">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">Booking received!</h3>
            <p className="mx-auto mt-2 max-w-md text-ink-600">
              Thanks {form.full_name.split(' ')[0] || 'there'} — your request for{' '}
              <span className="font-semibold text-brand-700">{form.service}</span> on{' '}
              <span className="font-semibold text-brand-700">{form.preferred_date}</span> is in. Our
              team will be in touch shortly to confirm.
            </p>
            <button onClick={onClose} className="btn-primary mt-7">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="max-h-[70vh] overflow-y-auto px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" required>
                <input
                  required
                  value={form.full_name}
                  onChange={(e) => update('full_name', e.target.value)}
                  placeholder="Jane Smith"
                  className="input"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="04xx xxx xxx"
                  className="input"
                />
              </Field>
              <Field label="Email" required className="sm:col-span-2">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="input"
                />
              </Field>
              <Field label="Service" required>
                <select
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className="input"
                >
                  {allServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred time" required>
                <select
                  value={form.preferred_time}
                  onChange={(e) => update('preferred_time', e.target.value)}
                  className="input"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date" required className="sm:col-span-2">
                <input
                  required
                  type="date"
                  min={today}
                  value={form.preferred_date}
                  onChange={(e) => update('preferred_date', e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Notes (optional)" className="sm:col-span-2">
                <textarea
                  value={form.message ?? ''}
                  onChange={(e) => update('message', e.target.value)}
                  rows={3}
                  placeholder="Anything we should know before your visit?"
                  className="input resize-none"
                />
              </Field>
            </div>

            {status === 'error' && (
              <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-100">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                disabled={status === 'submitting'}
                className="btn-outline"
              >
                Cancel
              </button>
              <button type="submit" disabled={status === 'submitting'} className="btn-primary">
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-4 w-4" /> Request appointment
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d5dae2;
          background: #f6f7f9;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #22262f;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #1f9a80;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(31,154,128,0.15);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  className = '',
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
