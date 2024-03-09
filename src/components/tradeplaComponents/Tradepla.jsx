import React from "react";
import { motion } from "framer-motion";

const Tradepla = () => {
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
        className=" overflow-hidden flex flex-col justify-between  mt-[96px] max-[768px]:max-w-[360px] lg:max-w-[1050px] lg:h-[260px] h-[180px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="max-[768px]:text-[22px] font-SatoshiBold font-bold text-3xl overflow-hidden text-[#fff]">
              Tradepla: Financial inclusion
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff]">
              Fintech
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
        className="lg:py-7 px-4 mx-auto flex w-full  lg:mt-[72px]  justify-center"
      >
        <div
          className=" bg-no-repeat  w-[602px] rounded-3xl  h-[500px] max-w-[652px] lg:max-h-[708px]"
          style={{
            background: `url("/images/giggif1.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div>
        {/* // <img src="\images\giggif1.gif" alt="" className=" " /> */}
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 py-6 px-12 max-w-[1002px] lg:gap-[76px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col ">
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
          className="gradient w-fit text-center font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
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
          Have you ever had to, apart from basic mobile wallet features, try
          conducting a fast business dealing but? It get’s tricker if
          buyer/seller is someone unknown or not trusted, the thought arose to
          leverage technology for this
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
        className="flex flex-row lg:py-14 py-6 px-12 max-w-[1002px] lg:gap-16 mx-auto  max-[768px]:gap-8 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            Creating a mobile platform that have unhindered access to 5 major
            currencies, solve for micro business dealings with an escrow system,
            ensure compliance and make money management easy
          </p>
        </div>
        <h1 className="gradient w-fit text-center max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
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
        <img
          src="\images\mockuuups-mockup-of-smartphone-device-with-a-macbook-on-the-side 1.png"
          alt=""
        />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 py-6 px-12 max-w-[1002px] lg:gap-[134px] max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
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
          className="gradient w-fit text-center lg:gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6"
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
          For the research, I conducted a close user interview, carried our a
          quantitative user survey to valid some of the data gotten from the
          interviews and under-studied a market leading platform to create a
          global standard solution
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className=" w-[85%] items-center justify-center text-center mx-auto flex flex-col gap-[77px] max-[768px]:gap-[30px] ">
        <h1 className="gradient gap-[116px] w-fit text-center font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
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
            src="\images\TDB1.png"
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
            src="\images\TDB SC2.png"
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
            src="\images\TDB SC1.png"
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
            src="\images\TDB SC4.png"
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
            src="\images\TDB SC (10).png"
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
            src="\images\TDB SC (9) (1).png"
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
            src="\images\TDB SC (2) (1).png"
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
            src="\images\TDB SC (8).svg"
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
            src="\images\TDB SC (4) (1).png"
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
            src="\images\TDB SC (7) (1).png"
            alt="mobileviews"
          />
        </div>
      </div>
    </>
  );
};

export default Tradepla;
