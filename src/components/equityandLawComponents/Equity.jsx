import React from "react";
import { motion } from "framer-motion";

const Equity = () => {
  const ImagePath = [
    {
      url: "/images/Frame 512270 (6)11111.png",
    },
    {
      url: "/images/Frame 512270 (1)22222.png",
    },
    {
      url: "/images/Frame 512270 (1)33333.png",
    },
    {
      url: "/images/Frame 512270444444.png",
    },
    {
      url: "/images/Frame 512270 (5)55555.png",
    },
    {
      url: "/images/Frame 512270 (3)66666.png",
    },
    {
      url: "/images/Frame 512270 (4)77777.png",
    },
    {
      url: "/images/Frame 512270 (2)88888.png",
    },
    {
      url: "/images/Frame 512270 (7)99999.png",
    },
  ];

  return (
    <>
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
        className="flex flex-col justify-between mt-[96px] max-w-[1199px] h-[260px] bg-[#0F1123] rounded-lg lg:mx-auto mx-4 px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold text-3xl text-[#fff]">
              Equity and law management
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff]">
              Saas
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

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-7 lg:mx-auto mx-4 flex w-fit mt-[72px]"
      >
        <img src="\images\Rectangle 44 (4).png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] gap-[76px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
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
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          Understanding equity distribution and management is a key vital topic
          for startups and young companies, this project aims to provide a tool
          that makes this easy and supper efficient in all ways.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-row py-14 px-12 max-w-[1002px] gap-16 mx-auto  max-[768px]:gap-12 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            This is not necessarily a new tool, we have various in the market
            with Carta being a strong market dominance, the challenge here is to
            create an easy, affordable alternative tool to the already existing
            tools for young companies.
          </p>
        </div>
        <h1 className="gradient  max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
          Challenge
        </h1>
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
        className=" max-w-[888px] max-h-[666px] py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\new gif 1.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] max-[768px]:gap-[30px] gap-[134px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
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
          className="gradient gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6"
        >
          Research
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
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[600px]"
        >
          My approach to the research involves a heavy competitor analysis and
          UX mapping, weighing decisions made on products like Carta and
          Astrella, and building a better product from these findings
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1024px] max-[768px]:gap-[30px] gap-[134px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col-reverse justify-center items-center ">
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
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[600px] "
        >
          I paid close attention to correct and easy onboarding as this is one
          of the main goals of the product, ease of use. I took a minimalist
          approach, I also thought to introduce a scenario simulation for
          fundraising and equity distribution events.
        </motion.p>
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
          className="gradient gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6"
        >
          Execution
        </motion.h1>
      </div>

      {/* another section starts here  */}

      {ImagePath.map((item, id) => (
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
          key={id}
          className=" max-w-[1088px] max-h-[666px] py-7 mx-auto flex w-fit lg:mt-[72px] max-[786px]:max-w-96 px-8"
        >
          <img src={item.url} alt="" />
        </motion.div>
      ))}

      <h1 className="gradient mt-5 font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-1 xl:mb-10 ml-10">
        ...end.
      </h1>
    </>
  );
};

export default Equity;
