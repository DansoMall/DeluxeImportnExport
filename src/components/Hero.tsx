import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { Navbar } from './Navbar';

const HERO_IMAGE = "/hero-port-aerial.jpg";

const SEA_FREIGHT_IMAGE = "/02748813-7b75-497b-95f9-8c4da004480d.jpg";


export function Hero() {
  return (
    <section id="home" className="relative px-3 pb-16 pt-3 sm:px-5">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[32px] sm:rounded-[44px]">
        <img
          src={HERO_IMAGE}
          alt="Aerial view of container ships being guided by tugboats at a busy port"
          className="h-[600px] w-full object-cover sm:h-[720px] lg:h-[820px]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/35" />

        <Navbar />

        <div className="absolute inset-x-0 top-[20%] px-5 sm:top-[16%] sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-[1200px] text-[30px] font-bold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-5xl lg:text-[86px]">
            
            Bridging continents through reliable vehicle shipping
          </motion.h1>
          <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-white/80 sm:hidden">
            Delivering your vehicle safely, on time, from North America to Africa.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="absolute bottom-20 left-4 right-4 flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0b0f16] p-3 shadow-2xl sm:bottom-28 sm:left-10 sm:right-auto sm:max-w-[430px]">

          <img
            src={SEA_FREIGHT_IMAGE}
            alt="Port cranes at dusk"
            className="h-[84px] w-[84px] shrink-0 rounded-2xl object-cover sm:h-[104px] sm:w-[104px]" />

          <div className="pr-1 sm:pr-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-[#a83232] sm:text-base">
              Vehicle Shipping
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
              Door-to-door vehicle transportation from the US/Canada to
              Africa, fully insured.
            </p>
          </div>
        </motion.article>

        <div className="absolute bottom-24 right-6 hidden items-center sm:bottom-28 sm:right-10 md:flex">
          <p className="max-w-[440px] text-right text-2xl font-light leading-snug text-white lg:text-[30px]">
            Delivering your vehicle safely, on time, from North America to
            Africa.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="rounded-t-full bg-[#0b0f16] px-4 pt-3 sm:px-5 sm:pt-4">
            <a
              href="#vehicles"
              aria-label="Scroll to vehicle imports"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-[#7f1d1d] hover:text-white sm:h-14 sm:w-14">

              <ArrowDownIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>);

}