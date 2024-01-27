import React from "react";

const WhatIdo = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto mt-[100px] px-7">
      <div className="max-w-[668px] block pb-12">
        <h1 className="gradient2 font-SatoshiBold font-bold bg-clip-text text-[40px]">
          What I do
        </h1>
        <p className=" font-SatoshiLight text-base text-wrap max-w-[650px]  ">
          From Product Design to Identity Design to Pitch Deck Design etc., your
          project is in great hands
        </p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Product (UI/UX) Design
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX/CX Strategy
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Brand Identity Design
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Pitch Deck Design
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Project Management
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Video Ad
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            Web Development
          </p>
        </div>
        <div className=" sm:py-7 sm:px-10 py-3 px-3 justify-center max-w-[268px] border rounded-lg text-center items-center">
          <p className=" font-SatoshiLight font-normal text-white text-sm xl:text-xl text-nowrap">
            UX Researcher
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;
