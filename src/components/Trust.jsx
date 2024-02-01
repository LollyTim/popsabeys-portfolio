import React from "react";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }}
      className=" mt-7 py-6 px-6 items-center gap-6 flex flex-col max-w-[1199px] mx-auto  bg-[#0F1123] rounded-xl"
    >
      <motion.p
        initial={{ x: -50 }}
        viewport={{ once: true }}
        whileInView={{ x: 0 }}
        transition={{
          delay: 1.2,
          x: { type: "spring", stiffness: 40 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" tect-[#fff] text-center mx-auto text-2xl font-normal max-w-[930px] font-SatoshiLight"
      >
        Hi, I am Abiodun, with 5 years experience designing digital experience
        and overall 8 years of helping brands achieve goals with
        experience-centric designs. Here are some of the brands I have worked
        with over the years.
      </motion.p>
      <div className=" overflow-hidden flex text-center flex-wrap items-center justify-center gap-9 opacity-50">
        <motion.img
          // initial={{ y: -30 }}
          // whileInView={{ y: 0 }}
          // transition={{
          //   delay: 1.2,
          //   y: { type: "spring", stiffness: 40 },
          //   ease: "easeIn",
          //   duration: 1,
          // }}
          src="\images\tradepla.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.2,
            x: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/proattier.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-[160px]"
        />
        <motion.img
          initial={{ x: -30 }}
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          transition={{
            delay: 1.2,
            x: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/datacastleng.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-[260px]"
        />
        <motion.img
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.2,
            x: { type: "spring", stiffness: 40 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/tdbzz.png"
          alt=""
          className=" w-32 max-[400px]:w-24 lg:w-48"
        />
        <motion.img
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.2,
            x: { type: "spring", stiffness: 40 },
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
