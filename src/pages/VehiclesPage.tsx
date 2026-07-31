import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ContainerIcon, ShipIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTABand } from '../components/CTABand';
import { VehicleCard } from '../components/VehicleCard';
import { VEHICLES, VEHICLE_CATEGORIES } from '../data/vehicles';

const SHIPPING_MODES = [
{
  icon: ShipIcon,
  title: 'RoRo shipping',
  text: 'Driveable vehicles roll straight onto the car carrier — the cheapest route for volume orders on fixed monthly sailings.',
  points: ['Lowest cost per unit', 'Fixed monthly sailings', 'Best for 5+ units'],
  image: "/c0434be8-182b-43d9-ae9f-181220384cbb.jpg"

},
{
  icon: ContainerIcon,
  title: 'Container shipping',
  text: 'Sealed 20ft or 40ft containers for non-runners, high-value cars and shipments with spare parts loaded alongside.',
  points: ['Fully enclosed protection', 'Parts loaded with the car', 'Any condition accepted'],
  image: "/45e0ca52-889c-4e85-aef6-6e32402a60ce.jpg"

}];


const STEPS = [
{ step: '01', title: 'Source', text: 'Send the model and budget, or pick from landed stock.' },
{ step: '02', title: 'Inspect', text: 'Pre-shipment inspection with photos and chassis report.' },
{ step: '03', title: 'Ship', text: 'RoRo or container booked on the next available sailing.' },
{ step: '04', title: 'Clear', text: 'Duty paid, registration filed, keys handed over.' }];


const ASSURANCES = [
'Chassis and mileage verified against export certificates',
'Duty, VAT and port charges quoted upfront as one landed price',
'Registration and roadworthiness paperwork handled for you',
'Marine insurance available on every vehicle we move'];


export function VehiclesPage() {
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(
    () =>
    category === 'All' ?
    VEHICLES :
    VEHICLES.filter((vehicle) => vehicle.category === category),
    [category]
  );

  return (
    <>
      <PageHero
        eyebrow="Vehicles"
        title="Car imports, handled end to end"
        description="Vehicles are our biggest import line. Sourced from Japan, Europe and the Gulf, shipped RoRo or containerised, cleared and delivered on plates."
        image="/45e0ca52-889c-4e85-aef6-6e32402a60ce.jpg"
        imageAlt="New cars queued on a quay beside a roll-on roll-off car carrier" />
      

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                Available &amp; incoming stock
              </h2>
              <p className="mt-3 text-sm text-white/60 sm:text-base">
                {filtered.length} vehicle{filtered.length === 1 ? '' : 's'} listed
                · updated daily
              </p>
            </div>
            <Link
              to="/contact"
              className="w-fit rounded-full bg-[#7f1d1d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#a83232]">

              Request a specific model
            </Link>
          </div>

          <div
            role="group"
            aria-label="Filter vehicles by type"
            className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">

            {VEHICLE_CATEGORIES.map((item) =>
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={[
              'shrink-0 rounded-full px-4 py-2 text-sm transition-colors sm:px-5 sm:py-2.5',
              category === item ?
              'bg-[#7f1d1d] text-white' :
              'bg-white/5 text-white hover:bg-white/10'].
              join(' ')}>

                {item}
              </button>
            )}
          </div>

          {filtered.length === 0 ?
          <p className="mt-16 text-center text-sm text-white/55">
              Nothing in this category right now — tell us the model and we will
              source it on the next sailing.
            </p> :

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((vehicle) =>
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
            )}
            </div>
          }
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:gap-5 lg:grid-cols-2">
          {SHIPPING_MODES.map((mode) =>
          <article
            key={mode.title}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] sm:rounded-[32px]">

              <img
              src={mode.image}
              alt={mode.title}
              className="h-48 w-full object-cover sm:h-64"
              loading="lazy" />

              <div className="p-6 sm:p-9">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7f1d1d] text-white">
                  <mode.icon size={19} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {mode.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {mode.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {mode.points.map((point) =>
                <li
                  key={point}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70">

                      {point}
                    </li>
                )}
                </ul>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display max-w-[760px] text-2xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
            How a car reaches your driveway
          </h2>
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {STEPS.map((item) =>
            <li
              key={item.step}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[28px] sm:p-7">
              
                <span className="font-display text-sm font-bold tracking-[0.2em] text-white/40">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-medium text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </li>
            )}
          </ol>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {ASSURANCES.map((point) =>
            <li key={point} className="flex items-start gap-3 text-white/75">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#7f1d1d] text-white">
                  <CheckIcon size={12} />
                </span>
                <span className="text-sm leading-relaxed">{point}</span>
              </li>
            )}
          </ul>
        </div>
      </section>

      <div className="h-16 bg-[#0b0f16] sm:h-20" />

      <CTABand
        title="Looking for a specific make and model?"
        description="Send the spec, year and budget. We'll come back with sourcing options, landed cost and the next sailing date."
        actionLabel="Request a vehicle" />
      
    </>);

}