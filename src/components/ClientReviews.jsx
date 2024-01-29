import React from "react";
// import Slider from "react-slick";
import { motion } from "framer-motion";
const ClientReviews = () => {
  return (
    <div className="flex flex-col xl:flex-row max-w-[1200px] mx-auto mt-[100px] mb-14 px-7">
      <div className=" flex flex-col w-full ">
        <div className="mb-16 block">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 0.3,
            }}
            className="gradient2 font-SatoshiBold flex-nowrap font-bold bg-clip-text text-[26px] lg:text-[40px] overflow-hidden"
          >
            What some of my clients have to say
          </motion.h1>
        </div>
        <div className="flex max-[950px]:block gap-5 w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              delay: 1,
              duration: 1,
            }}
            className=" bg-[#0F1123] text-[rgba(255, 255, 255, 1)] rounded-2xl h-fit pb-8 p-6 max-w-[536px]"
          >
            <p className=" font-SatoshiLight font-normal text-base pb-6 ">
              I had the pleasure of working with our Abiodun, and his expertise
              truly transformed our project. His intuitive designs not only
              enhanced the user experience but also brought a fresh, modern
              aesthetic to our product. His attention to detail and ability to
              translate complex ideas into visually appealing designs is
              outstanding. Collaborative, responsive, and highly skilled,
              Abiodun played a crucial role in elevating our project to new
              heights. I highly recommend his services to anyone seeking
              top-notch design solutions.
            </p>
            <h5 className=" font-SatoshiBold font-bold text-base relative ">
              Stanley Anyanwu
            </h5>
            <span className=" -mt-[2px] font-SatoshiLight font-normal absolute text-xs">
              CEO, Tagdeep Dynamics
            </span>
          </motion.div>
          <div className="gap-5 w-full grid grid-rows-2 overflow-hidden">
            <div className="flex  max-[950px]:mt-10 xl:flex-row xl:flex gap-5 w-full max-h-32">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  scale: { duration: 0.5 },
                  duration: 1,
                }}
                className="flex flex-col py-5 px-6 max-w-96 xl:w-[355px] overflow-hidden h-full bg-[#0F1123] rounded-2xl"
              >
                <div className=" w-full flex flex-col gap-6 overflow-hidden">
                  <p className="flex flex-col font-SatoshiLight w-full mb-2 overflow-hidden text-[16px] max-[960px]:text-[14px] font-normal flex-nowrap">
                    Lovely work! I can recommend Abiodun 100%
                  </p>
                </div>
                <div className=" overflow-hidden">
                  <h5 className=" font-SatoshiBold font-bold text-base relative overflow-hidden ">
                    Sunday Olaiya
                  </h5>
                  <span className=" -mt-[3px] font-SatoshiLight absolute font-normal text-xs">
                    CrPi Group
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.8 },
                  ease: "easeIn",
                  delay: 2,
                  duration: 1,
                }}
                className="flex flex-col py-5 px-6 rounded-2xl w-[214px] gap-4 max-w-[214px] h-32 overflow-hidden bg-[#0F1123]"
              >
                <div className="flex flex-col gap-6 overflow-hidden">
                  <p className=" font-SatoshiLight text-[15px] font-normal flex-nowrap overflow-hidden">
                    You’re the best!
                  </p>
                </div>
                <div className=" overflow-hidden">
                  <h5 className=" font-SatoshiBold font-bold text-base relative overflow-hidden ">
                    Olajide I.
                  </h5>
                  <span className="-mt-[2px] font-SatoshiLight absolute font-normal text-xs">
                    Gigsdev
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.8 },
                ease: "easeIn",
                delay: 1,
                duration: 1,
              }}
              className="flex py-5 px-6 bg-[#0F1123] rounded-2xl"
            >
              <div className="flex flex-col overflow-hidden gap-3">
                <p className="font-SatoshiLight text-[16px] font-normal flex-nowrap">
                  Wow! I love the work you did man! So professional!! I am
                  currently exploring the design system you created and all I
                  can is, great job!
                </p>
                <div>
                  <h5 className=" font-SatoshiBold font-bold text-base relative ">
                    Joshua Wisdom
                  </h5>
                  <span className=" -mt-[2px] font-SatoshiLight font-normal absolute text-xs">
                    "Stealth startup"
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
