import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="max-w-[1199px] mx-auto">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="max-w-[730px] h-[634px] flex max-[600px]:flex-col imgbg mx-auto ml-40 max-[1230px]:mx-auto mt-32 relative overflow-hidden pr-12 "
      >
        <div className=" max-w-[274] h-[634px] relative justify-center items-center  max-[600px]:w-96 imgggg overflow-hidden ">
          <img
            src="\images\Rectangle 471 (2).png"
            alt=""
            className="object-cover w-full h-fit max-[600px]:object-cover max-[600px]:w-96  overflow-hidden"
          />
          <div className="absolute inset-0">
            {" "}
            <div className="absolute bottom-[70px] flex flex-col left-8">
              <h1 className=" font-SatoshiBold font-bold text-[29px] ">
                Blessing Isong
              </h1>
              <p className="text-[22px] font-SatoshiLight font-normal">
                Fashion Designer
              </p>
            </div>
            <p className=" left-8 font-SatoshiLight text-[13px] bottom-3 absolute">
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="w-[483px] pt-[56px] pl-[35px] ">
          <div className="gap-[13px] flex flex-col">
            <h1 className=" uppercase">about</h1>
            <p className=" text-justify font-SatoshiLight font-normal text-sm w-[278px]">
              Blessing is a graduate that has a penchant for fashion since she
              was in high school, she has gone ahead to pursue her passion by
              enrolling in extracurricular activities training - Fashion
              designer. She has since grown to be a skillful and brilliant
              fashion designer
            </p>
          </div>
          <div className="gap-[13px] flex flex-col mt-[46.14px]">
            <h1 className=" uppercase">GOALS</h1>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[278px]">
                Wants to pursue fashion designing as main career, she wants to
                reach the very top.
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[258px]">
                She wants to be able to sell her beautiful think-a-piece
                creations easily{" "}
              </p>
            </div>
          </div>
          <div className="gap-[12px] flex flex-col mt-[46.14px]">
            <h1 className=" uppercase">FRUSTRATIONS</h1>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[278px]">
                High and expensive entry barrier into the overly saturated
                fashion world
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[258px]">
                Lack of media popularity to showcase her creations
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[258px]">
                Lack of funding and support to push her business ahead
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-[69px] absolute font-bold font-SatoshiBold uppercase bottom-[265px] -right-52 opacity-[0.09] -rotate-90">
          user porsona
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="max-w-[730px] h-[634px] flex max-[600px]:flex-col imgbg mx-auto ml-[420px] max-[600px]:px-5 max-[1230px]:mx-auto mt-12 relative overflow-hidden pr-12 "
      >
        <div className=" max-w-[274] h-[634px] relative justify-center items-center imgggg overflow-hidden ">
          <img
            src="\images\isaac23.png"
            alt=""
            className="object-cover w-full h-full max-[600px]:w-full max-[600px]:h-fit overflow-hidden"
          />
          <div className="absolute inset-0">
            {" "}
            <div className="absolute bottom-[70px] flex flex-col left-8">
              <h1 className=" font-SatoshiBold font-bold text-[29px] max-[600px]:text-[#010314]">
                Isaac Success
              </h1>
              <p className="text-[22px] font-SatoshiLight font-normal max-[600px]:text-[#010314] max-[600px]:text-bold max-[600px]:font-SatoshiBold">
                Fashionista
              </p>
            </div>
            <p className=" left-8 font-SatoshiLight text-[13px] bottom-3 absolute max-[600px]:text-[#010314]  max-[600px]:font-SatoshiBold">
              Akure, Nigeria
            </p>
          </div>
        </div>
        <div className="max-w-[483px] pt-[56px] pl-[35px]">
          <div className="gap-[13px] flex flex-col">
            <h1 className=" uppercase">about</h1>
            <p className=" text-justify font-SatoshiLight font-normal text-sm max-w-[278px]">
              Isaac is a product of cultural and creative art from the
              university of Ife (OAU), he has a heart for African fashion and
              fashion prints. Isaac has written blog posts on the importance of
              promoting African fashion to par with the western culture
            </p>
          </div>
          <div className="gap-[13px] flex flex-col mt-[46.14px]">
            <h1 className=" uppercase">GOALS</h1>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" text-justify font-SatoshiLight text-[13.2px] max-w-[278px]">
                Wants to represent Africa everywhere wearing variety of clothing
                made in Africa by Africans
              </p>
            </div>
          </div>
          <div className="gap-[12px] flex flex-col mt-[46.14px]">
            <h1 className=" uppercase">FRUSTRATIONS</h1>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" font-SatoshiLight text-justify text-[13.2px] max-w-[278px]">
                Tired of the same type of clothing produced by the same set of
                designers
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                className="mt-[5px]"
              >
                <circle cx="3.96017" cy="3.30734" r="3.16476" fill="#C7AC6D" />
              </svg>
              <p className=" font-SatoshiLight text-[13.2px] text-justify max-w-[258px]">
                Looking for new & younger designers with unique creations
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-[69px] absolute font-bold font-SatoshiBold uppercase bottom-[265px] -right-52 opacity-[0.09] -rotate-90">
          user porsona
        </h1>
      </motion.div>
    </div>
  );
};

export default Section2;
