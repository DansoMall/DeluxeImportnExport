import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Logo } from './Logo';

const SHIP_HORIZONTAL = "/ceb7ce5a-b3be-4b78-81b5-ab84709a3020.jpg";


function SailingShips() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.img
        src={SHIP_HORIZONTAL}
        alt=""
        initial={{ x: '120%' }}
        animate={reduceMotion ? { x: '20%' } : { x: '-125%' }}
        transition={
        reduceMotion ?
        { duration: 0 } :
        {
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
          delay: 0
        }
        }
        style={{
          maskImage: 'radial-gradient(ellipse 62% 48% at 50% 52%, black 0%, black 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 62% 48% at 50% 52%, black 0%, black 30%, transparent 78%)',
          filter: 'brightness(0.5) saturate(0.5) contrast(1.15)'
        }}
        className="absolute bottom-[6%] w-[420px] opacity-80 sm:w-[620px]" />
    </div>);

}

const COLUMNS = [
{
  title: 'Services',
  links: [
  { label: 'Vehicle Imports', to: '/vehicles' },
  { label: 'Sea Freight', to: '/services' },
  { label: 'Air Freight', to: '/services' },
  { label: 'Road Transport', to: '/services' },
  { label: 'Warehousing', to: '/services' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Us', to: '/about' },
  { label: 'Vehicle Imports', to: '/vehicles' },
  { label: 'News', to: '/news' },
  { label: 'Packagers', to: '/packagers' },
  { label: 'Contact Us', to: '/contact' }]

},
{
  title: 'Support',
  links: [
  { label: 'Track Shipment', to: '/contact' },
  { label: 'Customs Guide', to: '/news' },
  { label: 'Packaging Specs', to: '/packagers' },
  { label: 'Our Network', to: '/about' }]

}];


export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 px-4 py-14 sm:px-8">
      <SailingShips />

      <div className="relative z-10 mx-auto max-w-[1400px] rounded-[24px] border border-white/10 p-6 sm:rounded-[36px] sm:p-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo className="h-10" />
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-white/70">
              Your trusted partner for transatlantic vehicle shipping between
              North America and Africa.
            </p>
          </div>
          {COLUMNS.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/55">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-sm text-white/75 transition-colors hover:text-[#a83232]">

                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© 2026 Deluxe Import N Export LLC. All rights reserved.</p>
          <p>Licensed &amp; insured vehicle shipping</p>
        </div>
      </div>
    </footer>);

}