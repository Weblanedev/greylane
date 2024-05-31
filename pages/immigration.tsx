import Image from 'next/image'
import vacation7 from '../public/assets/hero-1.jpg'
import vacation8 from '../public/assets/hero-2.jpg'
import Form from '@/components/molecules/Form'
import { useState, useEffect } from 'react'
import MetaTag from '@/components/molecules/Metatag'
export default function Immigration() {
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
    const Visa = [
        {
            img: "/assets/immigration-one.jpg",
            header: "Entrepreneurship Visa",
            subText: "Immigrating to start a new business or invest in an existing one? Apply for an Entrepreneurship Visa.",
        },
        {
            img: "/assets/immigration-two.jpg",
            header: "Express Entry Program Visa",
            subText: "Semi or low-skilled workers, applicants that have fulfilled the minimum selection criteria points assigned by the Canadian Government and students or workers with temporary visas looking to transition to permanent residence status, are encouraged to apply.",
        },
        {
            img: "/assets/immigration-three.jpg",
            header: "Transit Visa",
            subText: "If you're flying through another country's airport to reach your destination, that is, if for example, your flight connects in the UK on the way to Canada, you may be required to possess a Transit Visa to fly out of that country's airport.",
        },
        {
            img: "/assets/immigration-fours.jpg",
            header: "Family Visa",
            subText: "Do you have an immediate or not too distant relative in another country that is a citizen of that country or a Lawful Permanent Resident? Then you are eligible for the Family Visa. ",
        },
        {
            img: "/assets/immigration-five.jpg",
            header: "Startup Visa",
            subText: "Apply for a Startup Visa as an entrepreneur looking to start a new business venture in a new country. In some countries, after certain eligibility requirements are met, the Startup Visa evolves from a temporary work permit to a permanent residence opportunity.",
        },
        {
            img: "/assets/immigration-six.jpg",
            header: "Student Visa",
            subText: " The Student Visa is the most popular pathway to immigration. If you've already been accepted into the foreign university of your choice and are now ready to begin your immigration journey, the next step is to apply for your Student Visa.",
        },
        {
            img: "/assets/immigration-seven.jpg",
            header: "Nonimmigrant/Tourist Visa",
            subText: "Visiting a country for vacation, to reunite with family, for medical reasons, or to simply live there on a temporary basis? The Tourist/Nonimmigrant Visa permits your stay for up to 90 days.",
        },
        {
            img: "/assets/immigration-eight.jpg",
            header: "Permanent Visa",
            subText: "With the Permanent Visa, you can live, work and eventually apply for citizenship in a foreign country.",
        },
        {
            img: "/assets/immigration-nine.jpg",
            header: "Work Permit",
            subText: "Apply for a Work Permit to be allowed to work, get employed and earn an income in a foreign country.",
        },
    ]
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
    const Offers = [
        {
            id: 1,
            title: "Free Language Resources",
            subText: "Find everything you need to learn and know to excel at any language proficiency test, in our rich database of learning resources, for free.",
            img: "/assets/language.png"

        },
        {
            id: 2,
            title: "Mock Visa Interviews",
            subText: "Master the visa interview process like a pro. Take mock interviews with our experts, read our guides on the interview process, meet with our previous customers to gain valuable experiential knowledge and gain an edge over other visa applicants.",
            img: "/assets/visas.png"

        },
        {
            id: 3,
            title: "Application Support",
            subText: "Our consultants are always with you every step of your immigration journey. We will guide you through your entire application process, making sure all the required documents are submitted, all necessary information filled and verified and all the requirements for a successful visa application are met.",
            img: "/assets/applications.png"

        },
        {
            id: 4,
            title: "One-Stop Shop",
            subText: "There's no need to outsource different parts of your immigration process to different agencies or consultants. Everything you need is right here, as one, single, consolidated service.",
            img: "/assets/shops.png"

        },
    ]
    return (
        <div>
            <MetaTag title="Immigration" />
            <div className='flex justify-center items-center immigration-hero'>
                <p className='text-white text-[60px] font-[500] recoletafont'>Immigration</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>

                <div className='text-center my-[50px] pl-[20px] sm:pl-[50px] lg:pl-[20px] xl:pl-[100px]'>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Your Passport To The World</h1>
                    <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        Your reliable one-stop shop for securing your ticket to better opportunities.
                    </p>
                    <div className='flex sm:justify-center gap-[20px] sm:gap-[32px] mt-[30px] overflow-scroll no-scrollbar'>
                        {[{
                            country: "Canada",
                            name: "+1",
                            code: "CA",
                            flag: "https://flagcdn.com/ca.svg"
                        }, {
                            country: "Australia",
                            name: "+61",
                            code: "AU",
                            flag: "https://flagcdn.com/au.svg"
                        }, {
                            country: "UK",
                            name: "+44",
                            code: "GB",
                            flag: "https://flagcdn.com/gb.svg"
                        }, {
                            country: "USA",
                            name: "+1",
                            code: "US",
                            flag: "https://flagcdn.com/us.svg"
                        }, {
                            country: "China",
                            name: "+86",
                            code: "CN",
                            flag: "https://flagcdn.com/cn.svg"
                        },].map((e, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="w-[150px] h-[150px] relative">
                                        <Image src={e.flag} fill={true} alt="Red Triangle" />
                                    </div>
                                    <h1 className='text-[16px] text-center text-gray-1100'>{e.country}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='py-[50px] sm:py-[55px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px]' id="visa">
                    <div className='text-center my-[50px]'>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Choose Your Visa</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                            Choose, from our range of visa services, your most preferred pathway to immigrate to a new country.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-[30px] auto-cols-max h-full">

                        {
                            Visa.map((e, idx) => {
                                return (
                                    <div className="w-[100%] relative" key={idx}>
                                        <div className='z-0 relative w-[100%] h-[185px] sm:h-[280px] lg:h-[225px]'>
                                            <Image
                                                src={e.img}
                                                className="rounded-t-[20px]"
                                                objectFit='cover'
                                                layout='fill'
                                                alt="Volunteer Track"
                                            ></Image>
                                        </div>
                                        <div className="p-[20px] h-[230px] sm:p-[32px] relative z-[1] shadows-two bg-[#FEFEFE] w-[100%]">
                                            <h1 className="recoletafont text-[20px] leading-[34px] sm:text-[24px] sm:leading-[40px] font-[700] pb-[11px] text-blue-1000">{e.header}</h1>
                                            <h1 className="manropefont text-[14px] text-justify sm:text-[16px] leading-[24px] font-[400] text-gray-1000">{e.subText}</h1>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bg-blue-1300  py-[50px] sm:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px] flex'>
                    <div>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Book a Consultation</h1>
                        <p className='manropefont text-[16px] sm:text-[20px] lg:w-[65%] text-gray-1000'>The sooner you start planning your immigration trip, the better. Consult us to know where to start.</p>
                        <Form mutationType='immigration'></Form>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="w-[300px] h-[200px] relative">
                            <Image src="/assets/hero-3.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                        <div className="w-[340px] h-[300px] relative -translate-x-44 -translate-y-8">
                            <Image src="/assets/vacation-2.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                        <div className="w-[380px] h-[240px] relative -translate-y-24">
                            <Image src="/assets/vacation-7.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div>
                </div>

                <div className='my-[50px] px-[20px] md:px-[50px] lg:px-[20px] xl:px-[150px] flex flex-col-reverse lg:flex-row gap-[77px]'>
                    <div>
                        <h1 className='recoletafont pb-[12px] text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>How We Make Immigrating Easier</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000'>
                            The only right way to immigrate is when you entrust your immigration journey to us. Here{"'"}s how we let you know you made the right choice.
                        </p>
                        <div className='grid grid-1 lg:grid-cols-2 gap-y-[30px] mt-[56px]'>
                            {
                                Offers.map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-[24px] md:gap-[40px] lg:gap-[20px]'>
                                            <div>
                                                <div className="mb-[12px] w-[58px] h-[58px] relative">
                                                    <Image src={item.img} fill={true} alt="Red Triangle" />
                                                </div>
                                                <h1 className='text-[19px] xl:text-[24px] leading-[36px] pb-[8px] xl:pb-[16px] font-[600] text-blue-1000 recoletafont'>{item.title}</h1>
                                                <h1 className='xl:w-[85%] text-justify font-[400] text-[14px] manropefont text-gray-1000 sm:text-[15px] leading-[24px]'>{item.subText}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='py-[50px] my-[110px] sm:pb-[50px] pl-[20px] sm:pl-[50px] lg:pl-[20px] xl:pl-[100px]'>
                    <div className=''>
                        <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>TESTIMONIALS</h1>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>What Our Customers Say</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px]'>
                            Getting your Immigration Visa can be a nerve-wracking and anxious experience, but it doesn{"'"}t have to be. Hear from the people who entrusted us with their once-in-a-lifetime opportunity.
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
                        <h1 className='border-[1px] rounded-[50%] text-gray-1000  border-gray-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollLft}>&#8592;</h1>
                        <h1 className='border-[1px] rounded-[50%] text-blue-1000 border-blue-1000 px-[12px] py-[4px] cursor-pointer' onClick={scrollRight}>&#8594;</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}