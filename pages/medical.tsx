import Image from 'next/image'

import MetaTag from '@/components/molecules/Metatag'
import { useEffect, useState } from 'react';
import Form from '@/components/molecules/Form';
export default function Medical() {
    const Lorem = [
        {
            id: 1,
            question: "Lorem ipsum dolor sit.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic dolores laudantium."

        },
        {
            id: 2,
            question: "Lorem ipsum dolor sit.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic dolores laudantium."

        },
        {
            id: 3,
            question: "Lorem ipsum dolor sit.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic dolores laudantium."

        },
        {
            id: 4,
            question: "Lorem ipsum dolor sit.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic dolores laudantium."

        },
        {
            id: 5,
            question: "Lorem ipsum dolor sit.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic dolores laudantium."

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
    const Services = [
        {
            img: "/assets/medical-one.jpg",
            name: "Childbirth Services"
        },
        {
            img: "/assets/medical-two.jpg",
            name: "Plastic Surgery"
        },
        {
            img: "/assets/medical-three.jpg",
            name: "Eye Services"
        },
        {
            img: "/assets/medical-four.jpg",
            name: "Annual Medicals Abroad"
        },
        {
            img: "/assets/medical-five.jpg",
            name: "Mental health care"
        },
        {
            img: "/assets/medical-six.jpg",
            name: "Orthopedic Services"
        },
        {
            img: "/assets/medical-seven.jpg",
            name: "Dental Care"
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
        <div>
            <MetaTag title="Medical" />
            <div className='flex justify-center items-center medical-hero'>
                <p className='text-white text-[40px] font-[500] recoletafont'>Medical</p>
            </div>
            <div className='2xl:w-[1440px] mx-auto'>
                <div className='text-center my-[50px]'>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Healthcare is Lifecare</h1>
                    <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                        Access the best healthcare systems in the best countries in the world.
                    </p>
                </div>
                <div className="flex justify-center text-center flex-wrap gap-[30px]">
                    {Services.map((e, idx) => {
                        return (
                            <div key={idx} className=''>
                                <div className="w-[275px] h-[250px] relative">
                                    <Image src={e.img} fill={true} alt="Red Triangle" className='rounded-2xl' />
                                </div>
                                <h1 className='mt-[12px] text-[19px] xl:text-[24px] leading-[36px] pb-[8px] xl:pb-[16px] font-[600] text-blue-1000 recoletafont'>{e.name}</h1>
                            </div>

                        )
                    })}
                </div>
                <div className='bg-blue-1300 my-[110px] py-[50px] sm:py-[110px] px-[20px] sm:px-[50px] lg:px-[20px] xl:px-[100px] flex'>
                    <div className='flex'>
                        <div>
                            <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Book a Consultation</h1>
                            <p className='manropefont text-[16px] sm:text-[20px] lg:w-[65%] text-gray-1000'>Once you have selected a country of choice and a preferred medical service, the next step is booking a consultation. Our experts are highly trained and up-to-date on the latest medical immigration processes, news and document requirements.</p>
                            <Form mutationType='medical'></Form>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="w-[250px] h-[300px] relative translate-y-12">
                            <Image src="/assets/medical-form-one.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
                        </div>
                        <div className="w-[250px] h-[300px] relative translate-y-8 -translate-x-14">
                            <Image src="/assets/medical-form-two.jpg" fill={true} alt="Red Triangle" className='rounded-2xl' />
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