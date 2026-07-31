import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';

export const NAV_LINKS = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Browse Inventory', to: '/vehicles' },
{ label: 'Services', to: '/services' },
{ label: 'News', to: '/news' },
{ label: 'Packagers', to: '/packagers' },
{ label: 'Contact Us', to: '/contact' }];


export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-5 sm:px-8 sm:pt-7">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        
        <Link to="/" className="shrink-0" aria-label="Deluxe Import N Export home">
          <Logo className="h-10" />
        </Link>

        <ul className="hidden items-center gap-1.5 xl:flex">
          {NAV_LINKS.map((link) =>
          <li key={link.to}>
              <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
              [
              'flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm transition-colors',
              isActive ?
              'bg-[#7f1d1d] text-white' :
              'bg-white/15 text-white backdrop-blur-md hover:bg-white/25'].
              join(' ')
              }>

                {pathname === link.to &&
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              }
                {link.label}
              </NavLink>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/15">
            
            {open ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>

          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-[#7f1d1d] py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#a83232]">

            <span className="hidden sm:inline">Get Shipping Quote</span>
            <span className="sm:hidden">Quote</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b0f16] text-white transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon size={16} />
            </span>
          </Link>
        </div>
      </nav>

      {open &&
      <div className="mx-auto mt-3 max-w-[1400px] rounded-3xl bg-[#0b0f16]/95 p-3 shadow-xl backdrop-blur-md border border-white/10">
          <ul className="grid gap-1 sm:grid-cols-2">
            {NAV_LINKS.map((link) =>
          <li key={link.to}>
                <NavLink
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
              [
              'block rounded-2xl px-4 py-3 text-sm transition-colors',
              isActive ?
              'bg-[#7f1d1d] text-white' :
              'text-white hover:bg-white/10'].
              join(' ')
              }>
              
                  {link.label}
                </NavLink>
              </li>
          )}
          </ul>
        </div>
      }
    </header>);

}