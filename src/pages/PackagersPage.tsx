import React from 'react';
import { CheckIcon, PackageIcon, RulerIcon, ShieldCheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTABand } from '../components/CTABand';

const PACKAGES = [
{
  name: 'Standard Export',
  price: 'From $180 / pallet',
  description: 'Palletised general cargo moving on regular ocean or road lanes.',
  includes: [
  'Stretch wrap and corner boards',
  'Heat-treated ISPM-15 pallet',
  'Shipping marks and labels',
  'Packing list and photos']

},
{
  name: 'Fragile & High Value',
  price: 'From $420 / crate',
  description: 'Custom timber crating for instruments, electronics and spares.',
  includes: [
  'Bespoke plywood crate',
  'Foam and anti-static lining',
  'Shock and tilt indicators',
  'Insurance-grade documentation'],

  featured: true
},
{
  name: 'Project & Heavy Lift',
  price: 'Quoted per unit',
  description: 'Machinery and oversized units prepared for break-bulk handling.',
  includes: [
  'Steel cradles and skids',
  'VCI wrapping and desiccants',
  'Lifting points and lashing plan',
  'On-site packing supervision']

}];


const CAPABILITIES = [
{
  icon: PackageIcon,
  title: 'Export crating',
  text: 'ISPM-15 compliant timber crates built to your unit dimensions on site or at our depot.'
},
{
  icon: ShieldCheckIcon,
  title: 'Cargo protection',
  text: 'Moisture barriers, VCI film, desiccants and shock indicators for sensitive freight.'
},
{
  icon: RulerIcon,
  title: 'Load planning',
  text: 'Stow plans that cut wasted cubic metres and keep chargeable weight under control.'
}];


const PARTNERS = [
{ name: 'Harbour Crate Works', location: 'Jebel Ali, UAE', focus: 'Timber crating' },
{ name: 'Vantage Pack Systems', location: 'Rotterdam, NL', focus: 'Automated palletising' },
{ name: 'Meridian Protective', location: 'Mundra, IN', focus: 'VCI & moisture control' },
{ name: 'Kilner Industrial', location: 'Mombasa, KE', focus: 'Heavy-lift cradles' }];


export function PackagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Packagers"
        title="Packing that survives the whole journey"
        description="Vetted packing partners and in-house crating so cargo arrives in the condition it left in — and clears customs without a query."
        image="/238cb1af-5bc8-48a7-bc4c-e113625cf0af.jpg"
        imageAlt="Industrial packaging line with export crates and pallets" />
      

      <section className="dot-grid w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {CAPABILITIES.map((item) =>
            <article
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-[#14181f] p-6 sm:rounded-[28px] sm:p-8">

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7f1d1d] text-white">
                  <item.icon size={20} />
                </span>
                <h2 className="font-display mt-6 text-lg font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Packing tiers
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/60 sm:text-base">
            Indicative pricing for common cargo profiles. Final rates depend on
            dimensions, destination and handling requirements.
          </p>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {PACKAGES.map((tier) =>
            <article
              key={tier.name}
              className={[
              'flex h-full flex-col rounded-[24px] p-6 sm:rounded-[32px] sm:p-10',
              tier.featured ?
              'bg-[#7f1d1d] text-white' :
              'border border-white/10 bg-[#14181f] text-white'].
              join(' ')}>

                {tier.featured &&
              <span className="mb-5 w-fit rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#7f1d1d]">
                    Most requested
                  </span>
              }
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                  {tier.name}
                </h3>
                <p
                className={[
                'mt-3 text-sm leading-relaxed',
                tier.featured ? 'text-white/65' : 'text-white/60'].
                join(' ')}>

                  {tier.description}
                </p>
                <p className="font-display mt-6 text-2xl font-bold">
                  {tier.price}
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {tier.includes.map((item) =>
                <li key={item} className="flex items-start gap-3 text-sm">
                      <span
                    className={[
                    'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                    tier.featured ?
                    'bg-white text-[#7f1d1d]' :
                    'bg-[#7f1d1d] text-white'].
                    join(' ')}>

                        <CheckIcon size={12} />
                      </span>
                      <span
                    className={
                    tier.featured ? 'text-white/80' : 'text-white/70'
                    }>

                        {item}
                      </span>
                    </li>
                )}
                </ul>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-2xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-4xl lg:text-5xl">
            Our packing partners
          </h2>
          <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/60 sm:text-base">
            Audited annually for materials, compliance and turnaround time.
          </p>
          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {PARTNERS.map((partner) =>
            <li
              key={partner.name}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[28px] sm:p-7">
              
                <h3 className="text-lg font-medium text-white">{partner.name}</h3>
                <p className="mt-2 text-sm text-white/55">{partner.location}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">
                  {partner.focus}
                </p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <div className="h-20 bg-[#0b0f16]" />

      <CTABand
        title="Need cargo packed before it ships?"
        description="Send dimensions, weight and destination — we'll specify the packing method and quote it with the freight."
        actionLabel="Get packing quote" />
      
    </>);

}