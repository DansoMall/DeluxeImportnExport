import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { Navbar } from './Navbar';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt
}: PageHeroProps) {
  return (
    <section className="relative px-3 pb-10 pt-3 sm:px-5">
      <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px]">
        <img
          src={image}
          alt={imageAlt}
          className="h-[440px] w-full object-cover sm:h-[560px]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60" />

        <Navbar />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-12 sm:pb-16">
          <div className="mx-auto max-w-[1400px]">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">

              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRightIcon size={13} />
              <span className="text-white">{eyebrow}</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-4 max-w-[900px] text-[26px] font-bold uppercase leading-[1.06] tracking-[0.02em] text-white sm:mt-5 sm:text-5xl lg:text-6xl">

              {title}
            </motion.h1>
            <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>);

}