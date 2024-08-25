"use client";

import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useModals } from "../components/useModal";
import ShowOrderModal from "../components/show-order";
import { numberWithCommas } from "@/components/helpers/numberWithCommas";

const Billing = () => {
    const [selectedItem, setSelectedItem] = useState({
        name: "",
        price: "",
        image: ""
    });
    const router = useRouter()
    const [priceOutput, setPriceOutput] = useState(0);
    const [cardProfile, setCardProfile] = useState({
        firstName: "",
        phone: "",
        lastName: "",
        email: "",
        date: "",
    });

    const handleCardProfile = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardProfile({
            ...cardProfile,
            [name]: value
        });
    };



    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const itemToBeBought: any = localStorage.getItem("item");
            setSelectedItem(JSON.parse(itemToBeBought));
        }
    }, []);

    useEffect(() => {
        // Compute the output price based on the selected item's price
        if (selectedItem?.price) {
            const computedAmount = add100Dollars(selectedItem.price);
            setPriceOutput(computedAmount);
        }
    }, [selectedItem]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [])

    function payKorapay() {
        if ((window as any).Korapay) {
            (window as any).Korapay.initialize({
                key: process.env.NEXT_PUBLIC_KORA_CHECKOUT_PUBLIC_KEY,
                reference: "",
                amount: priceOutput,  
                currency: "NGN",
                customer: {
                    name: cardProfile.firstName,
                    email: cardProfile.email
                },
                notification_url: "https://example.com/webhook",
                onSuccess: (response:any) => {
                    console.log("Payment Successful:", response);
                },
                onFailed: (error:any) => {
                    console.log("Payment Error:", error);
                },
                onClose: () => {
                    console.log("Payment Popup Closed");
                    router.push("/")
                    
                }
            });
        } else {
            console.error("Korapay script not loaded");
        }
    }
    
    function add100Dollars(input: string) {
        const numericalPart = parseFloat(input?.toString().replace(/[^\d.]/g, ""));
        const result = numericalPart + (50000);
        const formattedResult = result.toFixed(2);
        const output = Number(formattedResult);
        return output;
    }

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {
        const isFilledForm = cardProfile.email && cardProfile.firstName;
        setIsButtonDisabled(!isFilledForm);
    }, [cardProfile]);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        toggleShowInvoiceModal();
    };

    const showInvoice = useModals(["showInvoice"]);
    function toggleShowInvoiceModal() {
        showInvoice.toggleModal("showInvoice");
    }

    return (
        <div>
            <div className='flex justify-center items-center vacation-hero'>
                <p className='text-white text-[60px] text-center font-[500] recoletafont'>Book Your Trip</p>
            </div>
            <section className="relative h-[250px] md:h-[300px]">
                <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                    <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left leading-snug md:leading-[62px] text-center text-orange-950">
                        Trip Details
                    </h1>
                    <p>Complete your details and make payments</p>
                </div>
            </section>

            <section className="relative lg:p-0  md:px-[130px] md:pb-[130px] flex flex-col lg:flex-row gap-8 items-center lg:items-start w-[100%]  mx-auto justify-center">
                <div className="flex flex-col gap-8 items-start w-full justify-center lg:pr-8 lg:border-r">
                    <div className="flex flex-col gap-2.5 text-[#181616] lg:items-start items-center  w-full mx-auto justify-center lg:w-[86%]">
                        <h2 className="text-[32px]  font-medium">User details</h2>
                    </div>

                    <div className="w-full lg:w-[720px]">
                        <form className="mx-auto w-[86%] mx-auto flex flex-col gap-5">
                            <div className="flex flex-col w-full gap-5 md:flex-row">
                                <input
                                    type="text"
                                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                    placeholder="First Name"
                                    required
                                    value={cardProfile.firstName}
                                    onChange={handleCardProfile}
                                    name="firstName"
                                />
                                <input
                                    type="text"
                                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                    placeholder="Last Name"
                                    required
                                    value={cardProfile.lastName}
                                    onChange={handleCardProfile}
                                    name="lastName"
                                />
                            </div>

                            <input
                                type="tel"
                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Phone"
                                required
                                value={cardProfile.phone}
                                onChange={handleCardProfile}
                                name="phone"
                            />

                            <input
                                type="email"

                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Email Address"
                                required
                                value={cardProfile.email}
                                onChange={handleCardProfile}
                                name="email"
                            />
                            <input
                                type="date"
                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Date"
                                required
                                onChange={handleCardProfile}
                                name="date"
                                value={cardProfile.date}
                            />

                        </form>


                        <div className="flex flex-col  w-[90%] mx-auto gap-5 mt-6 text-[#181616] lg:items-start items-center  justify-center lg:w-[86%] mx-auto">
                            <h2 className="text-[32px] font-medium">Additional Details</h2>

                            <textarea
                                id="message"
                                rows={7}
                                className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300 rounded-md"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                      
                        <div className="w-[86%] mx-auto">
                            <p className="pt-[20px] lg:pb-10  text-[#161616] font-normal text-[16px] text-left">
                                Note: Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our{" "}
                                <Link
                                    href="#"
                                    className="text-blue-1100 cursor-pointer"
                                >
                                    privacy policy.
                                </Link>
                            </p>
                        </div>


                    </div>
                </div>

                <div className="flex xl:pr-20 flex-col gap-[15px] items-start w-[80%] lg:w-[60%]  mx-auto justify-center">
                    <h2 className="text-[32px] font-medium">
                        Trip Breakdown
                    </h2>

                    <div className="flex mt-[-5px] flex-col items-center justify-center w-full">
                        <div className="flex items-center justify-between py-[15px] w-full border-b">
                            <h4 className="text-[#707070] font-medium text-[13px]">
                                PRODUCT
                            </h4>
                            <h4 className="text-[#707070] font-medium text-[13px]">
                                SUBTOTAL
                            </h4>
                        </div>
                        <div className="flex items-center justify-between py-[15px] w-full border-b">
                            <h4 className="text-[#161616] font-medium text-[16px] leading-5 upperc ase w-[350px]">
                                {selectedItem?.name}
                            </h4>
                            <h4 className="text-[#161616] font-medium text-[16px]">
                                ₦{numberWithCommas(Number(selectedItem?.price))}.00
                            </h4>
                        </div>
                        <div className="flex items-center justify-between py-[15px] w-full border-b">
                            <h4 className="text-[#707070] lg:text-[1.2vw] text-[3vw] uppercase font-medium text-[13px]">
                                Booking Fee service charge
                            </h4>
                            <h4 className="text-[#161616] font-medium text-[16px]">
                                ₦50,000.00
                            </h4>
                        </div>
                        <div className="flex items-center justify-between py-[15px] w-full">
                            <h4 className="text-[#707070] font-medium text-[13px]">TOTAL</h4>
                            <h4 className="text-blue-1100 lg:text-[2vw] text-[4.8vw]  font-bold text-[28px]">
                                ₦{numberWithCommas(priceOutput)}.00
                            </h4>
                        </div>

                        <div className=" w-[80%] mx-auto">
                            <button
                                type="button"
                                disabled={isButtonDisabled}
                                onClick={payKorapay}
                                className={`group gap-[8px] mb-20 mt-[30px] w-full  text-center text-[16px] sm:text-[24px] rounded-full font-body bg-white text-blue-1100 ${!isButtonDisabled && 'hover:bg-blue-1100 hover:text-white'} px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-blue-1100 transition-one`}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ShowOrderModal
                show={showInvoice.modals.showInvoice.show}
                toggle={toggleShowInvoiceModal}
            />
        </div>
    );
};

export default Billing;
