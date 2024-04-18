import Image from 'next/image'
import vacation7 from '../public/assets/hero-1.jpg'
import vacation8 from '../public/assets/hero-2.jpg'
import { useState, useEffect } from 'react';
import MetaTag from '@/components/molecules/Metatag';
import Form from '@/components/molecules/Form';
import styled from 'styled-components';
import { useRouter } from 'next/router';
export default function Visa() {
    const [outside, setOutsider] = useState<any>()
    const router = useRouter();
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
    const scroll = (id: string) => {
        router.push("/immigration");
        setTimeout(() => {
            var scrollTO = document.getElementById(`${id}`);
            scrollTO?.scrollIntoView(true);
        }, 1000);
    };
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
    const Visa = [
        {
            img: "/assets/usa-visa-new.jpg",
            header: "US Visa",
            subText: "The US Visa grants you entry into the United States of America. There are two types of US Visa you can obtain; the Nonimmigrant Visa which allows you to travel on a temporary basis and the Immigrant Visa which allows you to live in the US on a permanent basis.",
        },
        {
            img: "/assets/canada-visa-new.jpg",
            header: "Canadian Visa",
            subText: "The Canadian Visa grants you entry into Canada. With the Canadian Visa, you are allowed to live in Canada on either a temporary or permanent basis. There are different types of Canadian Visa; the Visitor Visa, the Work Visa, the Permanent Residence Visa, the Business Immigrant Visa and the Express Entry Program Visa.",
        },
        {
            img: "/assets/schengen-visa-new.jpg",
            header: "Schengen Visa",
            subText: "The Schengen Visa is a short-stay visa that authorises travellers to enter the Schengen area on only a temporary basis of not more than 90 days. The Schengen area includes 23 of the 27 EU Member States (excluding Bulgaria, Cyprus, Romania and Ireland), Iceland, Liechtenstein, Norway and Switzerland. It enables its holder to enter, freely travel within, and leave the Schengen zone from any of the Schengen member countries.",
        },
        {
            img: "/assets/uk-visa-new.jpg",
            header: "UK Visa",
            subText: "The UK Visa grants its holder entry into the United Kingdom either on a temporary or permanent basis. There are different types of UK Visa; the Work Visa, the Business Visa, the Study Visa, the Visitor Visa, the Family Visa, the Settlement Visa and the Transit Visa. ",
        },
    ]
    return (
        <div>
            <MetaTag title="Visa" />
            <div className='flex justify-center items-center visa-hero'>
                <p className='text-white text-[40px] font-[500] recoletafont'>Visa</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>
                <div className='text-center my-[50px]'>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Go Anywhere, Do Everything</h1>
                    <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        Get away, study, visit, explore, fly or immigrate to any part of the world, with your international visa.
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
                <div className='py-[50px] sm:py-[55px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px]'>
                    <div className='text-center my-[50px]'>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Select your destination of choice.</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                            What type of Visa do you need to get to where you want to go? Learn more about the Visa options available to you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-[30px]">
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
                                        <div className="p-[20px] sm:p-[32px] h-[300px] relative z-[1] shadows-two bg-[#FEFEFE] w-[100%]">
                                            <h1 className="recoletafont text-[20px] leading-[34px] sm:text-[24px] sm:leading-[40px] font-[700] pb-[11px] text-blue-1000">{e.header}</h1>
                                            <h1 className="manropefont text-[14px] text-justify sm:text-[16px] leading-[24px] font-[400] text-gray-1000">{e.subText}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center mt-[36px]' onClick={() => scroll("visa")}>
                        <Button className='text-blue-1100 text-[14px] bg-blue-1200 sm:text-[18px] manropefont'>Explore <span className='ml-[5px]'>&#8594;</span></Button>
                    </div>
                </div>

                <div className='bg-blue-1300  py-[50px] sm:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px] flex'>
                    <div className=''>
                        <div>
                            <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Book a Consultation</h1>
                            <p className='manropefont text-[16px] sm:text-[20px] lg:w-[65%] text-gray-1000'>Have you decided on a Visa to apply for? The next step is booking a consultation. The earlier you start your visa application, the better.</p>
                            <Form mutationType='visa'></Form>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="w-[500px] h-[625px] relative">
                            <Image src="/assets/visa-forn.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                    </div>
                </div>

                <div className='py-[50px] sm:pb-[50px] pl-[20px] sm:pl-[50px] lg:pl-[20px] xl:pl-[100px]'>
                    <div className=''>
                        <h1 className='manropefont text-[14px] leading-[28px] font-[400] text-blue-1100'>TESTIMONIALS</h1>
                        <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>What Our Customers Say</h1>
                        <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px]'>
                            Hear from our customers who entrusted us with their visa applications and are now (or have been) in their dream destinations.
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

const Button = styled.button`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`
