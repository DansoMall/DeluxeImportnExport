import React, { useState } from 'react';
import { ArrowUpRightIcon, CheckCircle2Icon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const MODES = [
'Vehicle Import',
'Sea Freight',
'Air Freight',
'Road Transport',
'Warehousing'];


export function Inquiry() {
  const [status, setStatus] = useState<Status>('idle');
  const [mode, setMode] = useState(MODES[0]);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes('@') || company.trim().length === 0) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section
      id="contact-us"
      className="relative w-full overflow-hidden px-4 pb-16 sm:px-8 sm:pb-24"
      aria-labelledby="inquiry-title">

      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(/9801bc95-fead-4daa-b65d-7a4d899a8c19.jpg)' }} />
      <div className="absolute inset-0 bg-[#0b0f16]/85" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-8 rounded-[28px] border border-white/10 bg-[#14181f]/85 p-6 backdrop-blur-sm sm:gap-10 sm:rounded-[36px] sm:p-14 lg:grid-cols-2">
        <div>
          <h2
            id="inquiry-title"
            className="font-display text-2xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
            
            Request a shipping or vehicle quote
          </h2>
          <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base">
            Tell us what you are moving and where. A coordinator replies with
            routing options and indicative rates within one business day.
          </p>
          <dl className="mt-10 space-y-4 text-sm text-white/60">
            <div>
              <dt className="text-white/40">Phone Support</dt>
              <dd className="text-white">+1 (763) 703-9495</dd>
            </div>
            <div>
              <dt className="text-white/40">Hours</dt>
              <dd className="text-white">Monday–Friday: 9AM–5PM EST</dd>
            </div>
          </dl>
        </div>

        {status === 'success' ?
        <div
          role="status"
          className="flex flex-col items-start justify-center rounded-[24px] border border-white/10 bg-white/[0.04] p-7 sm:rounded-[28px] sm:p-10">
          
            <CheckCircle2Icon className="text-white" size={34} />
            <h3 className="mt-4 text-2xl font-medium text-white">
              Inquiry received
            </h3>
            <p className="mt-2 text-sm text-white/60">
              We sent a confirmation to {email}. Our team will follow up shortly.
            </p>
            <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 rounded-full bg-[#7f1d1d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#a83232]">
            
              Send another
            </button>
          </div> :

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[28px] sm:p-9">
          
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.18em] text-white/40">
                Service
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {MODES.map((item) =>
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                aria-pressed={mode === item}
                className={[
                'rounded-full px-4 py-2 text-sm transition-colors',
                mode === item ?
                'bg-[#7f1d1d] text-white' :
                'bg-white/10 text-white/70 hover:bg-white/20'].
                join(' ')}>
                
                    {item}
                  </button>
              )}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Company
                </span>
                <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white"
                placeholder="Meridian Trading Co." />
              
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Work email
                </span>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white"
                placeholder="you@company.com" />
              
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Shipment details
                </span>
                <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white"
                placeholder="3 x SUVs from Yokohama, or 2 x 40ft containers to Rotterdam" />
              
              </label>
            </div>

            {status === 'error' &&
          <p role="alert" className="mt-4 text-sm text-red-300">
                Please add your company name and a valid email address.
              </p>
          }

            <button
            type="submit"
            disabled={status === 'submitting'}
            className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#7f1d1d] py-3.5 text-sm font-medium text-white transition-opacity hover:bg-[#a83232] disabled:opacity-70">
            
              {status === 'submitting' ?
            <>
                  <Loader2Icon size={16} className="animate-spin" />
                  Sending
                </> :

            <>
                  Send inquiry
                  <ArrowUpRightIcon
                size={16}
                className="transition-transform group-hover:rotate-45" />
              
                </>
            }
            </button>
          </form>
        }
      </div>
    </section>);

}