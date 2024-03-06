import React from "react";
import { easeInOut, motion } from "framer-motion";

const WhatIdo = () => {
  return (
    <div className="flex lg:justify-start justify-center w-full items-center lg:items-start flex-col  lg:max-w-[1200px] mx-auto mt-[100px] px-7">
      <div className="max-w-[668px] flex flex-col justify-center items-center lg:items-start pb-12 ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient2 font-SatoshiBold font-bold bg-clip-text text-[22px]  lg:text-[40px] text-center justify-center items-center"
        >
          I help businesses improve via
        </motion.h1>
        {/* <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight text-base text-wrap max-w-[650px] text-center lg:text-start  "
        >
          From Product Design to Identity Design to Pitch Deck Design etc., your
          project is in great hands
        </motion.p> */}
      </div>
      <div className="w-[90%] lg:w-full justify-center lg:justify-start grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:items-start items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: easeInOut,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-[1px] justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-[19px] overflow-hidden text-nowrap">
            Product Design
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
            delay: 0.2,
          }}
          className="px-2 py-3 justify-center w-[100%] lg:py-8  lg:max-w-[288px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-md xl:text-xl text-nowrap ">
            Customer Success Strategy
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
            delay: 0.3,
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Product Redesign
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Landing Page
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0.1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX Research
          </p>
        </motion.div> */}
      </div>
      {/* second line here */}
      <div className="w-[90%] lg:w-[80%] justify-center lg:justify-center mt-6 grid grid-cols-1 sm:grid-cols-3 lg:flex xl:flex gap-5 lg:items-center items-center text-center lg:mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px]  border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX Research
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Website Review
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.7,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center w-[100%] lg:max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Web Development
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIdo;
