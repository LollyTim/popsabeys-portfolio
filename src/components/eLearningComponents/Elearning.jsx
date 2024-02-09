import React from "react";
import { motion } from "framer-motion";
import Userpersona from "./Userpersona";

const Elearning = () => {
  return (
    <>
      <motion.div
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
        className="flex flex-col justify-between mt-[96px] max-w-[1199px] h-[260px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold overflow-hidden text-3xl text-[#fff]">
              Discite E-learning
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff]">
              E-learning{" "}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            {/* <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Web and Mobile app
            </span> */}
          </div>
        </div>
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit mt-[72px]"
      >
        <img src="\images\Rectangle 44 (3).png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-6 max-w-[900px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto max-[786px]:flex-col ">
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
          className="gradient font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
        >
          Introduction
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[488px]"
        >
          Discite is an educational app that creates an alternative to physical
          schooling by leveraging e-learning to offer diploma courses.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-row py-14 px-6 max-w-[900px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto max-[786px]:flex-col-reverse"
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[440px]">
          <p>
            School’s current offerings are totally offline, there is a need for
            reaching more student home and abroad.
          </p>
        </div>
        <h1 className="gradient  max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
          Challenge
        </h1>
      </motion.div>
      <div className="flex flex-row py-14 px-6 max-w-[900px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto max-[786px]:flex-col">
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
          className=" flex flex-nowrap gradient font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
        >
          The Goal
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" text-start font-SatoshiLight font-normal text-base leading-6 max-w-[505px]"
        >
          Making school’s onsite offerings available in a portable and
          accessible version, a mobile application.
        </motion.p>
      </div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 mx-auto flex w-fit mt-[72px]"
      >
        <img src="\images\Process 1.png" alt="" />
      </motion.div>

      {/* another section starts here  */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-row py-14 px-6 max-w-[900px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto max-[786px]:flex-col-reverse"
      >
        <div className="font-SatoshiLight font-normal text-base leading-6 max-w-[440px]">
          <p>
            These were agreed opon by stakeholders and they formed the crux in
            making major decisions for this project
          </p>
        </div>
        <h1 className="gradient  max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
          Vision
        </h1>
      </motion.div>

      {/* another section starts here  */}

      <div className="flex max-w-[900px] mx-auto mt-10 pl-6 max-[835px]:hidden">
        <div className="w-[814px] flex flex-row relative">
          <div className=" w-2/4 ">
            <div className="text-end gap-3 flex flex-col mt-[190px] pr-10 h-[160px]">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiBold font-bold text-2xl"
              >
                Compatibility
              </motion.h1>

              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiLight font-normal text-[16px]"
              >
                Producing for major use-cases is a must i.e regardless of which
                type of device or OS a prospect uses, we shoul be prepared to
                accommodate variety of it so it won't be a turning point.
              </motion.p>
            </div>
            <div className="text-end gap-3 flex flex-col mt-[220px] px-10 h-[160px] ">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiBold font-bold text-2xl"
              >
                Retainer
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiLight font-normal text-[16px]"
              >
                People must be willing to both re-use the product and
                also recommend it.
              </motion.p>
            </div>
          </div>
          <div className="w-[25px] h-[25px] bg-[#252a72] flex justify-center items-center rounded-full left-[394px] top-0 animate-pulse duration-[500ms] absolute">
            <div className="w-[15px] h-[15px] justify-center items-center flex mx-auto bg-[#474fcd] rounded-full ">
              <div className="w-[10px] h-[10px] flex mx-auto bg-[#5a63fe] rounded-full "></div>
            </div>
          </div>
          <div className="w-[25px] h-[25px] bg-[#351872] flex justify-center items-center rounded-full top-[190px] left-[394px] animate-pulse duration-[500ms] absolute">
            <div className="w-[15px] h-[15px] justify-center items-center flex mx-auto bg-[#672ccd] rounded-full ">
              <div className="w-[10px] h-[10px] flex mx-auto bg-[#8236ff] rounded-full "></div>
            </div>
          </div>
          <div className="w-[25px] h-[25px] bg-[#651872] flex justify-center items-center rounded-full top-[380px] left-[394px] animate-pulse duration-[500ms] absolute">
            <div className="w-[15px] h-[15px] justify-center items-center flex mx-auto bg-[#c62ccd] rounded-full ">
              <div className="w-[10px] h-[10px] flex mx-auto bg-[#fb36ff] rounded-full "></div>
            </div>
          </div>
          <div className="w-[25px] h-[25px] bg-[#671822] flex justify-center items-center rounded-full top-[570px] left-[394px] animate-pulse duration-[500ms] absolute">
            <div className="w-[15px] h-[15px] justify-center items-center flex mx-auto bg-[#c92c30] rounded-full ">
              <div className="w-[10px] h-[10px] flex mx-auto bg-[#ff3636] rounded-full "></div>
            </div>
          </div>

          <div className=" w-2/4 h-full ">
            <div className="text-start gap-3 flex flex-col px-10 h-[190px] border-l-[#5a63fe] items-start justify-start border-l-2">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiBold font-bold text-2xl"
              >
                Ease of Use
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiLight font-normal text-[16px]"
              >
                There's necessity to create a frictionless product to attract
                both new and already existing students. Making it usable by
                everyone is a key metric marketting team are also banking on.
              </motion.p>
            </div>
            <div className="text-start gap-3 flex flex-col px-10 h-[190px] items-start border-l-[#8236ff] border-l-2"></div>
            <div className="text-start gap-3 flex flex-col px-10 h-[190px] items-start justify-start border-l-[#fb36ff] border-l-2">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiBold font-bold text-2xl"
              >
                Light
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" font-SatoshiLight font-normal text-[16px]"
              >
                With tons of e-learning apps in the market, there should be no
                restriction for people to try out this product. Space and space
                consumption should be considered so it will not deter prospect.
              </motion.p>
            </div>
            <div className="text-start gap-3 flex flex-col px-10 h-[160px]"></div>
          </div>
        </div>
      </div>

      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          scale: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        src="\images\Group 20 22.png"
        className="hidden max-[835px]:flex"
        alt=""
      />

      <div className="flex py-14 px-6 max-w-[900px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto flex-col">
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
          className="gradient font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit"
        >
          Insights from research
        </motion.h1>
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            scale: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          src="\images\Frame 58 1.png"
          className=" max-[835px]:flex mx-auto flex w-full "
          alt=""
        />
      </div>
      {/* another section starts here  */}

      <Userpersona />
    </>
  );
};

export default Elearning;
