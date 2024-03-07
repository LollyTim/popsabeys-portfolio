import React from "react";

const Loading = () => {
  return (
    <div className=" w-screen h-screen justify-center items-center flex my-auto">
      {/* <div className=" w-full flex justify-center items-center mx-auto my-auto "> */}
      <div className="loadinggradient w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] rounded-full flex items-center justify-center overflow-hidden ">
        <div className=" bg-[#010314] w-[292px] h-[292px]  lg:w-[432px] lg:h-[432px] rounded-full flex items-center justify-center overflow-hidden duration-75 transition ">
          <div className="loadinggradient lg:gap-[20px] gap-3 w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden justify-center flex flex-col items-center ">
            <h1 className=" text-[20px] lg:text-[33px] lg:leading-[43.67px] w-[200px] lg:w-[300px] font-medium text-center overflow-hidden animate-none font-SatoshiLight">
              Aesthetics is a product functionality, you buy a dress for it’s
              beauty and form.
            </h1>
            <h1 className="lg:text-[33px] text-[20px] font-medium text-center overflow-hidden animate-none font-SatoshiLight">
              - Popsabey
            </h1>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Loading;
