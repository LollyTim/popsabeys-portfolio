import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" xl:w-[50%] w-[85%] justify-center items-center mx-auto mt-[90px] mb-16 gap-4">
        <div className="  mx-auto py-2 px-5 border items-center w-fit text-center rounded-full mb-4">
          <p className="flex font-SatoshiLight text-sm w-fit">
            I am eager to hear what you’re working on
          </p>
        </div>
        <div className="w-full flex justify-center">
          <p className="gradient text-center  w-[689px] font-bold text-3xl xl:text-5xl xl:leading-normal">
            Designing products that sells, building software that scales
          </p>
        </div>
        <div className=" w-fit mt-6 items-center justify-center mx-auto">
          <p className="text-center max-w-[557px] justify-center text-base font-normal font-SatoshiLight ">
            Do you have anw idea you want to build? Or you want to re-optimize
            your product to maximize conversion - let’s hope on a call to
            discuss this
          </p>
        </div>
        <div className=" w-fit mt-10 items-center justify-center mx-auto font-SatoshiLight font-normal leading-7">
          <button className="bg-[#4952E4] py-3 px-8 rounded-full">
            Send a Message
          </button>
        </div>
      </div>
      <div className=" mx-auto max-[360px]:w-[335px] max-[430px]:w-[370px] sm:w-[600px] lg:w-[800px] xl:w-[1000px] flex mb-32">
        <img src="/images/Rectangle.png" alt="" />
      </div>
    </>
  );
};

export default Hero;
