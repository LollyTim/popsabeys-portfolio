import React from "react";
import { motion } from "framer-motion";

const UiShowcase = () => {
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
        className="flex flex-col justify-between overflow-hidden mt-[96px] max-w-[1199px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold text-3xl text-[#fff] overflow-hidden">
              UI showcase
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff] overflow-hidden">
              Random
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Desktop & Web app
            </span>
          </div>
        </div>
      </motion.div>

      {/* another section starts here  */}

      <div className=" w-[85%] items-center justify-center text-center mx-auto flex flex-col gap-[77px] max-[768px]:gap-[] ">
        <h1 className="gradient gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
          UI Design
        </h1>
        <div className="w-full justify-center mx-auto grid grid-cols-2 gap-6">
          <motion.img
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
            src="\images\Rectangle 55111.png"
            alt="wfw"
          />
          <motion.img
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
            src="\images\Rectangle 56222.png"
            alt="mobileview"
          />
          <motion.img
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
            src="\images\TDB SC (1).png"
            alt="mobileview2"
          />
          <motion.img
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
            src="\images\TDB SC (9).png"
            alt="viewsw"
          />
          <motion.img
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
            src="\images\TDB SC.png"
            alt="view2"
          />
          <motion.img
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
            src="\images\TDB SC (8).png"
            alt="viewwf"
          />
          <motion.img
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
            src="\images\TDB SC (4).png"
            alt="mobileviews"
          />
          <motion.img
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
            src="\images\TDB SC (3).png"
            alt="mobileviews"
          />
          <motion.img
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
            src="\images\TDB SC (5).png"
            alt="mobileviews"
          />
          <motion.img
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
            src="\images\TDB SC (6).png"
            alt="mobileviews"
          />
        </div>
      </div>
    </>
  );
};

export default UiShowcase;
