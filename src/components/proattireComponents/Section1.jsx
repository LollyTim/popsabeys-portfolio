import { motion } from "framer-motion";
import React from "react";
import ScrollToTop from "react-scroll-up";
import { FaArrowCircleUp } from "react-icons/fa";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-col justify-between mt-[96px] max-w-[1199px] h-[260px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold text-3xl text-[#fff]">
              Proattire: Fashion marketplace
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff]">
              E-Commerce{" "}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Web and Mobile app
            </span>
          </div>
        </div>
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit mt-[72px]"
      >
        <img src="\images\iPadimg.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] gap-[76px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
        >
          Introduction
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          Proattire is making fashion, retail fashion accessible to people while
          also promoting the fashion creator economy by providing an accessible
          and easy-to-use in-route to the fashion market for fashion creators by
          leveraging technology.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-row py-14 px-12 max-w-[1002px] gap-16 mx-auto  max-[768px]:gap-12 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            The challenge was to find how best to make the fast growing retail
            fashion in Africa more accessible leveraging technology as the
            enabler for this.
          </p>
          <br />
          <p> We had few goals:</p>
          <ul className=" list-disc list-inside">
            <li className="">
              Provide buyers access to varieties (in terms of product & pricing)
            </li>
            <li>
              {" "}
              Leverage available and familiar means to provide this access
              Create
            </li>
            <li> avenue for upcoming creators for easy entry into market</li>
          </ul>
        </div>
        <h1 className="gradient  max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
          Challenge
        </h1>
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\mens.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] gap-[76px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col mt-8 ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6 mb-10"
        >
          Research
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          We uncover some vital purchase and technology accessibility data that
          further solidified the pre-formed insights gotten from the qualitative
          research.
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className="flex flex-row py-7 px-12 max-w-[1002px] h-fit justify-center items-center gap-[126px] max-[768px]:gap-5 mx-auto max-[768px]:flex-col-reverse mt-8 ">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal pr-8 text-base leading-6 max-w-[590px] items-center"
        >
          Percentage of target market with a smartphone in Nigeria, indicating a
          large growing market that is projected to grow to 140 million on a 66%
          population according to Statista.
        </motion.p>
        <motion.img
          src="\images\pichat.png"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-10"
        />
      </div>
      <div className="flex flex-row py-14 px-12 max-w-[1002px] h-fit justify-center items-center gap-[61px] max-[768px]:gap-6 mx-auto max-[768px]:flex-col  ">
        <motion.img
          src="\images\barChat.png"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-10"
        />
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight justify-center font-normal pr-8 text-base leading-6 max-w-[590px] items-center"
        >
          Percentage of target market with a smartphone in Nigeria, indicating a
          large growing market that is projected to grow to 140 million on a 66%
          population according to Statista.
        </motion.p>
      </div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\completeChat.png" alt="chat" />
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit max-[786px]:max-w-96 px-8"
      >
        <img src="\images\completeBarchat.png" alt="chat" />
      </motion.div>

      {/* another section starts here  */}

      <Section2 />
    </>
  );
};

export default Section1;
