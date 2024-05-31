import Image from 'next/image'
import vacation7 from '../public/assets/hero-1.jpg'
import vacation8 from '../public/assets/hero-2.jpg'
import MetaTag from '@/components/molecules/Metatag'
import { useState, useEffect } from 'react'
import Form from '@/components/molecules/Form'
export default function Flights() {
    //lagos to london
    //local and international
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
    const Testimonials = [
        {
            id: 1,
            name: "Mr James Okusanya",
            occupation: "Studying Msc public health",
            testimonial: "I would recommend Greylane Travel Agency to anyone trying to get university admission overseas. They made my admission process very smooth and easy."

        },
        {
            id: 2,
            name: "Miss Obiakaeze",
            occupation: "",
            testimonial: "I can't say enough about Greylane Travel Agency. Greylane Travel Agency really helped with my schenghen visa process after so many denials and money wasted. Thanks to them, my visa was approved in March."

        },
        {
            id: 3,
            name: "Mrs Vicky Dozie",
            occupation: "",
            testimonial: "I have been using Greylane Travel Agency for over a year now for flight bookings! I can't imagine my travel life without them. Their customer service is great and they respond to complaints swiftly."

        },
        {
            id: 4,
            name: "Mr Nwaneri",
            occupation: "",
            testimonial: "Greylane Travel Agency helped my family and I with getting our passports at the Nigerian immigration office and tourist visas to England. Previously, we were lost and did not know what to do or where to start from. Using Greylane Travel Agency has definitely saved us time and money."

        },
    ]
    const Europe = [
        {
            img: "/assets/vacation-london.jpg",
            location: "London Trip",
            time: "5 Days/5 Nights",
            price: "N2,765,000/Person"
        },
        {
            img: "/assets/vacation-paris.jpg",
            location: "Paris Trip",
            time: "5 Days/5 Nights",
            price: "N2,623,000/Person"
        },
        {
            img: "/assets/vacation-switzerland.jpg",
            location: "Switzerland Trip",
            time: "5 Days/5 Nights",
            price: "N2,446,000/Person"
        }
    ]

    const Africa = [
        {
            img: "/assets/vacation-accra-three.jpg",
            location: "Aqua Safari",
            time: "2 Days/2 Nights",
            price: "N990,000/Person Sharing"
        },
        {
            img: "/assets/vacation-accra-two.jpg",
            location: "Cape Coast",
            time: "2 Days/2 Nights",
            price: "N990,000/Person Sharing"
        },
        {
            img: "/assets/vacation-accra-one.jpg",
            location: "Accra",
            time: "2 Days/2 Nights",
            price: "N990,000/Person Sharing"
        }
    ]

    const Island = [
        {
            img: "/assets/vacation-island-mal.jpg",
            location: "Vacation in Maldives",
            time: "6 Days/5 Nights",
            price: "N1,480,000/Person sharing"
        },
        {
            img: "/assets/vacation-island-mar.jpg",
            location: "Vacation in Mauritius",
            time: "6 Days/5 Nights",
            price: "N1,480,000/Person sharing"
        },
        {
            img: "/assets/vacation-island-san.jpg",
            location: "Vacation in Santorini",
            time: "5 Days/5 Nights",
            price: "N1,480,000/Person sharing"
        }
    ]
    return (
        <div>
            <MetaTag title="Flights" />
            <div className='flex justify-center items-center flight-hero'>
                <p className='text-white text-[40px] font-[500] recoletafont'>Flights</p>
            </div>


            <div>
                <div className='2xl:w-[1440px] m-auto mb-[50px]'>
                    <div className='mt-[70px] mb-[30px] text-center hidden xl:flex flex-col items-center justify-center'>
                        <h1 className='text-[52px] text-center font-[500] pb-[0px] w-[80%] xl:m-auto recoletafont text-blue-1000'>Get the best value for your money, when you book a flight with Greylane Travels. </h1>
                        <p className='manropefont text-[20px] leading-[24px] font-[400] my-[20px] text-gray-1000 w-full lg:w-[700px] m-auto'>
                            <span className='italic'>{'"'}To most people the sky is the limit. To those who love flying, the sky is home.{'"'}</span> – Unknown
                        </p>
                        <div className="w-[320px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[325px] lg:h-[208px] xl:h-[320px] xl:w-[600px] relative mt-[24px]">
                            <Image src="/assets/flights.jpg" fill={true} alt="flight" className='rounded-2xl' />
                        </div>
                    </div>
                </div>
                <div className='py-[0px] sm:pb-[110px] xl:py-[50px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[40px] 2xl:w-[1440px] mx-auto'>
                    <div>
                        <h1 className='recoletafont text-center text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Fly With Greylane Travels</h1>
                        <p className='manropefont text-center text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                            Where do you want to go? We{"'"}ll take you anywhere you want in the world, as long as you{"'"}re booking a flight with us. Booking with us ensures you receive the best deals for the best flights to anywhere you want to go.
                        </p>
                        <div className='pt-[75px]'>
                            <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Flights Within Nigeria</h1>
                            <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                                We partner with top airlines to bring you a wide selection of flights to major cities like Lagos, Abuja, and Port Harcourt, as well as lesser-known destinations like Calabar, Jos, and Sokoto. Whether you{"'"}re traveling for business or pleasure, we have flights within Nigeria that suit your budget and schedule.

                            </p>
                            {/* <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row gap-[15px]'>
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
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.price}</h1>
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>N1,580,000 for single occupancy</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> */}
                        </div>

                        <div className='pt-[36px]'>
                            <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Flights To Europe</h1>
                            <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                                We partner with top airlines to bring you the best flight options for your journey. From popular destinations like London, Paris, and Rome to hidden gems like Budapest, Prague, and Lisbon, we have flights to Europe that suit every traveler{"'"}s needs. </p>
                            {/* <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row gap-[15px]'>
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
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.price}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> */}
                        </div>
                        <div className='pt-[36px]'>
                            <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Flights Within Africa</h1>
                            <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                                Whether you{""}re traveling for business or pleasure, we offer a wide selection of flights to get
                                you where you need to go. With our easy-to-use search tool,
                                you can compare prices and schedules to find the best flight options for your needs.
                                We partner with top airlines to bring you a variety of options for your journey.
                                From bustling cities like Lagos, Nairobi, and Johannesburg to breathtaking destinations like the Serengeti,
                                Victoria Falls, and the Sahara Desert, we have flights within Africa to suit every traveler{"'"}s preferences.
                            </p>
                            {/* <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row  gap-[15px]'>
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
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.price}</h1>
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>N1,100,000 for single occupancy</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> */}
                        </div>
                        <div className='pt-[36px]'>
                            <h1 className='recoletafont text-[32px] text-center lg:text-left leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[4px] sm:mt-[4px] text-blue-1000'>Flights To Asia</h1>
                            <p className='manropefont sm:text-center lg:text-left text-[15px] leading-[24px] font-[400] text-gray-1000'>
                                With our extensive network of airlines and partnerships, we offer a wide range of options for your next trip to this diverse and exciting continent. We offer flights to major cities like Tokyo, Bangkok, and Seoul, as well as lesser-known gems like Hoi An, Ubud, and Kathmandu.
                                Whether you{"'"}re traveling for business or pleasure, we have the flights to Asia that suit your needs.  </p>
                            {/* <div className='flex mt-[24px] flex-col gap-y-[40px] items-center lg:flex-row gap-[15px]'>
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
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>{e.price}</h1>
                                                    <h1 className='recoletafont text-[20px] leading-[24px] font-[400] text-gray-1000 mb-[4px]'>N1,580,000 for single occupancy</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> */}
                        </div>


                    </div>
                    <div className='bg-blue-1300 my-[50px] sm:my-[110px] py-[50px] sm:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[40px] flex'>
                        <div className=''>
                            <div>
                                <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Book a Consultation</h1>
                                <p className='manropefont text-[16px] sm:text-[20px] lg:w-[85%] text-gray-1000'>The earlier you book, the better. The flight you{"'"}re thinking of booking right now might be at a different rate when you come back!</p>
                                <Form mutationType='flight'></Form>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className="w-[500px] h-[625px] relative">
                                <Image src="/assets/visa-forn.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                            </div>
                        </div>
                    </div>

                    {/* <div className='py-[50px] sm:py-[110px] pl-[20px] lg:pl-[20px] xl:pl-[100px]'>
                        <div className=''>
                            <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>TESTIMONIALS</h1>
                            <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Our Success Stories</h1>
                            <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px]'>
                                Hear from fellow students who are currently pursuing the career of their dreams in the country of their dreams.
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
                            <h1 className='border-[1px] rounded-[50%] text-gray-1000 border-gray-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollLft}>&#8592;</h1>
                            <h1 className='border-[1px] rounded-[50%] text-blue-1000 border-blue-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollRight}>&#8594;</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}