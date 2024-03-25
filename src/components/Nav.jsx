import React, { useState } from "react";
// import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import BackDrop from "./BackDrop";
import MobileNav from "./MobileNav";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Nav = ({ scrollToSection, mywork, contact }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" w-full bg-[#010314] h-20 flex justify-center items-center backdrop-blur-lg">
        <div className=" flex z-[1000px] justify-between items-center w-[85%] mx-auto  bg-[#010314] relative overflow-hidden">
          <div className="">
            <a href="/">
              <motion.img
                src="/images/logo.svg"
                alt=""
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
              />
            </a>
          </div>
          <motion.div
            className=" flex text-[#FFF] items-center space-x-8 text-sm font-normal max-[640px]:hidden font-SatoshiLight "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <a href="/uishowcase">UI showcase</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <circle
                cx="2.5"
                cy="3"
                r="2.25"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
            <a
              className=" cursor-pointer"
              onClick={() => {
                scrollToSection(mywork, "/");
                // handleNav();
              }}
            >
              Projects
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <circle
                cx="2.5"
                cy="3"
                r="2.25"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
            <a href="/business" className=" cursor-pointer">
              Business optimizer
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <circle
                cx="2.5"
                cy="3"
                r="2.25"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
            <a className=" cursor-pointer" href="/contact">
              Contact
            </a>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-[#fff] max-[640px]:hidden items-center flex gap-1 py-2 px-3 font-SatoshiLight font-medium"
          >
            <a
              href="https://www.tiktok.com/@popsabey_"
              target="_blank"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center mx-auto  "
            >
              <FaTiktok size={25} />
            </a>
            <a
              href="https://www.instagram.com/popsabey"
              target="_blank"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.twitter.com/popsabey"
              target="_blank"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center"
            >
              <BsTwitterX size={23} />
            </a>
          </motion.div>
          <button
            onClick={handleNav}
            size={25}
            className="lg:hidden text-[#fff] flex max-[640px]:flex text-lg"
          >
            <img src="/images/menu.svg" alt="menu" />
          </button>
        </div>
      </div>

      {/* mobile navigation from here  */}

      {nav ? (
        <MobileNav
          handleNav={handleNav}
          scrollToSection={scrollToSection}
          mywork={mywork}
          contact={contact}
        />
      ) : null}
      {nav ? <BackDrop handleNav={handleNav} /> : null}
    </>
  );
};

export default Nav;
