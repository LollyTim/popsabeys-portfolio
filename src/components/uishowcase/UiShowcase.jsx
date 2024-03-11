import React from "react";
import { motion } from "framer-motion";

const UiShowcase = () => {
  // const images = [
  //   {
  //     img: "/Imgs/image1.png",
  //   },
  //   {
  //     img: "/Imgs/image22.png",
  //   },
  //   {
  //     img: "/Imgs/image33.jpg",
  //   },
  //   {
  //     img: "/Imgs/image44.png",
  //   },
  //   {
  //     img: "/Imgs/image55.png",
  //   },
  //   {
  //     img: "/Imgs/image66.png",
  //   },
  //   {
  //     img: "/Imgs/image77.png",
  //   },
  //   {
  //     img: "/Imgs/image88.jpg",
  //   },
  //   {
  //     img: "/Imgs/image99.png",
  //   },
  //   {
  //     img: "/Imgs/image10.png",
  //   },
  //   {
  //     img: "/Imgs/image11.png",
  //   },
  //   {
  //     img: "/Imgs/image12.png",
  //   },
  //   {
  //     img: "/Imgs/image13.png",
  //   },
  //   {
  //     img: "/Imgs/image14.png",
  //   },
  //   {
  //     img: "/Imgs/image15.png",
  //   },
  //   {
  //     img: "/Imgs/image16.png",
  //   },
  //   {
  //     img: "/Imgs/image17.png",
  //   },
  //   {
  //     img: "/Imgs/image18.png",
  //   },
  // ];
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
        className="flex flex-col justify-between overflow-hidden mt-[96px] mb-24 max-[768px]:max-w-[340px] lg:max-w-[80%] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
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
          <div className="lg:flex flex-col gap-1 hidden">
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

      <div className="max-w-[85%] items-center justify-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6  ">
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image1.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image22.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image33.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image44.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] overflow-hidden  lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl "
            style={{
              backgroundImage: `url("/Imgs/Rectangle 57.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image66.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image77.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image88.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image99.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image10.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image11.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image12.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image13.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image14.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "-20px",
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/Rectangle 69.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "",
              backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image16.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "-56px",
              backgroundPositionY: "-44px",

              backgroundSize: "1000px",
              // backgroundSize: "",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image17.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "-130px",
              backgroundPositionY: "-80px",
              backgroundSize: "1300px",
              // backgroundSize: "cover",
            }}
          ></div>
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
          className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full grid lg:h-[600px] rounded-xl hover:transition"
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              backgroundImage: `url("/Imgs/image18.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "990px",
            }}
          ></div>
        </motion.div>
      </div>
    </>
  );
};

export default UiShowcase;
