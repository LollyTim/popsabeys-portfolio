import { motion } from "framer-motion";
import React from "react";
import ClientReviews from "./ClientReviews";

const Business = () => {
  return (
    <>
      <div className=" xl:w-[90%] w-[80%] justify-center items-center mx-auto mt-[100px] gap-4 min-h-fit overflow-hidden mb-20">
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
          <motion.p className="gradient text-center  w-[700px] font-bold text-2xl xl:text-[40px] xl:leading-normal ">
            Optimize your product, website and content to improve your sales
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
          <p className="text-center lg:max-w-[700px] max-w-[300px] justify-center text-base font-normal font-SatoshiLight ">
            If you are not making money head over heels in your business then
            there is something wrong somewhere, I am going to work with you to
            ensure your sales are where it should be
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
          <button className="bg-[#4952E4] py-3 px-8 rounded-full ">
            <a href="/contact">Book a review call</a>
          </button>
        </motion.div>
      </div>
      <ClientReviews />
    </>
  );
};

export default Business;
