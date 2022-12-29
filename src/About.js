import React from 'react';

// IMPORT COMPONENT
import Hero from './About/Hero';
import TeamSection from './About/TeamSection';
import AboutUsSection from './About/AboutUsSection';

function About() {
  return (
    <div className='bg-b2'>
      <Hero />
      <AboutUsSection />
      <TeamSection />
    </div>
  )
}

export default About