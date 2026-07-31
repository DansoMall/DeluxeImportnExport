import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';

type CTABandProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
};

export function CTABand({
  title,
  description,
  actionLabel = 'Request a quote',
  actionTo = '/contact'
}: CTABandProps) {
  return (
    <section className="w-full bg-[#0b0f16] px-4 pb-16 sm:px-8 sm:pb-24">
      <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-white/10 p-7 sm:gap-8 sm:rounded-[36px] sm:p-14">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url(/cd7a3899-3ad9-4483-841f-da48566ceda1.jpg)' }} />
        <div className="absolute inset-0 bg-[#0b0f16]/85" />
        <div className="relative z-10">
          <h2 className="font-display max-w-[720px] text-2xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/60 sm:text-base">
            {description}
          </p>
        </div>
        <Link
          to={actionTo}
          className="group relative z-10 flex items-center gap-2 rounded-full bg-[#7f1d1d] py-2 pl-6 pr-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#a83232]">

          {actionLabel}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b0f16] text-white transition-transform group-hover:rotate-45">
            <ArrowUpRightIcon size={16} />
          </span>
        </Link>
      </div>
    </section>);

}