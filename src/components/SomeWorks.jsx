import React from "react";
import { motion } from "framer-motion";
const SomeWorks = ({ mywork }) => {
  return (
    <div
      ref={mywork}
      className="flex flex-col max-w-[1200px] mx-auto mt-[100px] px-7 mb-6"
    >
      <div className="max-w-[668px] block pb-12">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient2 font-SatoshiBold font-bold bg-clip-text text-[30px] xl:text-[40px]"
        >
          Some of my work
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight text-base text-wrap max-w-[650px]  "
        >
          A brief look into some selected works
        </motion.p>
      </div>
      <div className=" max-w-[1124px] mx-auto justify-center ">
        <div className=" flex flex-col justify-center sm:flex-row lg:flex-row xl:flex-row gap-9 mb-11">
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
            className=""
          >
            <img
              src="images\imageOne.png"
              className=" rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex justify-between items-center pt-3">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Discite E-learning (Case study)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  E-learning
                </span>
              </p>
            </div>
          </motion.div>
          <motion.a
            href="/tdbizz"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" items-center"
          >
            <img
              src="\images\imageTwo.png"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex gap-6 xl:gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                TDBizz multipurpose (Showcase)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Commerce. Ride. Services - UI/UX
                </span>
              </p>
            </div>
          </motion.a>
        </div>
        <div className=" flex flex-col justify-center sm:flex-row lg:flex-row xl:flex-row gap-9 mb-11">
          <motion.a
            href="/proattire"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            <img src="\images\imageThree.png" className=" rounded-xl" alt="" />
            <div className="flex gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Fashion marketplace (Case study)
                <br />
                <span className="text-[#fff] font-normal absolute text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Commerce - UI/UX
                </span>
              </p>
            </div>
          </motion.a>
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
            className=""
          >
            <img
              src="\images\imageFour.jpg"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px] max-h-[490px]"
              alt=""
            />
            <div className="flex justify-between items-center pt-3">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Tradepla (Showcase)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Fintech -UI/UX
                </span>
              </p>
            </div>
          </motion.div>
        </div>
        <div className=" flex flex-row gap-9 mt-11">
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
            className=""
          >
            <img
              src="\images\imageFive.png"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                People - Equity & Law
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  SaaS - UI/UX
                </span>
              </p>
              <a
                href=""
                className=" border-[#282B46] border text-center rounded-full justify-center items-center flex font-SatoshiLight text-nowrap py-2 px-5"
              >
                comming soon
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SomeWorks;
