import React from 'react'
import Image from 'next/image'

import footer1 from '../../public/assets/hero-1.jpg'
import footer2 from '../../public/assets/hero-2.jpg'
import footer3 from '../../public/assets/hero-3.jpg'
import footer4 from '../../public/assets/hero-4.jpg'
import Instagram from '../atoms/socials/Instagram'
import Linkedln from '../atoms/socials/Linkedln'
import Twitter from '../atoms/socials/Twitter'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='py-[80px] px-[50px] xl:px-[120px] bg-blue-1000 manropefont'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-y-[50px]'>
                <div className='lg:w-[30%] text-white'>
                    <div className="w-[139px] h-[70px] relative mb-[24px]">
                        <Image src="/assets/logowest-removebg-preview.png" height={50} width={80} alt="Red Triangle" className='' />
                    </div>
                    <p className='text-[15px] leading-[24px]'>At Jupiter Travel Agency, we consider travelling to be more than an experience.
                    </p>

                    <p className='mt-[76px] text-[15px] hidden lg:block'>©{new Date().getFullYear()}, All rights reserved.</p>
                </div>
                <div>
                    <p className='text-[24px] font-[500] pb-[24px] text-white'>Company</p>
                    <ul className='flex flex-col gap-[20px] text-[18px] text-white text-opacity-50'>
                        <Link href="/about-us">
                            <li>Who We Are</li>
                        </Link>
                        <Link href="/contact-us">
                            <li>Contact Us</li>
                        </Link>
                        {/* <li>Our Services</li> */}
                    </ul>
                </div>
                <div className=''>
                    <p className='text-[24px] font-[500] pb-[24px] text-white'>Services</p>
                    <ul className='flex flex-col gap-[20px] text-[18px] text-white text-opacity-50'>
                        <Link href="/vacation-packages">
                            <li>Vacation Packages</li>
                        </Link>

                    </ul>
                </div>
            </div>
            <p className='mt-[76px] text-[15px] text-white block lg:hidden'>©{new Date().getFullYear()}, All rights reserved.</p>
        </footer>
    )
}

export default Footer