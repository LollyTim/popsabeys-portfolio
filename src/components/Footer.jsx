import React from "react";
import { motion } from "framer-motion";
const Footer = ({ contact }) => {
  return (
    <div
      ref={contact}
      className="max-w-[876px] z-0 flex flex-col justify-center items-center relative mx-auto mt-20 pt-32 mb-5"
    >
      <motion.img
        initial={{ opacity: 0.1, scale: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          x: { type: "inertia", bounceStiffness: 30 },
        }}
        src="\images\cyclic.svg"
        alt=""
        className=" max-[768px]:right-[-30px] max-[768px]:top-[-20px] z-10 absolute top-[-14px] right-10"
      />
      <motion.img
        viewport={{ once: true }}
        initial={{ opacity: 0.1, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          x: { type: "inertia", bounceStiffness: 30 },
        }}
        src="\images\triangle.svg"
        alt=""
        className=" absolute left-[30px] bottom-[90px]"
      />

      <motion.img
        initial={{ opacity: 0.1, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          x: { type: "inertia", bounceStiffness: 30 },
        }}
        src="\images\circle.svg"
        alt=""
        className="  max-[768px]:-left-2 absolute top-10 max-[768px]:top-[65px] left-[140px]"
      />
      <div className="max-w-[568px] gap-6 items-center flex flex-col mb-32 justify-center">
        <motion.h1
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
          className="max-[768px]:text-[25px] max-w-[364px] uppercase text-center text-[32px] font-bold text-[#fff] leading-[42px]"
        >
          Let’s work on Great things together
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" max-w-[537px] font-SatoshiLight text-center text-base font-normal px-10 leading-6"
        >
          Hey there! Reach out, I’d love to hear about your project and ideas. I
          am looking forward to it.
        </motion.p>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight bg-[#4952E4] py-3 px-8 items-center justify-center justify-items-center rounded-full"
        >
          <a href="mailto: popsabey.ux@gmail.com">Reach out to me</a>
        </motion.button>
      </div>
      <div>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-normal text-xl items-center justify-center max-[768px]:text-sm font-SatoshiLight"
        >
          Developed by <span className="text-[#7E86FF]">@LollyTech</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
