import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import MetaTag from '@/components/molecules/Metatag';
export default function AboutUs() {
  const [state, setState] = useState('Mission');
  const Lorem = [
    {
      id: 1,
      value: '2022',
      answer:
        'Since its inception in 2022, our travel platform has assisted numerous travelers in crafting their ideal holiday experiences and exploring various destinations around the globe',
    },
    {
      id: 2,
      value: 'Exceeding 200',
      answer:
        'Having facilitated more than 200 group tours, our travel platform has consistently demonstrated its ability to curate remarkable journeys, leaving a lasting impression on our clientele.',
    },
    {
      id: 3,
      value: 'Surpassing 500',
      answer:
        'Facilitating over 500 hotel reservations through our portal, our travel platform has earned the reputation of being a reliable resource for securing cost-effective yet premium lodging options.',
    },
  ];

  return (
    <div>
      <MetaTag title='About Us' />
      <div className='flex justify-center items-center about-hero'>
        <p className='text-white text-[60px] font-[500] recoletafont'>
          About Us
        </p>
      </div>
      <div className='2xl:w-[1440px] mx-auto'>
        <div className='pt-[80px]'>
          <p className='text-center text-[30px] lg:w-[50%] mb-[20px] m-auto font-[500] recoletafont text-blue-1000'>
            Who We Are
          </p>
          <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px]  pb-[24px] m-auto text-justify  text-gray-1000 manropefont'>
            At Greylane Travel Agency, we view travel as more than just a
            journey. We perceive ourselves as a conduit that transforms travel
            aspirations into tangible experiences, ultimately creating enduring
            memories. Our commitment goes beyond merely facilitating your dream
            excursion; we ensure its realization is inevitable.
          </p>
          <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px] pb-[24px] m-auto text-justify  text-gray-1000 manropefont'>
            We assure you that our adept and seasoned team members will offer
            expert advice and meticulous planning, ensuring your trip is
            thoughtfully curated. With our 24/7 support and consultation
            services, you&apos;ll have assistance whenever needed. Count on us
            to secure the best deals and prices for all your bookings. Your
            travel arrangements will be tailored to your preferences and
            requirements, prioritizing flexibility. Expect a seamless and
            unforgettable travel experience from start to finish.
          </p>
        </div>
        {/* <div className='flex justify-center'>
          <div className='pt-[24px] gap-[40px] w-[90%] h-[300px] sm:w-[720px] sm:h-[450px] lg:w-[900px] lg:h-[600px] relative'>
            <Image
              src='/assets/how-we-work-one.jpg'
              fill={true}
              className='rounded-[12px]'
              alt=''></Image>
          </div>
        </div> */}

        <div className='flex flex-col lg:flex-row items-center py-[50px] sm:py-[110px] px-[20px] lg:px-[60px] xl:px-[100px] gap-[35px] lg:gap-[136px]'>
          <div className='sm:w-[90%] lg:w-[50%]'>
            {/* <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHAT WE OFFER</h1> */}
            <div className='flex justify-between mb-[20px] sm:justify-center sm:gap-[50px] lg:gap-[0px] lg:justify-between sm:mb-[30px]'>
              <h1
                className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${
                  state === 'Mission'
                    ? ' text-blue-1000 border-b-2 border-blue-1000'
                    : ' text-gray-1000'
                } `}
                onClick={() => setState('Mission')}>
                Our Mission
              </h1>
              <h1
                className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${
                  state === 'Vision'
                    ? ' text-blue-1000 border-b-2 border-blue-1000'
                    : ' text-gray-1000'
                } `}
                onClick={() => setState('Vision')}>
                Our Vision
              </h1>
            </div>
            {state === 'Mission' && (
              <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
                At Grey Lane, our mission is to enrich lives through exceptional travel experiences. 
                We strive to provide personalized, seamless, and unforgettable journeys that inspire 
                and connect people with the world{"'"}s diverse cultures, landscapes, and communities. 
                Our commitment is to deliver top-notch service, innovative solutions, and sustainable
               practices that exceed our clients expectations and foster a lifelong passion for exploration.
              </p>
            )}
            {state === 'Vision' && (
              <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
               Our vision is to be the leading travel company known for crafting extraordinary adventures
                that transform the way people see the world. We aim to inspire a global community of 
                travelers by offering unique, immersive experiences that promote cultural understanding,
                 environmental stewardship, and personal growth. Through continuous innovation and dedication 
                 to excellence, Grey Lane aspires to set new standards in the travel industry and be a trusted 
                 partner in every traveler{"'"}s journey
              </p>
            )}
            {/* <div className='mt-[30px] lg:w-[50%]'>
                        <div className="w-[100%] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                            <Image src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div> */}
            {/* <Button className='text-blue-1100 text-[14px] mt-[30px] bg-blue-1200 sm:text-[18px] manropefont'>Get Started</Button> */}

            <div className='sm:w-[100%] lg:w-[50%] block lg:hidden mt-[30px]'>
              <div className='w-[100%] h-[248px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative'>
                <Image
                  src='/assets/immigration-two.jpg'
                  fill={true}
                  alt='Red Triangle'
                  className='rounded-2xl'
                />
              </div>
            </div>
          </div>
          <div className='sm:w-[90%] lg:w-[50%] hidden lg:block'>
            <div className='w-[320px] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative'>
              <Image
                src='/assets/immigration-two.jpg'
                fill={true}
                alt='Red Triangle'
                className='rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Button = styled.button`
  outline: none;
  padding: 15px 30px;
  border-radius: 52px;
  font-weight: 500;
`;
