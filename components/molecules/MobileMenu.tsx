import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import navmenu from "../../data/navmenu";
import DropdownArrow from "../atoms/icons/DropdownArrow";

const MobileMenu = ({ setMenuOpen }: any) => {
    const [isMobileAnimate, setisMobileAnimate] = useState(false)
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    return (
        <div
            className="bg-accents-two fixed z-20 h-[100vh] lg:hidden bg-transparent  w-[100%] translate-y-0 pt-[0px]"
        >
            <div className="flex flex-col px-[20px] h-screen pt-[80px] bg-[#242424] lg:hidden">
                <ul className="flex flex-col cursor-pointer">
                    {navmenu.map((navs) => {
                        return (
                            <>
                                {
                                    navs.name === "Visa Consultation" ||
                                        navs.name === "Home" ||
                                        navs.name === "About" ||
                                        navs.name === "Flights" ||
                                        navs.name === "Vacation Packages" ||
                                        navs.name === "Contact Us"
                                        ? (
                                            <div
                                                key={navs.id}
                                                className={
                                                    isMobileAnimate
                                                        ? "isModalActive opacity-0 relative"
                                                        : "isModalNotActive relative"
                                                }

                                                onMouseLeave={() =>
                                                    navs.name === "Visa Consultation" && setSubMenuOpen(false)
                                                }
                                            >
                                                {
                                                    navs.name === "Visa Consultation" ?
                                                        (
                                                            <NavLinks onClick={() => setSubMenuOpen(true)} className="flex">{navs.name}                        <DropdownArrow className="ml-[10px] mt-[10px]"></DropdownArrow></NavLinks>
                                                        ) : (
                                                            <Link href={navs.link}>
                                                                <NavLinks onClick={() => setMenuOpen(false)} className="">{navs.name}</NavLinks>
                                                            </Link>
                                                        )
                                                }
                                                {isSubMenuOpen && navs.subLinks && navs.name === "Visa Consultation" && (
                                                    <div
                                                        className={`sub-nav-menu relative rounded-xl py-2 pl-6 mb-6 w-[100%] bg-accents-two ${isSubMenuOpen ? "fadein" : "fadeout"
                                                            }`}
                                                    >
                                                        {navs.subLinks.map((item) => (
                                                            <Link href={item.subLink} key={navs.name}>
                                                                <NavLinks
                                                                    onClick={() => setMenuOpen(false)}
                                                                    className="w-full py-[8px] pl-[20px] pr-1 cursor-pointer"
                                                                >
                                                                    {item.name}
                                                                </NavLinks>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <NavLinks
                                                key={navs.id}
                                                className={
                                                    isMobileAnimate
                                                        ? "isModalActive opacity-0"
                                                        : "isModalNotActive"
                                                }
                                            >
                                                {navs.name}
                                            </NavLinks>
                                        )}
                                <NavLinksBorder
                                    className={
                                        isMobileAnimate
                                            ? "isModalActiveBorderLine"
                                            : "isModalNotActiveBorderLine"
                                    }
                                ></NavLinksBorder>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
const NavLinks = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: white;
  padding: 25px 0;
font-family: 'Manrope', sans-serif;
    letter-spacing: 1px;
  z-index:10;
`;
const NavLinksBorder = styled.div``;

const Btn = styled.div`
  width: 100%;
`;
