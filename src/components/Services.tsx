import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  image: string;
  accent?: boolean;
};

const SERVICES: Service[] = [
{
  title: 'Vehicle Shipping',
  description:
  'Door-to-door vehicle transportation from US/Canada to Africa with full insurance coverage.',
  image: "/84a54210-f879-4f16-a9e9-c95e882cf86b.jpg",
  accent: true
},
{
  title: 'Vehicle Sourcing',
  description:
  "We'll find and purchase your desired vehicle in North America for export.",
  image: "/179ab9f6-f094-474a-9db6-40d1f495bf50.jpg"

},
{
  title: 'Customs Clearance',
  description:
  'Expert handling of all import/export documentation and customs procedures.',
  image: "/9492a96d-2a07-4637-a663-1294ecdb53ed.jpg",
  accent: true
},
{
  title: 'Consultation',
  description:
  'Personalized advice on import regulations, duties, and vehicle selection.',
  image: "/02748813-7b75-497b-95f9-8c4da004480d.jpg"

}];


export function Services() {
  return (
    <section
      id="services"
      className="dot-grid w-full bg-[#0b0f16] px-4 pb-16 pt-6 sm:px-8 sm:pb-24">

      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          Our Comprehensive Services
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-lg">
          From sourcing and shipping to customs clearance, we handle every
          step of getting your vehicle from North America to Africa.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1500px] gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {SERVICES.map((service, index) =>
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={[
          'group relative overflow-hidden rounded-[28px]',
          service.accent ? 'ring-2 ring-[#7f1d1d]' : ''].
          join(' ')}>

            <Link
            to="/services"
            className="absolute inset-0 z-10"
            aria-label={`${service.title} — view services`} />

            <img
            src={service.image}
            alt={service.title}
            className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]" />

            <div
            className={[
            'absolute inset-0 bg-gradient-to-t to-transparent',
            service.accent ? 'from-[#7f1d1d]/85 via-[#0b0f16]/20' : 'from-black/80 via-black/10'].
            join(' ')} />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <span
                className={[
                'grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform group-hover:rotate-45',
                service.accent ? 'bg-white text-[#7f1d1d]' : 'bg-[#7f1d1d] text-white'].
                join(' ')}>

                  <ArrowUpRightIcon size={16} />
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {service.description}
              </p>
            </div>
          </motion.article>
        )}
      </div>
    </section>);

}