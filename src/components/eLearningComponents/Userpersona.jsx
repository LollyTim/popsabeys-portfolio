import React from "react";
import { motion } from "framer-motion";

const Userpersona = () => {
  const list = ["Tech", "Career", "Time"];
  const list2 = ["Business", "Home", "Liberty"];
  const Status = [
    {
      id: 1,
      status: "Single",
      statName: "Marital Status",
    },
    {
      id: 2,
      status: 20,
      statName: "Age",
    },
    {
      id: 3,
      status: "Lagos",
      statName: "Location",
    },
  ];
  const Status2 = [
    {
      id: 1,
      status: "Single",
      statName: "Marital Status",
    },
    {
      id: 2,
      status: 31,
      statName: "Age",
    },
    {
      id: 3,
      status: "Montreal",
      statName: "Location",
    },
  ];
  return (
    <div className="flex py-14 px-6 max-w-[1050px] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto flex-col">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="gradient font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit"
      >
        Insights from research
      </motion.h1>
      <div className="w-[1050px] flex flex-row gap-[32px]">
        <div className="h-[600px] w-[480px]  items-center overflow-hidden flex-col flex ">
          <img
            src="/images/Ellipse 10.svg"
            alt=""
            className=" z-50 w-28 h-28"
          />
          <div className=" w-[480px] h-[600px] overflow-hidden -mt-12 z-0">
            <div className="forthe h-full overflow-hidden w-[480px] px-9 items-center pt-16 gap-4 flex flex-col ">
              <div className=" items-center flex flex-col">
                <h1 className=" font-SatoshiBold font-semibold text-lg">
                  Idris Moussef
                </h1>
                <p className=" font-SatoshiLight font-normal text-sm ">
                  Designer
                </p>
              </div>
              <div className="flex flex-row w-[60%] justify-between">
                {list.map((item, id) => (
                  <p
                    className=" px-3 py-1 bg-[#4952E4] rounded-full text-xs font-SatoshiLight "
                    key={id}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex flex-row w-full justify-between pr-8 mt-3">
                {Status.map((item, id) => (
                  <div className=" items-center flex flex-col">
                    <h3
                      className=" font-SatoshiBold font-bold text-lg"
                      key={id}
                    >
                      {item.status}
                    </h3>
                    <p
                      className=" px-3 py-1 rounded-full text-sm font-SatoshiLight "
                      key={id}
                    >
                      {item.statName}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-4 text-start w-full">
                <h1>About</h1>
                <p className=" text-sm font-SatoshiLight ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus quae dicta aliquid magni aliquam quidem iste illum
                  soluta velit delectus!
                </p>
              </div>
              <div className="flex flex-row justify-between mt-4 w-full">
                <div className="gap-2 flex flex-col">
                  <h1>Goals</h1>
                  <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-[13px]">
                    <li>Learn a new skill</li>
                    <li>Getting Satified</li>
                    <li>Access to oppurtunity</li>
                  </ul>
                </div>
                <div className="gap-2 flex flex-col">
                  <h1>Frustration</h1>
                  <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-sm">
                    <li>Learn a new skill</li>
                    <li>Getting Satified</li>
                    <li>Access to oppurtunity</li>
                  </ul>
                </div>
              </div>
              <p className="py-1 px-2 text-xs font-SatoshiLight font-normal">
                *Primary persona
              </p>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-[480px]  items-center overflow-hidden flex-col flex mt-20 ">
          <img
            src="\images\Ellipse 10 (1).svg"
            alt=""
            className=" z-50 w-28 h-28"
          />
          <div className=" w-[480px] h-[600px] overflow-hidden -mt-12 z-0">
            <div className="forthe h-full overflow-hidden w-[480px] px-9 items-center pt-16 gap-4 flex flex-col ">
              <div className=" items-center flex flex-col">
                <h1 className=" font-SatoshiBold font-semibold text-lg">
                  Rossie Wallace
                </h1>
                <p className=" font-SatoshiLight font-normal text-sm ">
                  Designer
                </p>
              </div>
              <div className="flex flex-row w-[60%] justify-between">
                {list2.map((item, id) => (
                  <p
                    className=" px-3 py-1 bg-[#4952E4] rounded-full text-xs font-SatoshiLight "
                    key={id}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex flex-row w-full justify-between pr-8 mt-3">
                {Status2.map((item, id) => (
                  <div className=" items-center flex flex-col">
                    <h3
                      className=" font-SatoshiBold font-bold text-lg"
                      key={id}
                    >
                      {item.status}
                    </h3>
                    <p
                      className=" px-3 py-1 rounded-full text-sm font-SatoshiLight "
                      key={id}
                    >
                      {item.statName}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-4 text-start w-full">
                <h1>About</h1>
                <p className=" text-sm font-SatoshiLight ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus quae dicta aliquid magni aliquam quidem iste illum
                  soluta velit delectus!
                </p>
              </div>
              <div className="flex flex-row justify-between mt-4 w-full">
                <div className="gap-2 flex flex-col">
                  <h1>Goals</h1>
                  <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-[13px]">
                    <li>Learn a new skill</li>
                    <li>Getting Satified</li>
                    <li>Access to oppurtunity</li>
                  </ul>
                </div>
                <div className="gap-2 flex flex-col">
                  <h1>Frustration</h1>
                  <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-sm">
                    <li>Learn a new skill</li>
                    <li>Getting Satified</li>
                    <li>Access to oppurtunity</li>
                  </ul>
                </div>
              </div>
              <p className="py-1 px-2 text-xs font-SatoshiLight font-normal">
                *Secondary persona
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpersona;
