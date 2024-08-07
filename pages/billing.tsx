"use client";

import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useModals } from "../components/useModal"
import ShowOrderModal from "../components/show-order";
import { numberWithCommas } from "@/components/helpers/numberWithCommas";
// import { Book } from "./utils";

const Billing = () => {
    const [selectedItem, setSelectedItem] = useState({
        name: "",
        price: "",
        image: ""
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    function add100Dollars(input: string) {
        // Extracting the numerical part of the input string
        const numericalPart = parseFloat(input?.toString().replace(/[^\d.]/g, ""));

        // Adding 100 to the numerical part
        const result = numericalPart + (50000);

        // Formatting the result back to the original format
        const formattedResult = result.toFixed(2);
        const output = Number(formattedResult);

        return output;
    }

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const itemtobebought: any = localStorage.getItem("item")
            setSelectedItem(JSON.parse(itemtobebought))
        }
    }, [])

    // State to manage the disabled state of the button
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // State to manage form field values
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [cardCVC, setCardCVC] = useState("");

    useEffect(() => {
        // Function to check if all form fields are filled
        const checkFormValidity = () => {
            if (cardHolderName && cardNumber && expireDate && cardCVC) {
                setIsButtonDisabled(false); // Enable the button if all fields are filled
            } else {
                setIsButtonDisabled(true); // Disable the button if any field is empty
            }
        };

        checkFormValidity();
    }, [cardHolderName, cardNumber, expireDate, cardCVC]);

    // Event handlers to update form field values and check validity
    const handleCardHolderNameChange = (
        e: { target: { value: SetStateAction<string>; }; }
    ) => {
        setCardHolderName(e.target.value);
    };

    const handleCardNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCardNumber(e.target.value);
    };

    const handleExpireDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setExpireDate(e.target.value);
    };

    const handleCardCVCChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCardCVC(e.target.value);
    };

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

            <section className="relative p-10 md:px-[130px] md:pb-[130px] flex flex-col lg:flex-row gap-8 items-center lg:items-start w-full justify-center">
                <div className="flex flex-col gap-8 items-start w-full justify-center lg:pr-8 lg:border-r">
                    <div className="flex flex-col gap-2.5 text-[#181616] items-start justify-center lg:w-[720px]">
                        <h2 className="text-[32px] font-medium">User details</h2>
                    </div>

                    <div className="w-full lg:w-[720px]">
                        <form className="mx-auto w-full flex flex-col gap-5">
                            <div className="flex flex-col w-full gap-5 md:flex-row">
                                <input
                                    type="text"
                                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Phone"
                                required
                            />

                            <input
                                type="email"
                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Email Address"
                                required
                            />
                            <input
                                type="date"
                                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] rounded-md"
                                placeholder="Date"
                                required
                            />
                        </form>

                        <div className="flex flex-col gap-5 mt-10 text-[#181616] items-start justify-center lg:w-[720px]">
                            <h2 className="text-[32px] font-medium">Additional Details</h2>

                            <textarea
                                id="message"
                                rows={7}
                                className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300 rounded-md"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <p className="pt-[20px] text-[#161616] font-normal text-[16px] text-left">
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

                <div className="flex flex-col gap-[15px] items-start w-full justify-center">
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
                            <h4 className="text-[#707070] uppercase font-medium text-[13px]">
                                Booking Fee service charge
                            </h4>
                            <h4 className="text-[#161616] font-medium text-[16px]">
                            ₦50,000.00
                            </h4>
                        </div>
                        <div className="flex items-center justify-between py-[15px] w-full">
                            <h4 className="text-[#707070] font-medium text-[13px]">TOTAL</h4>
                            <h4 className="text-blue-1100 font-bold text-[28px]">
                            ₦{numberWithCommas(add100Dollars(selectedItem?.price))}
                            </h4>
                        </div>
                    </div>

                    <form>
                        <div className="flex flex-wrap gap-3 w-full pt-[50px]">
                        <h2 className="text-[32px] font-medium">Card Details</h2>
                            <label className="relative w-full flex flex-col">
                                <span className="font-bold mb-3">Card holder{"'"}s name</span>
                                <input
                                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                    type="text"
                                    name="card_holders_name"
                                    placeholder="JOHN DOE"
                                    required
                                    value={cardHolderName}
                                    onChange={handleCardHolderNameChange}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </label>

                            <label className="relative w-full flex flex-col">
                                <span className="font-bold mb-3">Card number</span>
                                <input
                                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                    type="text"
                                    name="card_number"
                                    required
                                    placeholder="0000 0000 0000"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </label>

                            <div className="w-full flex gap-5 flex-col lg:flex-row">
                                <label className="relative w-full lg:flex-1 flex flex-col">
                                    <span className="font-bold mb-3">Expire date</span>
                                    <input
                                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                        type="text"
                                        name="expire_date"
                                        required
                                        placeholder="MM/YY"
                                        value={expireDate}
                                        onChange={handleExpireDateChange}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </label>

                                <label className="relative w-full lg:flex-1 flex flex-col">
                                    <span className="font-bold flex items-center gap-3 mb-3">
                                        CVC/CVV
                                        <span className="relative group">
                                            <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                                                The 3 digit number on the back of your card
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <input
                                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                        type="text"
                                        name="card_cvc"
                                        required
                                        placeholder="&bull;&bull;&bull;"
                                        value={cardCVC}
                                        onChange={handleCardCVCChange}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>

                        <p className="text-[#707070] mt-[20px] font-normal text-[13px]">
                            Note: Fee charged is decided by the specific type service, and
                            based on service demand. It may be lesser or higher.
                        </p>

                        <button
                            type="submit"
                            disabled={isButtonDisabled}
                            onClick={handleSubmit}
                            className={`group gap-[8px] mt-[30px] w-[100%] text-center text-[16px] sm:text-[24px] rounded-full font-body bg-white text-blue-1100 ${!isButtonDisabled && 'hover:bg-blue-1100 hover:text-white'} px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-blue-1100 transition-one`}>
                            Place Order
                        </button>
                    </form>
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
