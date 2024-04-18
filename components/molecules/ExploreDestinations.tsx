import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const ExploreDestinations = () => {
    return (
        <div className='py-[50px] sm:py-[110px] px-[20px] lg:px-[20px] xl:px-[100px] gap-[77px]'>
            <div className='text-center'>
                <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHERE DO YOU WANT TO GO?</h1>
                <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Plan your next trip.</h1>
                <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000'>We want to take you wherever you want to go, anywhere in the world. </p>
            </div>
            <div className='mt-[50px] sm:mt-[80px] mb-[55px] flex flex-wrap justify-center gap-[20px] sm:gap-[32px]'>
                <div className="w-[340px] h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[518px] xl:h-[600px] relative">
                    <Image src="/assets/big-ben-uk.jpg" fill={true} alt="Big Ben" className='rounded-2xl' />
                </div>
                <div className="w-[340px] h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[518px] xl:h-[600px] relative">
                    <Image src="/assets/dubai.jpg" fill={true} alt="Dubai" className='rounded-2xl' />
                </div>
                <div className="w-[340px] h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[518px] xl:h-[600px] relative">
                    <Image src="/assets/maldives.jpg" fill={true} alt="Maldives" className='rounded-2xl' />
                </div>
                <div className="w-[340px] h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[518px] xl:h-[600px] relative">
                    <Image src="/assets/bridge.jpg" fill={true} alt="Bridge" className='rounded-2xl' />
                </div>
            </div>
            <Link className='flex justify-center' href="/vacation-packages">
                <Button className='text-blue-1100 text-[14px] bg-blue-1200 sm:text-[18px] manropefont'>Explore <span className='ml-[5px]'>&#8594;</span></Button>
            </Link>

        </div>
    )
}

export default ExploreDestinations

const Button = styled.button`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`
