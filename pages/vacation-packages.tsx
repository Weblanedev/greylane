import Image from 'next/image'

import vacation1 from '../public/assets/vacation-1.jpg'
import vacation2 from '../public/assets/vacation-2.jpg'
import vacation3 from '../public/assets/vacation-3.jpg'
import vacation4 from '../public/assets/vacation-4.jpg'
import vacation5 from '../public/assets/vacation-5.jpg'
import vacation6 from '../public/assets/vacation-6.jpg'
import vacation7 from '../public/assets/vacation-7.jpg'
import MetaTag from '@/components/molecules/Metatag'
import { useEffect, useState } from 'react'
import Form from '@/components/molecules/Form'
import styled from 'styled-components'
import { useRouter } from 'next/router'


export default function VacationPackages() {
    const router = useRouter()
    const purchase = (name: any, price: any) => {
      const product = {
        name,
        price,
      }
      localStorage.setItem("item", JSON.stringify(product))
      router.push("/billing") 
    }
    const Europe = [
        {
            img: "/assets/vacation-london.jpg",
            location: "London Trip",
            time: "5 Days/5 Nights",
            price: "2300"
        },
        {
            img: "/assets/vacation-paris.jpg",
            location: "Paris Trip",
            time: "5 Days/5 Nights",
            price: "4335"
        },
        {
            img: "/assets/vacation-switzerland.jpg",
            location: "Switzerland Trip",
            time: "5 Days/5 Nights",
            price: "3243"
        }
    ]

    const Africa = [
        {
            img: "/assets/vacation-accra-three.jpg",
            location: "Aqua Safari",
            time: "2 Days/2 Nights",
            price: "700"
        },
        {
            img: "/assets/vacation-accra-two.jpg",
            location: "Cape Coast",
            time: "2 Days/2 Nights",
            price: "450"
        },
        {
            img: "/assets/vacation-accra-one.jpg",
            location: "Accra",
            time: "2 Days/2 Nights",
            price: "1024"
        }
    ]

    const Island = [
        {
            img: "/assets/vacation-island-mal.jpg",
            location: "Vacation in Maldives",
            time: "6 Days/5 Nights",
            price: "1200"
        },
        {
            img: "/assets/vacation-island-mar.jpg",
            location: "Vacation in Mauritius",
            time: "6 Days/5 Nights",
            price: "1325"
        },
        {
            img: "/assets/vacation-island-san.jpg",
            location: "Vacation in Santorini",
            time: "5 Days/5 Nights",
            price: "1500"
        }
    ]
    const [outside, setOutsider] = useState<any>()
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
        <div className='overflow-hidden'>
            <MetaTag title="Vacation Packages" />
            <div className='flex justify-center items-center vacation-hero'>
                <p className='text-white text-[60px] text-center font-[500] recoletafont'>Vacation Packages</p>
            </div>
            <div className='2xl:w-[1440px] m-auto mb-[50px]'>
                <div className='mt-[70px] mb-[30px] text-center hidden xl:block'>
                    <h1 className='text-[52px] text-center font-[500] pb-[0px] w-[80%] xl:m-auto recoletafont text-blue-1000'>Go on The Trip of  a Lifetime</h1>
                    <p className='manropefont text-[20px] leading-[24px] font-[400] my-[20px] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        <span className='italic'>{'"'}To Travel is to Live{'"'}</span> – Hans Christian Andersen
                    </p>
                    <p className='text-[30px] text-center cursor-pointer'>&#8595;</p>
                </div>
                <div className='xl:flex items-center relative gap-[10px] xl:gap-[10px] hidden'>
                    <div className='-ml-[60px] hidden xl:block'>
                        <Image src={vacation4} width={200} height={200} alt="" className='rounded-[12px]'></Image>
                    </div>
                    <div className='flex flex-col gap-y-[30px]'>
                        <div>
                            <Image src={vacation2} width={300} height={300} alt="" className='rounded-[12px]'></Image>
                        </div>
                        <div>
                            <Image src={vacation3} width={300} height={300} alt="" className='rounded-[12px]'></Image>
                        </div>
                    </div>
                    <div className=''>
                        <Image src={vacation1} width={400} height={400} alt="" className='rounded-[12px]'></Image>
                    </div>
                    <div className='flex flex-col gap-y-[30px]'>
                        <div>
                            <Image src={vacation7} width={300} height={300} alt="" className='rounded-[12px]'></Image>
                        </div>
                        <div>
                            <Image src={vacation6} width={300} height={300} alt="" className='rounded-[12px]'></Image>
                        </div>
                    </div>
                    <div className='-mr-[60px] hidden xl:block'>
                        <Image src={vacation5} width={200} height={200} alt="" className='rounded-[12px]'></Image>
                    </div>
                </div>
            </div>
            <div className='py-[0px] sm:pb-[110px] xl:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[40px] 2xl:w-[1440px] mx-auto'>
                <div>
                    <h1 className='recoletafont text-center text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Experience life anew.</h1>
                    <p className='manropefont text-center text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        Stargaze in the City of Lights, parasail on the lush waters of Mauritius, dine on the white beaches of Maldives, navigate the wild safaris of Ghana, taste the world-famous mouth-melting chocolates of the Swiss and gallery-hop in the historic city of London.
                    </p>

                    <div className='pt-[36px]'>
                        <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'> Europe Holiday Package</h1>
                        <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                            Explore Europe
                        </p>
                        <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row gap-[15px]'>
                            {
                                Europe.map((e, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div className="w-[320px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[325px] lg:h-[208px] xl:h-[250px] xl:w-[400px] relative mb-[24px]">
                                                <Image src={e.img} fill={true} alt={e.location} className='rounded-2xl' />
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className="w-[30px] h-[30px] xl:w-[42px] xl:h-[42px] relative mb-[24px]">
                                                    <Image src="/assets/location.png" fill={true} alt="Red Triangle" className='rounded-2xl' />
                                                </div>
                                                <div>
                                                    <h1 className='recoletafont text-[24px] leading-[24px] font-[500] text-blue-1000 mb-[4px]'>{e.location}</h1>
                                                    <h1 className='manropefont text-[16px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.time}</h1>
                                                </div>
                                            </div>
                                            <div className='pl-[40px] xl:pl-[50px]'>
                                                <h1 className='manropefont text-[18px] leading-[24px] font-[400] text-gray-1000 mb-[10px]'>Flight ticket, City Tour,<br></br>Hotel Accommodation</h1>
                                                <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>${e.price}</h1>
                                            </div>
                                            <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont w-[100%] mt-[20px]' onClick={() => { purchase(e.location, e.price) }}>Book Now</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='pt-[75px]'>
                        <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Africa Holiday Package</h1>
                        <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                            Explore Ghana
                        </p>
                        <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row  gap-[15px]'>
                            {
                                Africa.map((e, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div className="w-[320px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[325px] lg:h-[208px] xl:h-[250px] xl:w-[400px] relative mb-[24px]">
                                                <Image src={e.img} fill={true} alt={e.location} className='rounded-2xl' />
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className="w-[30px] h-[30px] xl:w-[42px] xl:h-[42px] relative mb-[24px]">
                                                    <Image src="/assets/location.png" fill={true} alt="Red Triangle" className='rounded-2xl' />
                                                </div>
                                                <div>
                                                    <h1 className='recoletafont text-[24px] leading-[24px] font-[500] text-blue-1000 mb-[4px]'>{e.location}</h1>
                                                    <h1 className='manropefont text-[16px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.time}</h1>
                                                </div>
                                            </div>
                                            <div className='pl-[40px] xl:pl-[50px]'>
                                                <h1 className='manropefont text-[18px] leading-[24px] font-[400] text-gray-1000 mb-[10px]'>Flight ticket, City Tour,<br></br>Hotel Accommodation</h1>
                                                <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>${e.price}</h1>
                                            </div>
                                            <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont w-[100%] mt-[20px]' onClick={() => { purchase(e.location, e.price) }}>Book Now</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='pt-[75px]'>
                        <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Island Holiday Package</h1>
                        <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                            Explore the Islands
                        </p>
                        <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row gap-[15px]'>
                            {
                                Island.map((e, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div className="w-[320px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[325px] lg:h-[208px] xl:h-[250px] xl:w-[400px] relative mb-[24px]">
                                                <Image src={e.img} fill={true} alt={e.location} className='rounded-2xl' />
                                            </div>
                                            <div className='flex gap-[10px]'>
                                                <div className="w-[30px] h-[30px] xl:w-[42px] xl:h-[42px] relative mb-[24px]">
                                                    <Image src="/assets/location.png" fill={true} alt="Red Triangle" className='rounded-2xl' />
                                                </div>
                                                <div>
                                                    <h1 className='recoletafont text-[24px] leading-[24px] font-[500] text-blue-1000 mb-[4px]'>{e.location}</h1>
                                                    <h1 className='manropefont text-[16px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.time}</h1>
                                                </div>
                                            </div>
                                            <div className='pl-[40px] xl:pl-[50px]'>
                                                <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>${e.price}</h1>
                                            </div>
                                            <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont w-[100%] mt-[20px]' onClick={() => { purchase(e.location, e.price) }}>Book Now</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

const Button = styled.button`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`