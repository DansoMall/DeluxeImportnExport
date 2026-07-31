import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AnchorIcon,
  BoxIcon,
  CarFrontIcon,
  FileCheckIcon,
  PlaneIcon,
  TruckIcon,
  WarehouseIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTABand } from '../components/CTABand';

type Service = {
  id: string;
  title: string;
  icon: React.ElementType;
  summary: string;
  image: string;
  features: string[];
  transit: string;
};

const SERVICES: Service[] = [
{
  id: 'vehicles',
  title: 'Vehicle Import',
  icon: CarFrontIcon,
  summary:
  'Our largest line: cars, pickups, vans and EVs sourced abroad, shipped RoRo or containerised, then cleared and registered for you.',
  image: "/45e0ca52-889c-4e85-aef6-6e32402a60ce.jpg",

  features: [
  'Sourcing from Japan, Europe & the Gulf',
  'RoRo and container loading',
  'Pre-shipment inspection reports',
  'Duty, VAT and registration handled'],

  transit: '21–45 days door to door'
},
{
  id: 'sea',
  title: 'Sea Freight',
  icon: AnchorIcon,
  summary:
  'FCL and LCL consolidations on fixed weekly sailings, with reefer and out-of-gauge handling where needed.',
  image: "/02748813-7b75-497b-95f9-8c4da004480d.jpg",

  features: [
  'FCL 20ft, 40ft and high cube',
  'Weekly LCL consolidation boxes',
  'Reefer and out-of-gauge cargo',
  'Port-to-port or door-to-door'],

  transit: '18–34 days typical'
},
{
  id: 'air',
  title: 'Air Freight',
  icon: PlaneIcon,
  summary:
  'Priority uplift through 120+ airport hubs when a sailing schedule will not hold your deadline.',
  image: "/84a54210-f879-4f16-a9e9-c95e882cf86b.jpg",

  features: [
  'Next-flight-out and consolidated options',
  'Temperature-controlled uplift',
  'Dangerous goods certified handling',
  'Airport customs pre-clearance'],

  transit: '1–5 days typical'
},
{
  id: 'road',
  title: 'Road Transport',
  icon: TruckIcon,
  summary:
  'Cross-border trucking and drayage that closes the gap between terminal and warehouse door.',
  image: "/179ab9f6-f094-474a-9db6-40d1f495bf50.jpg",

  features: [
  'FTL and LTL across regional corridors',
  'Port drayage and container haulage',
  'GPS tracking on every trailer',
  'Timed delivery windows'],

  transit: '1–7 days typical'
},
{
  id: 'warehouse',
  title: 'Warehousing',
  icon: WarehouseIcon,
  summary:
  'Bonded and general storage close to the ports your buyers pull from, with pick-and-pack on request.',
  image: "/9492a96d-2a07-4637-a663-1294ecdb53ed.jpg",

  features: [
  'Bonded and duty-paid storage',
  'Pick, pack and re-labelling',
  'Cycle counts and stock reporting',
  'Cross-docking on arrival'],

  transit: 'Same-day release'
},
{
  id: 'customs',
  title: 'Customs Clearance',
  icon: FileCheckIcon,
  summary:
  'Licensed brokers handle classification, valuation and filings so shipments are not held at the border.',
  image: "/386fe9f6-6acd-4d8f-8824-725fa1d8961a.jpg",

  features: [
  'HS classification and duty planning',
  'Import and export declarations',
  'Free-trade agreement certificates',
  'Post-clearance audit support'],

  transit: '4–24 hours filing'
},
{
  id: 'projects',
  title: 'Project Cargo',
  icon: BoxIcon,
  summary:
  'Heavy-lift and break-bulk moves planned with route surveys, permits and lifting gear arranged end to end.',
  image: "/1dec61ec-75c1-4736-8441-703140bde986.jpg",

  features: [
  'Route surveys and permits',
  'Crane and lifting coordination',
  'Marine insurance placement',
  'On-site supervision'],

  transit: 'Planned per project'
}];


const PROCESS = [
{ step: '01', title: 'Brief', text: 'Share commodity, volume, incoterm and deadline.' },
{ step: '02', title: 'Route', text: 'We compare modes, carriers and landed cost.' },
{ step: '03', title: 'Book', text: 'Space confirmed, documents prepared and filed.' },
{ step: '04', title: 'Deliver', text: 'Live tracking to the door, POD on completion.' }];


export function ServicesPage() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Vehicle imports, plus every other mode"
        description="Cars first, then ocean, air, road, storage and customs — handled together so your cargo never stalls between vendors."
        image="/1dec61ec-75c1-4736-8441-703140bde986.jpg"
        imageAlt="Cargo ship at sea seen from above" />
      

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <div
            role="tablist"
            aria-label="Freight services"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">

            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveId(service.id)}
                  className={[
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors sm:px-5 sm:py-2.5',
                  isActive ?
                  'bg-[#7f1d1d] text-white' :
                  'bg-white/5 text-white hover:bg-white/10'].
                  join(' ')}>

                  <service.icon size={16} />
                  {service.title}
                </button>);

            })}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-0 overflow-hidden rounded-[24px] border border-white/10 sm:rounded-[36px] lg:grid-cols-2">

            <img
              src={active.image}
              alt={active.title}
              className="h-[220px] w-full object-cover sm:h-[300px] lg:h-full" />

            <div className="bg-[#14181f] p-6 sm:p-12">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                {active.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {active.summary}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {active.features.map((feature) =>
                <li
                  key={feature}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/75">

                    {feature}
                  </li>
                )}
              </ul>
              <p className="mt-7 text-xs uppercase tracking-[0.18em] text-[#a83232]">
                Transit · {active.transit}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display max-w-[700px] text-2xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
            How a shipment moves with us
          </h2>
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {PROCESS.map((item) =>
            <li
              key={item.step}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[28px] sm:p-7">
              
                <span className="font-display text-sm font-bold tracking-[0.2em] text-white/40">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-medium text-white">
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

      <div className="h-20 bg-[#0b0f16]" />

      <CTABand
        title="Not sure which mode fits your deadline?"
        description="Send the lane and the delivery date. We'll come back with ocean, air and road options priced side by side." />
      
    </>);

}