import React from "react";
import { motion } from "framer-motion";

const BackDrop = ({ handleNav }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 0.7 }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: 0.8 },
        ease: "easeIn",
        duration: 1,
      }}
      onClick={() => {
        handleNav();
      }}
      className=" z-20 bg-[#0a0a31] w-screen opacity-60 h-screen fixed top-0 left-0"
    ></motion.div>
  );
};

export default BackDrop;
