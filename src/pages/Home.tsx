import React from 'react';
import { Hero } from '../components/Hero';
import { VehicleShowcase } from '../components/VehicleShowcase';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { GlobalReach } from '../components/GlobalReach';
import { News } from '../components/News';
import { CTABand } from '../components/CTABand';

export function Home() {
  return (
    <>
      <Hero />
      <VehicleShowcase />
      <Services />
      <About />
      <GlobalReach />
      <News />
      <CTABand
        title="Ready to Ship Your Vehicle?"
        description="Get a free, no-obligation quote today."
        actionLabel="Request Shipping Quote" />

    </>);

}