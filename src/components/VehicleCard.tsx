import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, FuelIcon, GaugeIcon, ShipIcon } from 'lucide-react';
import type { Vehicle } from '../data/vehicles';

const STATUS_STYLES: Record<Vehicle['status'], string> = {
  'In stock': 'bg-[#7f1d1d] text-white',
  'On water': 'bg-[#0b0f16] text-white border border-white/20',
  'Pre-order': 'bg-white/10 text-white'
};

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#14181f] sm:rounded-[28px]">
      <div className="relative bg-[#1c2028]">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
          loading="lazy" />
        
        <span
          className={[
          'absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em]',
          STATUS_STYLES[vehicle.status]].
          join(' ')}>
          
          {vehicle.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-medium leading-snug text-white sm:text-lg">
            {vehicle.name}
          </h3>
          <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/60">
            {vehicle.year}
          </span>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-white/65 sm:text-sm">
          <div className="flex items-center gap-2">
            <GaugeIcon size={14} className="shrink-0" />
            <dt className="sr-only">Mileage</dt>
            <dd>{vehicle.mileage}</dd>
          </div>
          <div className="flex items-center gap-2">
            <FuelIcon size={14} className="shrink-0" />
            <dt className="sr-only">Fuel</dt>
            <dd>{vehicle.fuel}</dd>
          </div>
          <div className="flex items-center gap-2">
            <ShipIcon size={14} className="shrink-0" />
            <dt className="sr-only">Origin port</dt>
            <dd className="truncate">{vehicle.origin}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Transmission</dt>
            <dd className="truncate">{vehicle.transmission}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-xs text-white/50">{vehicle.arrival}</p>
          <Link
            to="/contact"
            className="group/link flex items-center gap-1.5 rounded-full bg-[#7f1d1d] py-1.5 pl-4 pr-1.5 text-xs font-medium text-white">

            Reserve
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#7f1d1d] transition-transform group-hover/link:rotate-45">
              <ArrowUpRightIcon size={13} />
            </span>
          </Link>
        </div>
      </div>
    </article>);

}