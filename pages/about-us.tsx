import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import MetaTag from '@/components/molecules/Metatag'
export default function AboutUs() {
    const [state, setState] = useState("Mission")
    const Lorem = [
        {
            id: 1,
            value: "2019",
            answer: "Operating since 2019, our travel website has helped hundreds of customers plan their dream vacations and experience the world"

        },
        {
            id: 2,
            value: "+200",
            answer: "Booked over 200 group tours, our travel website has a proven track record of creating unforgettable experiences for our customers."

        },
        {
            id: 3,
            value: "+500",
            answer: "With over 500 hundred hotel bookings made through our platform, our travel website is a trusted source for affordable and high-quality accommodations."

        },
    ]
    return (
        <div>
            <MetaTag title="About Us" />
            <div className='flex justify-center items-center about-hero'>
                <p className='text-white text-[60px] font-[500] recoletafont'>About Us</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>
                <div className="pt-[80px]">
                    <p className='text-center text-[30px] lg:w-[50%] mb-[20px] m-auto font-[500] recoletafont text-blue-1000'>Who We Are</p>
                    <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px]  pb-[24px] m-auto text-justify  text-gray-1000 manropefont'>At Jupiter Travel Agency, we consider travelling to be more than an experience. We see ourselves as a business that turns travel dreams into realities and subsequently into unforgettable memories. We do more than make your dream trip a possibility; we make it inevitable.</p>
                    <p className='w-[90%] lg:w-[65%] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[36px] pb-[24px] m-auto text-justify  text-gray-1000 manropefont'>We guarantee that, with our skilled and
                        experienced team members providing you with expert advice and guidance, your trip is meticulously planned and curated,
                        you have access to 24/7 support and consultation,
                        you receive only the best deals and prices on all bookings,
                        your travel arrangements are as flexible and as tailored to your needs and desires, as much as possible and,
                        your entire travel experience is smooth, seamless and unforgettable. </p>
                </div>
                <div className='flex justify-center'>
                    <div className='pt-[24px] gap-[40px] w-[90%] h-[300px] sm:w-[720px] sm:h-[450px] lg:w-[900px] lg:h-[600px] relative'>
                        <Image src='/assets/about-us-img.jpg' fill={true} className='rounded-[12px]' alt=""></Image>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center py-[50px] sm:py-[110px] px-[20px] lg:px-[60px] xl:px-[100px] gap-[35px] lg:gap-[136px]'>
                    <div className='sm:w-[90%] lg:w-[50%]'>
                        {/* <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHAT WE OFFER</h1> */}
                        <div className='flex justify-between mb-[20px] sm:justify-center sm:gap-[50px] lg:gap-[0px] lg:justify-between sm:mb-[30px]'>
                            <h1 className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${state === "Mission" ? " text-blue-1000 border-b-2 border-blue-1000" : " text-gray-1000"} `} onClick={() => setState("Mission")}>Our Mission</h1>
                            <h1 className={`recoletafont text-[22px] sm:text-[32px] xl:text-[40px] cursor-pointer leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] ${state === "Vision" ? " text-blue-1000 border-b-2 border-blue-1000" : " text-gray-1000"} `} onClick={() => setState("Vision")}>Our Vision</h1>
                        </div>
                        {
                            state === "Mission" && <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
                                Our Mission is to perform and deliver excellent services to our clients and provide
                                them with an unforgettable travel
                                experience that exceeds their expectations.
                            </p>
                        }
                        {state === "Vision" && <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full'>
                            Our Vision is to be innovators and leaders in the concept of travel by positioning our company in the market within the best tourism companies in the world.
                        </p>}
                        {/* <div className='mt-[30px] lg:w-[50%]'>
                        <div className="w-[100%] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                            <Image src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div> */}
                        {/* <Button className='text-blue-1100 text-[14px] mt-[30px] bg-blue-1200 sm:text-[18px] manropefont'>Get Started</Button> */}

                        <div className='sm:w-[100%] lg:w-[50%] block lg:hidden mt-[30px]'>
                            <div className="w-[100%] h-[248px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                                <Image src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[90%] lg:w-[50%] hidden lg:block'>
                        <div className="w-[320px] h-[248px] sm:w-[500px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[400px] relative">
                            <Image src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div>
                </div>

                {/* <div className='flex flex-col-reverse lg:flex-row items-center py-[50px] sm:py-[110px] px-[20px] lg:px-[20px] xl:px-[100px] gap-[35px] lg:gap-[136px]'>

                <div className="w-full h-[248px] sm:h-[400px] lg:w-[440px] lg:h-[500px] xl:w-[636px] xl:h-[450px] relative">
                    <Image src="/assets/how-we-work-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                </div>
                <div>
                    <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>WHAT WE OFFER</h1>
                    <h1 className='recoletafont text-[32px] sm:text-[40px] leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Our Vision</h1>
                    <p className='manropefont text-justify text-[16px] leading-[24px] sm:text-[18px] sm:leading-[36px] font-[400] text-gray-1000 w-full lg:w-[425px]'>
                        Our Vision is to be innovators and leaders in the concept of travel by positioning our company in the market within the best tourism companies in the world.
                    </p>
                    <Button className='text-blue-1100 text-[14px] bg-blue-1200 sm:text-[18px] manropefont'>Explore <span className='ml-[5px]'>&#8594;</span></Button>

                </div>
            </div> */}

                <div className='py-[50px] sm:pb-[50px]'>
                    <h1 className='recoletafont text-[32px] leading-[40px] lg:text-[40px] lg:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000 sm:w-[60%] text-center m-auto'>Numbers matter - so here are a few important ones</h1>
                    <div className='mt-[30px] lg:mt-[59px] px-[50px] flex flex-col lg:flex-row justify-between gap-[32px]'>
                        {Lorem.map((e, idx) => {
                            return (

                                <div className='bg-blue-1400 px-[30px] py-[57px] w-fit relative rounded-[24px]' key={idx}>
                                    <div className="w-[40px] h-[40px] relative">
                                        <Image src="/assets/imgavatar.png" fill={true} alt="Red Triangle" className='rounded-2xl' />
                                    </div>
                                    <div className='flex gap-[12px] mt-[30px] mb-[20px]'>
                                        <h1 className='recoletafont font-[600] text-[35px] leading-[24px] text-blue-1000'>{e.value}</h1>
                                    </div>
                                    <p className='manropefont text-[16px] sm:leading-[30px] text-blue-1000'>{e.answer}</p>

                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Button = styled.button`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`