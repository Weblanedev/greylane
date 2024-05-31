import React, { useState } from 'react'
import MetaTag from "@/components/molecules/Metatag";
import Image from 'next/image';
import styled from "styled-components";

export default function ContactUs() {
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [partner, setPartner] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });
    function handleChange(e: { target: { value: any; name: any } }) {
        const value = e.target.value;
        setPartner({
            ...partner,
            [e.target.name]: value,
        });
    }
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
        const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`;
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
        const userInfo = {
            name: partner.name,
            email: partner.email,
            number: partner.number,
            message: partner.message
        };
        const requestBody = {
            mutations: [
                {
                    create: {
                        _type: 'contact',
                        ...userInfo
                    },
                },
            ],
        };

        try {
            if (partner.email === "" || partner.name === "" || partner.number === "" || partner.message === "") {
                setError("Fill all fields")
                setTimeout(() => {
                    setError("")
                }, 5000)
            } else {
                const response = await fetch(url, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(requestBody),
                });
                const data = await response.json();
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000)
                partner.name = ""
                partner.email = ""
                partner.number = ""
                partner.message = ""
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className=''>
            <MetaTag title="Contact Us" />
            <div className='flex justify-center items-center contact-hero'>
                <p className='text-white text-[40px] font-[500] recoletafont'>Contact Us</p>
            </div>
            <div className='text-center my-[50px]'>
                <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>How can we make your experience with us better?</h1>
                <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
                    Our consultants are always available to help you with whatever you need.
                </p>
            </div>
            {/* <div className="flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8230288001123!2d6.999106617090918!3d4.8004182326243505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce9e9cf9947b%3A0xe3142ce21290f643!2s21%20Bekwere%20Wosu%20St%2C%20Woji%20500261%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1681094166074!5m2!1sen!2sng" width="1000" height="600" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            <div className="flex justify-between flex-col-reverse xl:flex-row px-[20px] xl:px-[150px] my-[50px] 2xl:w-[1440px] gap-[150px] mx-auto">
                <div>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[20px] sm:mt-[4px] text-blue-1000'>Send us a Message</h1>
                    <p className='manropefont text-[19px] leading-[36px] font-[400] text-gray-1000 w-full lg:w-[500px]'>
                        Your reliable one-stop shop for securing your ticket to better opportunities.
                    </p>
                    <form className='w-[100%] xl:w-[500px] text-left recoletafont pt-[20px]' onSubmit={handleSubmit}>
                        <div className="form-group flex flex-col my-5">
                            <label
                                htmlFor="name"
                                className="mb-2 text-blue-1000 text-[16px] font-[500]"
                            >
                                Full Name
                            </label>
                            <Input
                                className="h-[50px] sm:h-[56px] text-[16px] md:text-[16px]"
                                name="name"
                                type="text"
                                value={partner.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="form-group flex flex-col my-5">
                            <label
                                htmlFor="email"
                                className="mb-2 text-blue-1000 text-[16px] font-[500]"
                            >
                                Email Address
                            </label>
                            <Input
                                className="h-[50px] sm:h-[56px] text-[16px] md:text-[16px]"
                                name="email"
                                type="text"
                                value={partner.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group flex flex-col my-5">
                            <label
                                htmlFor="number"
                                className="mb-2 text-blue-1000 text-[16px] font-[500]"
                            >
                                Phone Number
                            </label>
                            <Input
                                className="h-[50px] sm:h-[56px] text-[16px] md:text-[16px]"
                                name="number"
                                type="text"
                                value={partner.number}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group flex flex-col mt-6">
                            <label
                                htmlFor="message"
                                className="mb-2 text-blue-1000 text-[16px] font-[500]"
                            >
                                Message
                            </label>
                            <MessageArea
                                className="h-[220px] md:h-[209px] mb-2 text-[14px]  md:text-[16px] relative"
                                name="message"
                                value={partner.message}
                                onChange={handleChange}
                                placeholder="Type your message here..."
                            ></MessageArea>
                        </div>
                        <p className='text-red-400'>{error}</p>
                        {success && <p className='text-green-500'>Sent</p>}
                        <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont w-[100%] mt-[20px]'>Talk to Us</Button>
                    </form>
                </div>
                <div>
                    <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[20px] sm:mt-[4px] text-blue-1000'>Contact Details</h1>
                    <div className='flex items-center mt-[30px]'>
                        <div className='pt-[24px] w-[35px] h-[35px] relative'>
                            <Image src='/assets/mail.png' fill={true} className='rounded-[12px]' alt=""></Image>
                        </div>
                        <a className='ml-[30px] manropefont text-[16px] sm:text-[18px] leading-[24px] font-[400] text-gray-1000' href='mailto:westgatemigrationservices@gmail.com'>info@greylane.ng</a>
                    </div>
                    <div className='flex items-center mt-[20px]'>
                        <div className='pt-[24px] w-[35px] h-[35px] relative'>
                            <Image src='/assets/work.png' fill={true} className='rounded-[12px]' alt=""></Image>
                        </div>
                        <p className='manropefont ml-[30px] text-[16px] sm:text-[18px] leading-[24px] font-[400] text-gray-1000'>MON - FRI : 9am - 5pm</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

const Input = styled.input`
  border: 1px solid #e3e8ef;
  padding-left: 14px;
    letter-spacing: 1.5px;
  outline: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray);
    font-family: 'Manrope', sans-serif;

  &:hover,
  &:focus {
    transition: all 0.1s ease-out;
    border: 1px solid #eaecf0;		
    box-shadow: 0px 0px 0px 4px var(--blueThree);
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--neutal-400);
  }
`;
const Button = styled.button`
outline:none;
padding: 15px 30px;
border-radius: 52px;
font-weight:500;
`
const MessageArea = styled.textarea`
	border: 1px solid #e3e8ef;
	padding: 10px;
	outline: none;
	border-radius: 12px;
	overflow-y: scroll;
    font-family: 'Manrope', sans-serif;
    letter-spacing: 1.5px;
    color: var(==gray);
	resize: none;

	&::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: var(--gray);
	}

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;
	&:hover,
	&:focus {
		box-shadow: 0px 0px 0px 4px var(--blueThree);
		transition: all 0.1s ease-out;
	}
`;
