import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Lorem = [
    {
        Title: "Visa",
        SubText: "Get away, study, visit, explore, fly or immigrate to any part of the world, with your international visa.",
        img: "/assets/visas.png"

    },
    {
        Title: "Flight",
        SubText: "Get the best value for your money, when you book a flight with Westgate. ",
        img: "/assets/flight.png"

    },
    {
        Title: "Vacation Packages",
        SubText: "Get away on the perfect, professionally-curated, luxurious trip at the destination of your choice.",
        img: "/assets/holidays.png"

    }
]

const OurServices = () => {
    return (
        <div className='my-[110px] px-[20px] md:px-[50px] lg:px-[20px] xl:px-[100px] flex flex-col-reverse lg:flex-row gap-[77px]' id="services">
            <div>
                <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHAT WE OFFER</h1>
                <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Our Services</h1>
                <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000'>
                    We are very committed to making your travel experience as seamless and unforgettable as possible.
                    Explore our expert-backed wide range of services, to find the plan that suits you the best.
                </p>
                <div className='flex flex-col gap-y-[30px] mt-[56px]'>
                    {
                        Lorem.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-[24px] md:gap-[40px] lg:gap-[20px]'>
                                    <div className="w-[58px] h-[48px] relative">
                                        <Image src={item.img} fill={true} alt="Red Triangle" />
                                    </div>
                                    <div className='w-[100%]'>
                                        <h1 className='text-[19px] recoletafont xl:text-[24px] leading-[36px] pb-[8px] xl:pb-[16px] font-[500] text-blue-1000 manropefont'>{item.Title}</h1>
                                        <h1 className='xl:w-[85%] font-[400] text-[14px] manropefont text-gray-1000 sm:text-[15px] leading-[24px]'>{item.SubText}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="w-[337px] h-[371px] md:w-[525px] md:h-[525px] lg:w-[500px] lg:h-[600px] xl:w-[525px] xl:h-[625px] relative">
                    <Image src="/assets/homepage-ourservices.png" fill={true} alt="Red Triangle" />
                </div>
            </div>
        </div>
    )
}

export default OurServices

const Button = styled.button`
border: 1px solid black;
padding: 10px 30px;
font-size:18px;
border-radius: 30px;
`