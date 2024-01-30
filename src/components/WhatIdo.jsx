import React from "react";
import { easeInOut, motion } from "framer-motion";

const WhatIdo = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto mt-[100px] px-7">
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
          className="gradient2 font-SatoshiBold font-bold bg-clip-text text-[40px]"
        >
          What I do
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
          From Product Design to Identity Design to Pitch Deck Design etc., your
          project is in great hands
        </motion.p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: easeInOut,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Product (UI/UX) Design
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
            delay: 0.2,
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX/CX Strategy
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
            delay: 0.3,
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Brand Identity Design
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Pitch Deck Design
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center  items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Project Management
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Video Ad
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.7,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Web Development
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            x: { type: "inertia", bounceStiffness: 30 },
          }}
          className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg border-[#282B46] text-center items-center"
        >
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX Researcher
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIdo;
