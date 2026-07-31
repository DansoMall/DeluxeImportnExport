import React from 'react';
import { CheckIcon } from 'lucide-react';

const STATS = [
{ value: '4,600+', label: 'Vehicles imported yearly' },
{ value: '18K+', label: 'Containers shipped yearly' },
{ value: '120', label: 'Ports & airport hubs' },
{ value: '96%', label: 'On-time delivery rate' }];


const POINTS = [
'Purchase assistance, customs clearance and door-to-door delivery, handled end to end',
'Shipping to Ghana, Nigeria, Ivory Coast, Burkina Faso, Togo and Benin',
'Licensed and insured shipping with real-time tracking on every vehicle'];


const BACKGROUND_IMAGE = "/386fe9f6-6acd-4d8f-8824-725fa1d8961a.jpg";

export function About() {
  return (
    <section id="about-us" className="relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }} />
      <div className="absolute inset-0 bg-[#0b0f16]/88" />
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70">
            About Us
          </span>
          <h2 className="font-display mt-5 text-2xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Your trusted transatlantic auto partner
          </h2>
          <p className="mt-5 max-w-[560px] text-sm leading-relaxed text-white/65 sm:mt-6 sm:text-base">
            Deluxe Import N Export LLC specializes in seamless vehicle
            transportation between North America and Africa. Whether you're in
            Africa looking to import your dream car from the US/Canada, or in
            North America needing to ship a vehicle to Africa, we handle every
            step — from purchase assistance to customs clearance and
            door-to-door delivery.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) =>
            <li key={point} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7f1d1d] text-white">
                  <CheckIcon size={14} />
                </span>
                <span className="text-sm leading-relaxed sm:text-base">
                  {point}
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[36px] sm:p-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
            {STATS.map((stat) =>
            <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </dd>
                <p className="mt-2 text-sm text-white/55">{stat.label}</p>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>);

}