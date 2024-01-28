import React from "react";
import { motion } from "framer-motion";
const SomeWorks = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto mt-[100px] px-7 mb-6">
      <div className="max-w-[668px] block pb-12">
        <h1 className="gradient2 font-SatoshiBold font-bold bg-clip-text text-[30px] xl:text-[40px]">
          Some of my work
        </h1>
        <p className=" font-SatoshiLight text-base text-wrap max-w-[650px]  ">
          A brief look into some selected works
        </p>
      </div>
      <div className=" max-w-[1124px] mx-auto justify-center ">
        <div className=" flex flex-col justify-center sm:flex-row lg:flex-row xl:flex-row gap-9 mb-11">
          <div className="">
            <img
              src="\images\Rectangle 40jj.jpg"
              className=" rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex justify-between items-center pt-3">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Discite E-learning (Case study)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  E-learning
                </span>
              </p>
              <a
                href=""
                className="smallBorder rounded-full items-center flex font-SatoshiLight text-nowrap py-2 px-3 xl:py-3 xl:px-5"
              >
                visit site
              </a>
            </div>
          </div>
          <div className=" items-center">
            <img
              src="\images\Rectangle 40kk.png"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex gap-6 xl:gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                TDBizz multipurpose (Showcase)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Commerce. Ride. Services - UI/UX
                </span>
              </p>
              <a
                href=""
                className="smallBorder rounded-full font-SatoshiLight text-nowrap  py-2 px-3 xl:py-3 xl:px-5"
              >
                visit site
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center sm:flex-row lg:flex-row xl:flex-row gap-9 mb-11">
          <div className="">
            <img
              src="\images\Rectangle 38ll.png"
              className=" rounded-xl"
              alt=""
            />
            <div className="flex gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Fashion marketplace (Case study)
                <br />
                <span className="text-[#fff] font-normal absolute text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Commerce - UI/UX
                </span>
              </p>
              <a
                href=""
                className="smallBorder rounded-full items-center justify-center flex font-SatoshiLight text-nowrap py-2 px-5 "
              >
                visit site
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="\images\Rectangle 39mm.jpg"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex justify-between items-center pt-3">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Tradepla (Showcase)
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  Fintech -UI/UX
                </span>
              </p>
              <a
                href=""
                className="smallBorder rounded-full items-center flex font-SatoshiLight text-nowrap py-2 px-3 xl:py-3 xl:px-5"
              >
                visit site
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-row gap-9 mt-11">
          <div className="">
            <img
              src="\images\Rectangle 41nn.png"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex gap-20 items-center pt-3">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap relative font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                People - Equity & Law
                <br />
                <span className="text-[#fff] font-normal absolute  text-xs mt-[2px] pb-4 font-SatoshiLight">
                  SaaS - UI/UX
                </span>
              </p>
              <a
                href=""
                className="smallBorder rounded-full justify-center items-center flex font-SatoshiLight text-nowrap py-2 px-5"
              >
                comming soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeWorks;
