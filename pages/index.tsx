/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import HeroSection from '@/components/organisms/homepage/HeroSection'
import OurServices from '@/components/organisms/homepage/OurServices'
import CTA from '@/components/molecules/CTA'
import styled from 'styled-components'
import ExploreDestinations from '@/components/molecules/ExploreDestinations'
import { useEffect, useState } from 'react'
import MetaTag from '@/components/molecules/Metatag'

export default function Home() {
  const [showFaq, setShowFaq] = useState<any>(false)
  const [outside, setOutsider] = useState<any>()
  const Lorem = [
    {
      id: 1,
      question: "Does it cost money to get a quote?",
      answer: "No, it does not cost money to get a quote from us. Simply fill out our online form or give us a call, and one of our travel agents will be happy to provide you with a free quote for your trip or study plans. We look forward to helping you plan the perfect trip!"

    },
    {
      id: 2,
      question: "When can I book my trip with West-Gate Migration Services?",
      answer: "You can book your trip with us at any time. We are available to help you plan your next adventure, and we offer a wide range of services, including flight and hotel bookings, tours and activities, and much more. So whether you are planning a  last-minute getaway, a long-awaited vacation or a trip for study purposes we can help you make it happen."

    },
    {
      id: 3,
      question: "Do you book group travel tours?",
      answer: "Yes, we book group travel all the time! We specialize in helping groups of all sizes plan their dream trips. From family reunions to corporate retreats, we can take care of all the details so you can relax and enjoy your time away."

    },
    {
      id: 4,
      question: "Can I Study Abroad?",
      answer: "Yes, you can. However, there are certain requirements and eligibility criteria stipulated by a number of universities and scholarship bodies before you can study abroad."

    },
    {
      id: 5,
      question: "Do I need travel Insurance?",
      answer: "Yes. We highly recommend travel protection, it’s important to protect your trip investment and loved ones. We will offer you the best option."

    },
    {
      id: 6,
      question: "Will you be available while I am on vacation?",
      answer: "Yes, we will be available to answer any questions or address any concerns that you may have. You can get in touch with us anytime. We are committed to providing the best possible service and helping our clients create memorable vacations that they will always remember."
    },
    {
      id: 7,
      question: "Do you have an office I can visit for consultation?",
      answer: "Yes, Our office is at: 21, Bekwere Wosu Street, D-Line, Port Harcourt, Rivers State, Nigeria."
    }
  ]
  const Testimonials = [
    {
      id: 1,
      name: "Mr James Okusanya",
      occupation: "Studying Msc public health",
      testimonial: "I would recommend West-Gate Migration Services to anyone trying to get university admission overseas. They made my admission process very smooth and easy."

    },
    {
      id: 2,
      name: "Miss Obiakaeze",
      occupation: "",
      testimonial: "I can't say enough about West-Gate Migration Services. West-Gate Migration Services really helped with my schenghen visa process after so many denials and money wasted. Thanks to them, my visa was approved in March."

    },
    {
      id: 3,
      name: "Mrs Vicky Dozie",
      occupation: "",
      testimonial: "I have been using West-Gate Migration Services for over a year now for flight bookings! I can't imagine my travel life without them. Their customer service is great and they respond to complaints swiftly."

    },
    {
      id: 4,
      name: "Mr Nwaneri",
      occupation: "",
      testimonial: "West-Gate Migration Services helped my family and I with getting our passports at the Nigerian immigration office and tourist visas to England. Previously, we were lost and did not know what to do or where to start from. Using West-Gate Migration Services has definitely saved us time and money."

    },
  ]
  const active = (index: any) => {
    if (showFaq === index) {
      return setShowFaq(null);
    }
    setShowFaq(index);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const outsider = document.getElementById('outsider');
      setOutsider(outsider)
    }
  }, []);


  const distance = 300;

  const scrollLft = () => {
    outside?.scrollBy({
      left: -distance,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    outside?.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <MetaTag title="Home" />
      <main>
        <HeroSection></HeroSection>
        <div className='2xl:w-[1440px] mx-auto'>

          <OurServices></OurServices>
          <ExploreDestinations></ExploreDestinations>
          <div className='bg-blue-1300 py-[50px] sm:py-[110px] px-[20px] lg:px-[20px] xl:px-[100px]'>
            <div className='text-center'>
              <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Frequently asked questions</h1>
              <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                We've answered some of your frequently asked questions with quick, easy and comprehensive responses here. For further questions, please contact us below.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[32px] mt-[48px] manropefont'>
              {
                Lorem.map((faq) => {
                  return (
                    faq.id < 8 && <div className='flex flex-col px-[20px] box-shadow' key={faq.id} onClick={() => active(faq.id)}>
                      <div className='flex'>
                        <div className='cursor-pointer'>
                          <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                            <div className='w-[100%]'>
                              <h1 className='w-[100%] pr-[29px] sm:w-11/12 text-[16px] leading-[24px] lg:text-[20px] lg:leading-[40px] xl:text-[20px] xl:leading-[40px] font-[500] text-blue-1000'>{faq.question}</h1>
                            </div>
                            <div className=''>
                              <Image
                                src="/assets/dropdown.svg"
                                width={20}
                                height={11}
                                objectFit="cover"
                                alt="dropdown"
                                className={showFaq === faq.id ? 'rotate-0' : 'rotate-180'}
                              />
                            </div>
                          </div>
                          {showFaq === faq.id &&
                            <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                              <p className='text-[14px] leading-[22px] sm:text-[16px] sm:leading-[30px] font-[300] xl:sm:text-[18px] xl:leading-[30px] fadein popup'>{faq.answer}</p>
                            </div>}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='py-[50px] sm:py-[110px] pl-[20px] lg:pl-[20px] xl:pl-[100px]'>
            <div className=''>
              <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>TESTIMONIALS</h1>
              <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>What Our Customers Say</h1>
              <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px]'>
                We are known for many travel success stories, but here are some of our favourites.
              </p>
            </div>
            <div className='mt-[59px] flex gap-[32px] overflow-scroll no-scrollbar' id="outsider">
              {Testimonials.map((e, idx) => {
                return (

                  <div className='bg-blue-1400 px-[60px] py-[57px] w-fit relative rounded-[24px]' key={idx}>
                    <div className="w-[44px] h-[44px] relative -translate-x-9 -translate-y-3">
                      <Image src="/assets/comma.svg" fill={true} alt="" className='rounded-2xl' />
                    </div>
                    <p className='w-[290px] sm:w-[400px] manropefont text-[18px] leading-[37px]  sm:text-[20px] sm:leading-[41px] text-blue-1000'>{e.testimonial} </p>
                    <div className='flex gap-[12px] mt-[47px]'>
                      <div className="w-[40px] h-[40px] relative">
                        <Image src="/assets/imgavatar.png" fill={true} alt={e.name} className='rounded-2xl' />
                      </div>
                      <div>
                        <h1 className='recoletafont font-[600] text-[18px] leading-[24px] text-blue-1000'>{e.name}</h1>
                        <p className='manropefont text-gray-1000'>{e.occupation}</p>
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
            <div className='flex justify-end mt-[56px] gap-[15px] text-[30px] pr-[50px]'>
              <h1 className='border-[1px] rounded-[50%] text-blue-1000 border-blue-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollLft}>&#8592;</h1>
              <h1 className='border-[1px] rounded-[50%] text-blue-1000 border-blue-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollRight}>&#8594;</h1>
            </div>
          </div>
        </div>

        <div className='bg-blue-1500 h-[352px] flex'>
          <div className="w-[3520px] h-[352px] relative hidden lg:block">
            <Image src="/assets/NoiseTextureRight.svg" fill={true} alt="Red Triangle" className='rounded-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Get started with us today!</h1>
            <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[500px] mb-[40px] text-center'>
              Our consultants are always available to help you with whatever you need.
            </p>
            <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont' href="/contact-us">Talk to Us</Button>
          </div>
          <div className="w-[3520px] h-[352px] relative hidden lg:block">
            <Image src="/assets/NoiseTextureLeft.svg" fill={true} alt="Red Triangle" className='rounded-2xl' />
          </div>
        </div>
        {/* </div> */}
      </main >
    </>
  )
}
const Button = styled.a`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`