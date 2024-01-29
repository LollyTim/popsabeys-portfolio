import React from "react";

const ClientReviews = () => {
  return (
    <div className="flex flex-row max-w-[1200px] mx-auto mt-[100px] px-7">
      <div className=" flex flex-col w-full ">
        <div className="mb-16 block">
          <h1 className="gradient2 font-SatoshiBold flex-nowrap font-bold bg-clip-text text-[40px]">
            What some of my clients have to say
          </h1>
        </div>
        <div className="flex gap-5 w-full">
          <div className=" bg-[#0F1123] text-[rgba(255, 255, 255, 1)] rounded-2xl p-6 max-w-[536px]">
            <p className=" font-SatoshiLight font-normal text-base pb-6 ">
              I had the pleasure of working with our Abiodun, and his expertise
              truly transformed our project. His intuitive designs not only
              enhanced the user experience but also brought a fresh, modern
              aesthetic to our product. His attention to detail and ability to
              translate complex ideas into visually appealing designs is
              outstanding. Collaborative, responsive, and highly skilled,
              Abiodun played a crucial role in elevating our project to new
              heights. I highly recommend his services to anyone seeking
              top-notch design solutions.
            </p>
            <h5 className=" font-SatoshiBold font-bold text-base relative ">
              Stanley Anyanwu
            </h5>
            <span className=" -mt-[2px] font-SatoshiLight font-normal absolute text-xs">
              CEO, Tagdeep Dynamics
            </span>
          </div>
          <div className="gap-5 w-full grid grid-rows-2">
            <div className="grid grid-cols-2 gap-5 w-full  max-h-32">
              <div className="flex py-5 px-6 max-w-80 bg-[#0F1123] rounded-2xl">
                dbcvjmdnbvjdbnvjd jd
              </div>
              <div className="flex max-w-52 rounded-2xl bg-[#0F1123]">
                dbcvjmdnbvjdbnvjd jd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
