import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className=" xl:w-[50%] w-[85%] justify-center items-center mx-auto mt-[100px] gap-4 min-h-fit overflow-hidden mb-40">
        <motion.div
          className="gradBorder mx-auto p-[1px] items-center w-fit text-center rounded-full mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="flex font-SatoshiLight text-sm bg-[#0B0F2A] mx-auto py-2 px-5 items-center w-fit text-center rounded-full">
            I am eager to hear what you’re working on
          </p>
        </motion.div>
        <motion.div
          className="w-full flex justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <motion.p className="gradient text-center  w-[689px] font-bold text-3xl xl:text-5xl xl:leading-normal">
            {/* I design high-converting landing pages, SaaS tools & mobile apps */}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" w-fit mt-6 items-center justify-center mx-auto"
        >
          <p className="text-center lg:max-w-[557px] max-w-[300px] justify-center text-base font-normal font-SatoshiLight ">
            Do you have a new idea you want to build? Or you want to re-optimize
            your product to maximize conversion - I’ll like to hear more about
            your project
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            y: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" w-fit mt-10 items-center justify-center mx-auto font-SatoshiLight font-normal leading-7"
        >
          <button className="bg-[#4952E4] py-3 px-8 rounded-[5px] ">
            <a href="mailto: popsabey.ux@gmail.com">Reach out to me</a>
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 40 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" mx-auto max-[360px]:w-[335px] max-[430px]:w-[370px] sm:w-[600px] lg:w-[800px] xl:w-[1200px] flex mb-32"
      >
        <img src="/images/Rectangle.png" alt="" />
      </motion.div>
    </>
  );
};

export default Hero;
