import React from 'react';
import { PageHero } from '../components/PageHero';
import { CTABand } from '../components/CTABand';

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This route is off the map"
        description="The page you were looking for has been moved or never existed. Head back to the home page or contact the freight desk."
        image="/901911d5-fe21-47ba-ae38-944143dbf26e.jpg"
        imageAlt="Port terminal at sunrise" />
      
      <CTABand
        title="Looking for something specific?"
        description="Tell us what you need and we'll point you to the right desk."
        actionLabel="Contact us" />
      
    </>);

}