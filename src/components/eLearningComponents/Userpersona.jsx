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
    <>
      <div className="flex py-14 px-6 max-w-[80%] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto overflow-auto lg:overflow-hidden flex-col">
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
          User Persona
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            delay: 2,
            ease: "easeIn",
            duration: 2,
          }}
          className="w-[1050px] flex flex-row max-[800px]:flex-col mx-auto max-[768px]:mx-o gap-[32px] overflow-auto lg:overflow-hidden"
        >
          <div className="h-[600px] w-[480px] items-center overflow-hidden flex-col flex ">
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
                    <div className=" items-center text-[#EEF3FF] flex flex-col">
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
                <div className=" text-[#B5C8F0] flex flex-col gap-2 mt-4 text-start w-full">
                  <h1>About</h1>
                  <p className=" text-sm font-SatoshiLight ">
                    Idris is a designer in the tech space. He is looking into
                    adding skills to his skillset, He does not feel the need to
                    travel to learn something new. He has wide experience with
                    e-learning products like this.
                  </p>
                </div>
                <div className="flex flex-row justify-between mt-4 w-full">
                  <div className="gap-2 text-[#B5C8F0] flex flex-col">
                    <h1>Goals</h1>
                    <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-[13px]">
                      <li>Learn a new skill</li>
                      <li>Getting Satified</li>
                      <li>Access to oppurtunity</li>
                    </ul>
                  </div>
                  <div className="gap-2 flex flex-col text-[#B5C8F0]">
                    <h1>Frustration</h1>
                    <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-sm">
                      <li>Learn a new skill</li>
                      <li>Getting Satified</li>
                      <li>Access to oppurtunity</li>
                    </ul>
                  </div>
                </div>
                <p className="py-1 px-2 bg-[#040431] rounded-full text-xs font-SatoshiLight font-normal">
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
                <div className="flex text-[#EEF3FF] flex-row w-full justify-between pr-8 mt-3">
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
                <div className=" text-[#B5C8F0] flex flex-col gap-2 mt-4 text-start w-full">
                  <h1>About</h1>
                  <p className=" text-sm font-SatoshiLight text-[#B5C8F0] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus quae dicta aliquid magni aliquam quidem iste
                    illum soluta velit delectus!
                  </p>
                </div>
                <div className="flex flex-row justify-between mt-4 w-full">
                  <div className="gap-2 flex flex-col text-[#B5C8F0]">
                    <h1>Goals</h1>
                    <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-[13px]">
                      <li>Learn a new skill</li>
                      <li>Getting Satified</li>
                      <li>Access to oppurtunity</li>
                    </ul>
                  </div>
                  <div className="gap-2 flex flex-col text-[#B5C8F0]">
                    <h1>Frustration</h1>
                    <ul className=" list-inside ml-2 list-disc font-SatoshiLight text-sm">
                      <li>Learn a new skill</li>
                      <li>Getting Satified</li>
                      <li>Access to oppurtunity</li>
                    </ul>
                  </div>
                </div>
                <p className="py-1 px-2 bg-[#040431] rounded-full text-xs font-SatoshiLight text-[#B5C8F0] font-normal">
                  *Secondary persona
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="justify-center flex max-[768px]:max-w-[360px] mx-auto "
      >
        <img src="\images\Group 25 1.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col w-[90%] mx-auto items-center justify-center mt-28 gap-12"
      >
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
          className="gradient2 lg:mx-auto text-center font-SatoshiBold font-bold text-[40px] max-[768px]:text-[25px]"
        >
          Information architecture
        </motion.h1>
        <img
          src="\images\Information Architecture 1.svg"
          className="justify-center w-[360px]  lg:w-[1000px]"
          alt=""
        />

        <img
          src="\images\Group 26 1.svg"
          alt=""
          width={1500}
          className=" justify-center w-[500px] lg:w-[1000px]"
        />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="w-[80%] max-[768px]:flex-col justify-between mx-auto gap-6 flex flex-row items-center mt-32 mb-12"
      >
        <div className="flex gap-3 lg:flex-col">
          <h1 className="gradient2 mx-auto font-SatoshiBold w-fit font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Product <br className=" lg:flex hidden" /> Experience
          </h1>
        </div>
        <div className="flex lg:max-w-[60%] lg:max-h-[1000px]">
          <div className=" lg:w-[800px] lg:mt-6 mt-3">
            <img src="\Imgs\iPhone XS Max Silver Mockup (11).png" alt="" />
          </div>
          <div className=" lg:w-[1000px]">
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (12).png"
              alt=""
              className=" lg:w-[1000px] "
            />
          </div>
          <div className=" lg:w-[800px] lg:mt-6 mt-3">
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (9).png"
              alt="looklike"
              // sizes="300px"
              className="w-[]"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="w-[80%] max-[768px]:flex-col-reverse justify-between mx-auto flex flex-row mb-12 items-center"
      >
        <div className="flex flex-row lg:max-w-[45%] mt-10 lg:mt-0">
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (13).png"
              className=" lg:mt-28 mt-10"
              alt=""
            />
          </div>
          <div>
            <img src="/Imgs/iPhone XS Max Silver Mockup (14).png" alt="" />
          </div>
        </div>
        <div className=" gap-4 flex flex-col max-w-[fit]">
          <h1 className="gradient2 w-fit font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
            Staying in sync
          </h1>
          <p className="text-[#C3C3C3] w-[470px] max-[768px]:w-full font-SatoshiLight">
            The home page is designed to ensure users do not miss out of
            important activities in their enrolled courses, keeping up to date
            with tasks and assignments, fees and every important thing.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="max-w-[80%] max-[768px]:flex-col justify-between mx-auto flex flex-row mb-12 items-center"
      >
        <div className="gap-4 flex flex-col">
          <h1 className="gradient2 font-SatoshiBold  w-fit font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Lecture experience
          </h1>
          <p className="text-[#C3C3C3] lg:w-[505px] max-[768px]:w-full font-SatoshiLight">
            Get notified of live/ongoing lectures, stay engaged in active class
            participation with the lecture discussion feature with colleagues.
            Never miss a class with the schedule and upcoming activity features.
            Make the most of lectures, learn and practicalize lessons on-the go.
          </p>
        </div>
        <div className="flex flex-row lg:max-w-[50%] mt-10 lg:mt-0 ">
          <div>
            <img src="\Imgs\iPhone XS Max Silver Mockup (15).png" alt="" />
          </div>
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (16).png"
              className=" lg:mt-28 mt-16"
              alt=""
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="w-[80%] max-[768px]:flex-col-reverse justify-between mx-auto flex flex-row items-center"
      >
        <div className="flex flex-row lg:max-w-[45%] mt-10 lg:mt-0 ">
          <div>
            <img src="/Imgs/iPhone XS Max Silver Mockup (17).png" alt="" />
          </div>
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (18).png"
              className=" mt-28"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="gradient2 w-fit font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Course registration
          </h1>
          <p className="text-[#C3C3C3] lg:w-[505px] max-[768px]:w-full font-SatoshiLight">
            For a structed schooling system, we had to find an intuitive and
            easy approach to bring the offline paper course registration online,
            making effortless and the platform totally independent.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
        className="w-[80%] max-[768px]:flex-col justify-between mx-auto flex flex-row items-center"
      >
        <div className=" flex flex-col gap-4 mt-2">
          <h1 className="gradient2 font-SatoshiBold w-fit font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Course & Assessment
          </h1>
          <p className="text-[#C3C3C3] lg:w-[505px] max-[768px]:w-full font-SatoshiLight">
            Students are automatically graded by the system and the result
            uploaded to student portal for use.
          </p>
        </div>
        <div className="flex flex-row lg:max-w-[45%] mt-10 lg:mt-0 ">
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (21).png"
              className=" lg:mt-28 mt-10"
              alt=""
            />
          </div>
          <div>
            <img src="\Imgs\iPhone XS Max Silver Mockup (20).png" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-[75%] justify-center mt-20 mx-auto max-[768px]:flex-col flex flex-row items-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          delay: 2,
          ease: "easeIn",
          duration: 2,
        }}
      >
        <div className="flex flex-row gap-1">
          <div>
            <img
              src="/Imgs/iPhone XS Max Silver Mockup (23).png"
              className=" mb-10"
              alt=""
            />
          </div>
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (24).png"
              className=" mt-10"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (25).png"
              className=" mt-10"
              alt=""
            />
          </div>
          <div>
            <img
              src="\Imgs\iPhone XS Max Silver Mockup (26).png"
              className=" mb-10"
              alt=""
            />
          </div>
        </div>
      </motion.div>

      <h1 className=" gradient mt-5 font-SatoshiBold font-bold text-center w-fit text-[40px] max-[768px]:text-[30px] h-fit mb-1 xl:mb-10 ml-16">
        ...end.
      </h1>
    </>
  );
};

export default Userpersona;
