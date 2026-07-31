import React, { useState } from 'react';
import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Inquiry } from '../components/Inquiry';

const OFFICES = [
{
  city: 'Brooklyn Park, MN',
  role: 'Main office & phone support',
  address: '7800 Xylon Ave North, Brooklyn Park, MN 55433',
  phone: '+1 (763) 703-9495',
  hours: 'Monday–Friday, 9AM–5PM EST'
}];


const FAQS = [
{
  question: 'How long does shipping take from US to Africa?',
  answer:
  'Transit time depends on the destination port and shipping method. Most vehicles arrive within 30–60 days of departing a US or Canadian port. We can give you a more precise timeline for your specific route when you request a quote.'
},
{
  question: 'What documents are required for import?',
  answer:
  "You'll typically need the vehicle title, a bill of sale and identification. Requirements vary by destination country, so our team will walk you through exactly what's needed for Ghana, Nigeria, Ivory Coast, Burkina Faso, Togo or Benin before you ship."
},
{
  question: 'How are import duties calculated?',
  answer:
  "Import duties are set by each country's customs authority and are typically based on the vehicle's age, engine size and assessed value. Rates vary by destination, so we recommend confirming current duty rates with us before you ship."
},
{
  question: 'Can I ship personal belongings with my vehicle?',
  answer:
  'In many cases, yes — personal items can be packed inside the vehicle when shipping by container. Restrictions vary by destination and shipping method, so ask us about the rules for your specific route.'
}];


export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact Our Shipping Experts"
        description="One team, one point of contact. Reach out and we'll help you get your vehicle moving."
        image="/9801bc95-fead-4daa-b65d-7a4d899a8c19.jpg"
        imageAlt="Logistics office overlooking a harbour at dusk" />
      

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-[560px] gap-4 sm:gap-5">
          {OFFICES.map((office) =>
          <article
            key={office.city}
            className="rounded-[24px] border border-white/10 bg-[#14181f] p-6 sm:rounded-[28px] sm:p-8">

              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                {office.city}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#a83232]">
                {office.role}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPinIcon size={16} className="mt-0.5 shrink-0" />
                  {office.address}
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon size={16} className="mt-0.5 shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:underline">
                    {office.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon size={16} className="mt-0.5 shrink-0" />
                  {office.hours}
                </li>
              </ul>
            </article>
          )}
        </div>
      </section>

      <Inquiry />

      <section className="w-full bg-[#0b0f16] px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
            Frequently asked
          </h2>
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="py-5">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 text-left text-lg font-medium text-white">

                      {faq.question}
                      <span
                        aria-hidden="true"
                        className={[
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full text-xl leading-none transition-colors',
                        isOpen ? 'bg-[#7f1d1d] text-white' : 'border border-white/20 text-white'].
                        join(' ')}>

                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </dt>
                  {isOpen &&
                  <dd className="mt-3 max-w-[680px] text-sm leading-relaxed text-white/60">
                      {faq.answer}
                    </dd>
                  }
                </div>);

            })}
          </dl>
        </div>
      </section>
    </>);

}