import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const CTA = () => {
    return (
        <div className='py-[55px] lg:h-[60vh] my-[5px] flex flex-col justify-center items-center cta manropefont text-white'>
            <h1 className='recoletafont text-center text-[32px] leading-[40px] sm:text-[30px] sm:leading-[48px] font-[600] mb-[50px] w-[50%] text-white'>Take an extra step and leave us to handle your flight booking as well.</h1>
            <div className='flex flex-col gap-[65px] lg:gap-[30px] lg:flex-row w-[80%] lg:w-[100%] m-autos lg:px-[50px] px-[20px]'>
                {
                    [{
                        name: 'Flights Within Nigeria',
                        text: 'Fly to any and every state in Nigeria seamlessly and effortlessly.'
                    }, {
                        name: "Flights Within Africa",
                        text: 'Explore the beautiful continent we live in, one flight at a time.'
                    }, {
                        name: "Flights To Europe",
                        text: "Fly free. Fly luxuriously. Fly to Europe with Greylane Travels."
                    }].map((e, idx) => {
                        return (
                            <div className='flex items-center gap-[20px]' key={idx}>
                                <div className="w-[80px] h-[48px] lg:w-[100px] lg:h-[58px] relative">
                                    <Image src="/assets/visa.png" fill={true} alt="Red Triangle" />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='pb-[12px] font-[600] recoletafont'>{e.name}</h1>
                                    <p className='lg:w-[100%] font-[400] text-[14px]'>{e.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Button className='text-blue-1100 text-[14px] mt-[50px] bg-blue-1200 sm:text-[16px] manropefont' href="/flights">Get Started</Button>
        </div>
    )
}

export default CTA
const Button = styled.a`
outline:none;
padding: 10px 20px;
border-radius: 52px;
font-weight:500;
`