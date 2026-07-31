import React from 'react';
import { PageHero } from '../components/PageHero';
import { About } from '../components/About';
import { GlobalReach } from '../components/GlobalReach';
import { CTABand } from '../components/CTABand';

const TIMELINE = [
{
  year: '2009',
  title: 'Founded as a single-lane NVOCC',
  text: 'Started with one weekly consolidation between Jebel Ali and Mumbai.'
},
{
  year: '2014',
  title: 'In-house customs brokerage',
  text: 'Brought clearance and duty planning under the same roof as freight.'
},
{
  year: '2019',
  title: 'Air and road divisions launched',
  text: 'Added multimodal routing so urgent cargo never waits for a sailing.'
},
{
  year: '2026',
  title: '60 countries, one accountable team',
  text: 'A network of vetted agents with a single coordinator per account.'
}];


const VALUES = [
{
  title: 'Transparent Pricing',
  text: 'No hidden fees — all costs explained upfront.'
},
{
  title: 'African Expertise',
  text: 'Deep understanding of African import regulations.'
},
{
  title: 'Door-to-Door',
  text: 'We deliver directly to your specified location.'
},
{
  title: 'Tracking',
  text: "Real-time updates on your shipment's status."
}];


export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted Transatlantic Auto Partner"
        description="Deluxe Import N Export LLC specializes in seamless vehicle transportation between North America and Africa, from purchase assistance to customs clearance and door-to-door delivery."
        image="/386fe9f6-6acd-4d8f-8824-725fa1d8961a.jpg"
        imageAlt="Container terminal at blue hour with gantry cranes" />
      

      <About />

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs uppercase tracking-[0.18em] text-white/50">
            Our story
          </span>
          <h2 className="mt-3 max-w-[720px] text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            From one weekly sailing to a global network
          </h2>

          <ol className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item) =>
            <li
              key={item.year}
              className="rounded-[24px] border border-white/10 bg-[#14181f] p-6 sm:rounded-[28px] sm:p-7">

                <span className="font-display text-3xl font-bold text-[#a83232]">
                  {item.year}
                </span>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </li>
            )}
          </ol>
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-4xl">
              Why Choose Deluxe Import N Export LLC?
            </h2>
            <p className="mt-5 max-w-[420px] text-base leading-relaxed text-white/60">
              We make vehicle shipping to Africa simple, transparent and
              reliable from start to finish.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {VALUES.map((value) =>
            <div
              key={value.title}
              className="rounded-[24px] border border-white/10 bg-[#14181f] p-6 sm:rounded-[28px] sm:p-7">

                <dt className="font-display text-base font-bold uppercase tracking-wide text-[#a83232]">
                  {value.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/65">
                  {value.text}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <GlobalReach />

      <CTABand
        title="Ready to Ship Your Vehicle?"
        description="Get a free, no-obligation quote today."
        actionLabel="Request Shipping Quote" />

    </>);

}