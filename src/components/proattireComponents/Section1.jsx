import { motion } from "framer-motion";
import React from "react";
import Section2 from "./Section2";

const Section1 = () => {
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
        className="flex flex-col justify-between mt-[96px] max-[768px]:max-w-[360px] lg:max-w-[1050px] lg:h-[260px] h-[160px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal overflow-hidden ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="max-[768px]:text-[16px] font-SatoshiBold font-bold text-3xl text-[#fff] overflow-hidden">
              Proattire: Fashion marketplace
            </h1>
            <span className=" font-SatoshiLight font-normal text-lg lg:text-xl text-[#fff]">
              E-Commerce{" "}
            </span>
          </div>
          <div className="lg:flex hidden flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Web and Mobile app
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
        className=" py-7 mx-auto flex w-fit mt-[72px]"
      >
        <img src="\images\iPadimg.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 px-12 py-6 max-w-[1002px] lg:gap-[76px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col ">
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
          className="gradient w-fit font-SatoshiBold text-center font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
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
          Proattire is making fashion, retail fashion accessible to people while
          also promoting the fashion creator economy by providing an accessible
          and easy-to-use in-route to the fashion market for fashion creators by
          leveraging technology.
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
        className="flex flex-row lg:py-14 px-12 py-6 max-w-[1002px] lg:gap-16 mx-auto  max-[768px]:gap-8 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            The challenge was to find how best to make the fast growing retail
            fashion in Africa more accessible leveraging technology as the
            enabler for this.
          </p>
          <br />
          <p> We had few goals:</p>
          <ul className=" list-disc list-inside">
            <li className="">
              Provide buyers access to varieties (in terms of product & pricing)
            </li>
            <li>
              {" "}
              Leverage available and familiar means to provide this access
              Create
            </li>
            <li> avenue for upcoming creators for easy entry into market</li>
          </ul>
        </div>
        <h1 className="gradient w-fit font-SatoshiBold text-center font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7">
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
        className=" py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\mens.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 px-12 py-6 max-w-[1002px] lg:gap-[76px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col mt-8 ">
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
          className="gradient text-center w-fit  font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6 lg:mb-10"
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
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          We uncover some vital purchase and technology accessibility data that
          further solidified the pre-formed insights gotten from the qualitative
          research.
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className="flex flex-row py-7 px-12 max-w-[1002px] h-fit justify-center items-center gap-[126px] max-[768px]:gap-5 mx-auto max-[768px]:flex-col-reverse mt-8 ">
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
          className=" font-SatoshiLight font-normal pr-8 text-base leading-6 max-w-[590px] items-center"
        >
          Percentage of target market with a smartphone in Nigeria, indicating a
          large growing market that is projected to grow to 140 million on a 66%
          population according to Statista.
        </motion.p>
        <motion.img
          src="\images\pichat.png"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-10"
        />
      </div>
      <div className="flex flex-row py-14 px-12 max-w-[1002px] h-fit justify-center items-center gap-[61px] max-[768px]:gap-6 mx-auto max-[768px]:flex-col  ">
        <motion.img
          src="\images\barChat.png"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-10"
        />
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
          className=" font-SatoshiLight justify-center font-normal pr-8 text-base leading-6 max-w-[590px] items-center"
        >
          Percentage of target market with a smartphone in Nigeria, indicating a
          large growing market that is projected to grow to 140 million on a 66%
          population according to Statista.
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
        className=" py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\completeChat.png" alt="chat" />
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
        className=" py-7 mx-auto flex w-fit max-[786px]:max-w-96 px-8"
      >
        <img src="\images\completeBarchat.png" alt="chat" />
      </motion.div>

      {/* another section starts here  */}

      <Section2 />

      {/* another section starts here  */}

      <div className="flex flex-row py-14 px-12 max-w-[1002px] gap-[161px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col mt-8 ">
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
          className="gradient w-fit text-center font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6 mb-1 xl:mb-10"
        >
          Insights
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gap-40"
        >
          <p className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px] mb-6 ">
            From interviews, samplings and surveys, we determined the main
            bottlenecks to that is limiting the already existing solutions in
            the market, also we were able to identify the key motivations to
            moving forward. Some of the key motivations are:
          </p>
          <ul className=" list-disc list-inside font-SatoshiLight text-[16px]">
            <li>Security in purchase, delivery and sizing</li>
            <li>Accessibility to variety of creators</li>
            <li>Product range to meet various needs</li>
          </ul>
        </motion.div>
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
        className=" py-7 mx-auto flex w-fit max-[786px]:max-w-96 px-8"
      >
        <img src="\images\iPhone 15 Pro.png" alt="chat" />
      </motion.div>

      {/* another page starts here  */}

      <div className="flex flex-row lg:py-14 px-12 py-8 lg:max-w-[80%] lg:justify-between max-[768px]:gap-12 mx-auto max-[768px]:flex-col ">
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
          className="gradient w-fit items-center font-SatoshiBold font-bold text-[40px] max-[768px]:gap-6 max-[768px]:text-[30px] h-fit -mt-7"
        >
          Execution
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
          I took a more pragmatic approach to the design, focusing first on the
          consumer vertical, I also ensured the creator product is designed to
          match set goals with emphasis on making the platform easy to use and
          familiar using existing UX patterns.
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
        className=" py-7 max-w-[70%] mx-auto flex w-fit max-[786px]:max-w-96 relative px-8"
      >
        <img
          src="\Imgs\Group 512227 (2).png"
          alt="preview"
          className=" w-full "
        />
        {/* <img
          src="\images\prev1011.png"
          alt="preview"
          className=" absolute w-32 -bottom-4 -right-10"
        /> */}
      </motion.div>
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
        className=" py-7 max-w-[70%] mx-auto flex w-fit max-[786px]:max-w-96 relative px-8"
      >
        <img
          src="\Imgs\Group 512228 (1).png"
          alt="preview"
          className=" w-full"
        />
        {/* <img
          src="\images\prev1011.png"
          alt="preview"
          className=" absolute w-32 -bottom-4 -right-10"
        /> */}
      </motion.div>
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
        className=" py-7 max-w-[70%] mx-auto flex w-fit max-[786px]:max-w-96 relative px-8"
      >
        <img src="\Imgs\Group 512229.png" alt="preview" className=" w-full " />
        {/* <img
          src="\images\prev1011.png"
          alt="preview"
          className=" absolute w-32 -bottom-4 -right-10"
        /> */}
      </motion.div>
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
        className=" py-7 max-w-[80%] mx-auto flex w-fit max-[786px]:max-w-96 relative px-8"
      >
        <img src="\Imgs\Group 512230.png" alt="preview" className=" w-full " />
        {/* <img
          src="\images\prev1011.png"
          alt="preview"
          className=" absolute w-32 -bottom-4 -right-10"
        /> */}
      </motion.div>
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
        className=" py-7 lg:max-w-[68%] mx-auto justify-between flex w-full max-[786px]:max-w-96  px-8 mt-12"
      >
        <div className=" w-[250px]">
          <img
            src="\Imgs\iPhone 12 Mockup Front View (1).png"
            alt="preview"
            className=" mt-20"
          />
        </div>
        <div className=" w-[250px]">
          <img
            src="\Imgs\iPhone 12 Mockup Front View (2).png"
            alt="preview"
            className=" mb-20"
          />
        </div>
        <div className=" w-[250px]">
          <img
            src="\Imgs\iPhone 12 Mockup Front View (3).png"
            alt="preview"
            className=" mt-20"
          />
        </div>
        {/* <img
          src="\images\prev1011.png"
          alt="preview"
          className=" absolute w-32 -bottom-4 -right-10"
        /> */}
      </motion.div>
      <h1 className="gradient mt-5 w-fit font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-1 xl:mb-10 ml-20">
        ...end.
      </h1>
    </>
  );
};

export default Section1;
