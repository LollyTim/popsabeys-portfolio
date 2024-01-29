import React from "react";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className=" mt-7 py-12 px-10 items-center max-w-[1199px] mx-auto  bg-[#0F1123] rounded-xl"
    >
      <motion.p
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          delay: 1.2,
          y: { type: "spring", stiffness: 40 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" tect-[#fff] text-center mx-auto font-normal text-base max-w-[680px] font-SatoshiLight"
      >
        Hi, I am Abiodun, with 5 years experience designing digital experience
        and overall 8 years of helping brands achieve goals with
        experience-centric designs. Here are some of the brands I have worked
        with over the years.
      </motion.p>
      <div className=" overflow-hidden flex text-center flex-wrap items-center justify-center gap-9 opacity-50">
        <motion.img
          src="\images\tradepla.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{
            delay: 1.2,
            y: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/proattier.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{
            delay: 1.2,
            y: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/datacastleng.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{
            delay: 1.2,
            y: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/tdbzz.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{
            delay: 1.2,
            y: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/foodyours.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
      </div>
    </motion.div>
  );
};

export default Trust;
