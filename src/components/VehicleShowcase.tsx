import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';

const FEATURED = VEHICLES.slice(0, 4);

export function VehicleShowcase() {
  return (
    <section id="vehicles" className="w-full bg-[#0b0f16] px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
              Vehicle imports
            </span>
            <h2 className="mt-3 max-w-[720px] text-2xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cars landed, cleared and ready to drive
            </h2>
            <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/60 sm:text-base">
              Vehicles are our largest import line — sourced from Japan, Europe
              and the Gulf, shipped RoRo or in containers, and delivered with
              duties, registration papers and inspection complete.
            </p>
          </div>
          <Link
            to="/vehicles"
            className="group flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 py-1.5 pl-5 pr-1.5 text-sm text-white transition-colors hover:bg-white/5">

            View all stock
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7f1d1d] text-white transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon size={16} />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {FEATURED.map((vehicle, index) =>
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.07 }}>
            
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}