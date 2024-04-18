import React, { useState } from 'react'
import styled from 'styled-components';

interface type {
    mutationType: string
}

const Form = ({ mutationType }: type) => {
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [partner, setPartner] = useState({
        name: "",
        email: "",
        number: "",
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
        };
        const requestBody = {
            mutations: [
                {
                    create: {
                        _type: mutationType,
                        ...userInfo
                    },
                },
            ],
        };

        try {
            if (partner.email === "" || partner.name === "" || partner.number === "") {
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
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form className='lg:w-[60%] text-left recoletafont' onSubmit={handleSubmit}>
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
                <p className='text-red-400'>{error}</p>
                {success && <p className='text-green-500'>Sent</p>}
                <Button className='text-white bg-blue-1100 text-[14px] sm:text-[16px] manropefont w-[100%] mt-[20px]'>Talk to Us</Button>
            </form>
        </div>
    )
}

export default Form

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
    box-shadow: 0px 1px 2px var(--blueThree);
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