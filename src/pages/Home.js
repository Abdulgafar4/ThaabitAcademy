import React from 'react'
import { FaqWithImage } from '../components/Faq/Faq';
import { FooterSocial } from '../components/Footer/Footer';
import { Hero } from '../components/HeroSection/Hero'
import { Welcome } from '../components/WelcomeSection/Welcome'

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <FaqWithImage />
      <FooterSocial />
    </>
  );
}

export default HomePage