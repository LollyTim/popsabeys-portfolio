import { motion } from "framer-motion";
import React from "react";

const SectionOne = () => {
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
        className="flex flex-col justify-between overflow-hidden mt-[96px] max-[768px]:max-w-[360px] lg:max-w-[1050px] lg:h-[260px] max-[768px]:h-[180px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold text-3xl text-[#fff] overflow-hidden">
              TDBizz: The everyday app
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff] overflow-hidden">
              Commerce. Logistics. Lifestyle
            </span>
          </div>
          <div className="lg:flex hidden flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Mobile app
            </span>
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
        className="py-7 mx-auto flex w-full  lg:mt-[72px]  justify-center"
      >
        <div
          className=" bg-no-repeat w-[652px] rounded-3xl  h-[600px] max-w-[652px] max-h-[708px]"
          style={{
            background: `url("/images/gifgiff2.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            // backgroundSize: 400,
          }}
        ></div>
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] gap-[76px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
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
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          What better way can we do things than the processes we already have?
          Are there things we can leverage to improve some of these processes?
          Can we try and optimize some archaic means of doing things? This
          thought is what the project is about
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
        className="flex flex-row py-14 px-12 max-w-[1002px] gap-16 mx-auto  max-[768px]:gap-12 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            We already have loads of commerce platforms, loads of logistics
            penetration and quite a number of service-oriented products, but why
            should users have to learn multiple tools increasingly to achieve
            tasks? Let’s find a way to bring all these under one umbrella to
            make it easier for users to manuever
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
        <img src="\images\iPhone15Pro.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] max-[768px]:gap-[]34px gap-[134px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
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
          For the research, we have so much of data to work with for this
          project, for qualitative result, my approach was user observation,
          seller/buyer interview, competitive analysis to ensure adequate
          product understanding and definitive approach
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className=" w-[85%] items-center justify-center text-center mx-auto flex flex-col gap-[77px] max-[768px]:gap-[] ">
        <h1 className="gradient gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
          UI Design
        </h1>
        <div className="w-full justify-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            src="\images\TDB SC (7).png"
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
            src="\images\TDB SC (2).png"
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

export default SectionOne;
