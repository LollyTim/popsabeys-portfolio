import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className=" xl:w-[60%] w-[80%] justify-center items-center mx-auto mt-[100px] gap-4 min-h-fit overflow-hidden mb-20">
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
          <motion.p className="gradient text-center  w-[700px] font-bold text-2xl xl:text-5xl xl:leading-normal ">
            The design partner for startups and growing businesses
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
          className=" w-fit mt-10 item text-xl text-center justify-center mx-auto font-SatoshiLight font-normal leading-7"
        >
          <button className="bg-[#4952E4] py-3 px-8 rounded-[5px] ">
            <a href="mailto: popsabey.ux@gmail.com">Reach out to me</a>
          </button>
        </motion.div>
      </div>
      <div className="flex w-[90%] justify-center items-center mx-auto lg:mb-24 mb-20 gap-2 ">
        <div className="flex flex-col gap-2 w-32 lg:w-72 py-4 px-4 justify-center items-center ">
          <div className=" lg:text-7xl text-3xl font-semibold flex font-[oswald] lg:w-48 lg:h-32 text-center justify-center items-center">
            5+
          </div>
          <p className=" text-center text-[#6E6F71] text-[9px] lg:text-[16px] text-nowrap font-thin font-SatoshiLight">
            Years of experience
          </p>
        </div>
        <div className=" border-r-[1px] opacity-25 border-[#6E6F71] h-[136px]"></div>
        <div className="flex flex-col w-32 gap-2 lg:w-72 py-4 px-4 justify-center items-center overflow-hidden ">
          <div className=" lg:text-7xl text-3xl font-semibold flex font-[oswald] lg:w-48 lg:h-32 text-center justify-center items-center">
            30+
          </div>
          <p className=" text-[#6E6F71] text-[9px] lg:text-[16px] text-nowrap font-thin font-SatoshiLight">
            Projects
          </p>
        </div>
        <div className=" border-r-[1px] opacity-25 border-[#6E6F71] h-[136px]"></div>
        <div className="flex flex-col w-32 gap-2 lg:w-72 py-4 px-4 justify-center items-center overflow-hidden ">
          <div className=" lg:text-7xl text-3xl font-semibold flex font-[oswald] lg:w-48 lg:h-32 text-center justify-center items-center">
            14+
          </div>
          <p className=" text-center text-[#6E6F71] text-[9px] lg:text-[16px] text-nowrap font-thin font-SatoshiLight">
            Happy clients
          </p>
        </div>
        <div className=" border-r-[1px] opacity-25 border-[#6E6F71] h-[136px]"></div>
        <div className="flex flex-col w-32 gap-2 lg:w-72 py-4 px-4 justify-center items-center overflow-hidden ">
          <div className=" lg:text-7xl text-3xl font-semibold flex font-[oswald] lg:w-48 lg:h-32 text-center justify-center items-center">
            8+
          </div>
          <p className=" text-[#6E6F71] text-[9px] lg:text-[16px] text-nowrap font-thin font-SatoshiLight">
            Industries
          </p>
        </div>
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
        className=" justify-center items-center mx-auto max-[360px]:w-[335px] max-[430px]:w-[370px] sm:w-[600px] lg:w-[800px] xl:w-[1200px] flex lg:mb-32 mb-20"
      >
        {/* <img src="/images/Homepage GIF 3.gif" alt="" /> */}
        <div
          className="lg:w-[1204px] lg:h-[700px] rounded-2xl w-[340px] justify-center items-center flex h-[280px] bg-cover bg-center "
          style={{ backgroundImage: `url("/images/Homepage GIF 3.gif")` }}
        ></div>
      </motion.div>
    </>
  );
};

export default Hero;
