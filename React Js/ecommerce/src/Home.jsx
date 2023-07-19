import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';
import { styled } from 'styled-components';

const Home = () => {

  const data = {
    name: "Ecommerce App",
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  })

  return (
    <Wrapper>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />

    </Wrapper>
  );
};

const Wrapper = styled.section`

`

export default Home;