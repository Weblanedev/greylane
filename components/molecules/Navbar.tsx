import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import DropdownArrow from "../atoms/icons/DropdownArrow";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [headertransparent, setHeaderTransparent] = useState<boolean>(true)
    const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    })
    useEffect(() => {
        const header = document.querySelector(".header");
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                header?.classList.remove("scroll");
                header?.classList.add("scrolls");
            } else {
                header?.classList.add("scroll");
                header?.classList.remove("scrolls");
            }

            if (currentScrollPos < 1) {
                header?.classList.add("scrolls");
                header?.classList.remove("scroll");
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("resize", function () {
            header?.classList.add("scrolls");
            header?.classList.remove("scroll");
        });
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll > 0) {
                setHeaderTransparent(false)
            } else {
                setHeaderTransparent(true)
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    return (
        <>
            <NavbarMenu className="flex z-50 bg-transparent pt-[10px] pb-[10px] lg:py-0 px-[20px] xl:px-[80px] justify-between items-center z-60 fixed w-[100vw] header" headertransparent={headertransparent}>
                {" "}
                {/*bg-[#e1e1e1] */}
                <Link href="/">
                    <div className="w-[109px] h-[50px] relative mb-[24px]">
                    <h1 className="text-white text-[40px] font-[500] recoletafont">Greylane</h1>
                        {/* <Image src="/assets/logowest-removebg-preview.png" height={50} width={80} alt="Red Triangle" className='' /> */}
                    </div></Link>
                <NavbarToggle
                    className=" sm:mr-[20px] relative z-[100] lg:hidden"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <Bar className={isMenuOpen ? "translate-y-2 rotate-45 " : ""}></Bar>
                    <Bar className={isMenuOpen ? "opacity-0 " : ""}></Bar>
                    <Bar className={isMenuOpen ? "-translate-y-2 -rotate-45 " : ""}></Bar>
                </NavbarToggle>
                <ul className="hidden lg:flex text-center manropefont">
                    <Link href="/">
                        <List >Home</List>
                    </Link>
                    <Link href="/about-us">
                        <List >About</List>
                    </Link>
                    <Link href="/vacation-packages">    <List>Vacation Packages</List></Link>

                </ul>
                <Link href="/contact-us" className="hidden lg:flex">
                    <Button>Contact Us</Button>
                </Link>
            </NavbarMenu>
            {isMenuOpen && <MobileMenu setMenuOpen={setMenuOpen}></MobileMenu>}
        </>
    );
};

export default Navbar;

const List = styled.li`
  padding: 30px 30px;
  color: white;
  opacity: 0.6;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: white;
    opacity:1;
  }

  @media screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
`;
const SubList = styled.li`
  padding: 12px 40px;
  text-align: center;
  color: var(--blue);
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: var(--blue);
    color: white;
  }
`;
const NavbarToggle = styled.div`
  cursor: pointer;
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: white;
  display: block;
  cursor: pointer;
`;

const Button = styled.button`
color: white;
padding: 16px 40px;
background: rgba(255, 255, 255, 0.1);
box-shadow: 2px 2px 2px rgba(114, 129, 167, 0.04);
border-radius: 70px;
`
const NavbarMenu = styled.nav<{ headertransparent: boolean }>`
    background: ${({ headertransparent }) => headertransparent ? 'transparent' : 'black'};
`