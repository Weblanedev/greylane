import Image from 'next/image';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import study from '../../../public/assets/hero-study-one.jpg';
import study2 from '../../../public/assets/hero-study-two.jpg';
import { useState } from 'react';

const HeroSection = () => {
  const [bg, setBg] = useState<Number>(4);
  const [outside, setOutsider] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((bg) => (Number(bg) + Number(1) > 6 ? 1 : Number(bg) + Number(1)));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var outsider = document.getElementById(`services`);
      setOutsider(outsider);
    }
  }, []);

  const scroll = (id: string) => {
    outside.scrollIntoView(true);
  };

  return (
    <>
      <HeroHero
        className='flex justify-center flex-col items-center hero-her text-white'
        imgs={`/assets/hero-hero${bg}.jpg)`}>
        <h1 className='text-[30px] text-center sm:text-[45px] lg:text-[55px] font-[900] pb-[16px] recoletafont'>
          Jupiter Travel Agency
        </h1>
        <p className='text-[16px] text-center w-[90%] sm:w-[85%] lg:w-[55%] sm:text-[25px] pb-[56px] sm:pb-[36px] font-[400] manropefont'>
          Make unforgettable memories, by going on the journey of a lifetime.
        </p>
        <Button
          className='text-black text-[14px] sm:text-[18px] manropefont cursor-pointer'
          onClick={() => scroll('services')}>
          Discover Now <span className='ml-[5px]'>&#8594;</span>
        </Button>
      </HeroHero>
    </>
  );
};

export default HeroSection;

const Button = styled.a`
  // border:2px solid black;
  outline: none;
  color: var(--blue);
  padding: 15px 30px;
  border-radius: 52px;
  background: white;
  font-weight: 500;
`;

const HeroHero = styled.div<{ imgs?: string }>`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({
    imgs,
  }) => (imgs ? `${imgs}` : '')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;;
`;
