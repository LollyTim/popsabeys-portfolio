import { motion } from "framer-motion";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const MobileNav = ({ handleNav, scrollToSection, mywork }) => {
  return (
    <div className=" absolute top-0 z-[3000px]">
      <motion.div
        initial={{ x: -100, opacity: 0.11 }}
        whileInView={{ x: 0, opacity: 3 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className={
          "flex shadow-sm flex-col w-full gap-5 items-center h-96 fixed  z-50  px-4 py-4 pb-8 text-[24px] overflow-hidden font-medium text-[#B5C8F0] bg-[#030623]"
        }
      >
        <div className="flex w-full justify-between h-18 py-3 px-5 items-center overflow-hidden">
          <img src="/images/logo.svg" alt="logohere" />
          <AiOutlineClose
            onClick={handleNav}
            className="cursor-pointer"
            size={25}
          />
        </div>
        <div className="w-[90%] justify-center mx-auto flex flex-col items-center overflow-hidden gap-5">
          <a
            href="/uishowcase"
            target="_self"
            className="p-2 w-fit hover:bg-[#010314] justify-center overflow-hidden items-center mx-auto rounded-lg transition-colors"
          >
            UI showcase
          </a>
          <button
            onClick={() => {
              scrollToSection(mywork, "/");
              handleNav();
            }}
            href=""
            target="_self"
            className="p-2 w-fit justify-center items-center hover:bg-[#010314] rounded-lg overflow-hidden transition-colors"
          >
            Projects
          </button>
          {/* <a
            href="/business"
            className="p-2 text-nowrap overflow-hidden w-fit justify-center items-center hover:bg-[#010314] rounded-lg transition-colors"
          >
            Business optimizer
          </a> */}
          <a
            href="/contact"
            target="_self"
            className="p-2 text-nowrap overflow-hidden w-fit justify-center items-center hover:bg-[#010314] rounded-lg transition-colors"
          >
            contact
          </a>
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
              rel="noreferrer"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center mx-auto  "
            >
              <FaTiktok size={25} />
            </a>
            <a
              href="https://www.instagram.com/popsabey"
              target="_blank"
              rel="noreferrer"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.twitter.com/popsabey"
              target="_blank"
              rel="noreferrer"
              className=" w-10 h-10 border rounded-full flex border-[#282B46] justify-center items-center"
            >
              <BsTwitterX size={23} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
