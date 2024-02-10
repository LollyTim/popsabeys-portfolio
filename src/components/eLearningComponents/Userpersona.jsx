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
      <div className="flex py-14 px-6 max-w-[80%] justify-center items-center gap-[70px] max-[768px]:gap-12 mx-auto flex-col">
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
          className="w-[1050px] flex flex-row max-[800px]:flex-col mx-auto gap-[32px]"
        >
          <div className="h-[600px] w-[480px] max-[600px]:w-[400px]   items-center overflow-hidden flex-col flex ">
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
        className="justify-center flex "
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
        className="flex flex-col w-[70%] mx-auto justify-center mt-28 gap-12"
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
          className="gradient mx-auto font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[25px]"
        >
          Information architecture
        </motion.h1>
        <img src="\images\Information Architecture 1.svg" alt="" />

        <img
          src="\images\Group 26 1.svg"
          alt=""
          width={1500}
          className=" justify-center min-w-[250px] w-[1000px]"
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
        className="w-[75%] max-[768px]:flex-col justify-between mx-auto flex flex-row items-center mt-32"
      >
        <div className="">
          <h1 className="gradient2 mx-auto font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Product
          </h1>
          <h1 className="gradient2 mx-auto font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Experience
          </h1>
        </div>
        <div className="flex">
          <img
            src="\images\iPhone XS Max Silver Mockup (1).svg"
            alt="looklike"
          />
          <img src="\images\iPhone XS Max Silver Mockup.svg" alt="" />
          <img src="/images/iPhone XS Max Silver Mockup (4).svg" alt="" />
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
        className="w-[75%] max-[768px]:flex-col-reverse justify-between mx-auto flex flex-row items-center"
      >
        <div className="flex flex-row ">
          <img
            src="\images\iPhone XS Max Silver Mockup (5).svg"
            className=" mt-28"
            alt=""
          />
          <img src="\images\iPhone XS Max Silver Mockup (6).svg" alt="" />
        </div>
        <div className=" gap-4 flex flex-col">
          <h1 className="gradient2 font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
            Staying in sync
          </h1>
          <p className="text-[#C3C3C3] w-[505px] max-[768px]:w-full font-SatoshiLight">
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
        className="max-w-[75%] max-[768px]:flex-col justify-between mx-auto flex flex-row items-center"
      >
        <div className="gap-4 flex flex-col">
          <h1 className="gradient2 font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[30px]">
            Lecture experience
          </h1>
          <p className="text-[#C3C3C3] lg:w-[505px] max-[768px]:w-full font-SatoshiLight">
            Get notified of live/ongoing lectures, stay engaged in active class
            participation with the lecture discussion feature with colleagues.
            Never miss a class with the schedule and upcoming activity features.
            Make the most of lectures, learn and practicalize lessons on-the go.
          </p>
        </div>
        <div className="flex flex-row">
          <img src="\images\iPhone XS Max Silver Mockup (8).svg" alt="" />
          <img
            src="\images\iPhone XS Max Silver Mockup (7).svg"
            className=" mt-28"
            alt=""
          />
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
        className="w-[75%] max-[768px]:flex-col-reverse justify-between mx-auto flex flex-row items-center"
      >
        <div className="flex flex-row">
          <img src="\images\iPhone XS Max Silver Mockup (9).svg" alt="" />
          <img
            src="\images\iPhone XS Max Silver Mockup (10).svg"
            className=" mt-28"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="gradient2 font-SatoshiBold font-bold text-[40px] justify-center max-[768px]:text-[30px]">
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
        className="max-w-[75%] max-[768px]:flex-col justify-between mx-auto flex flex-row items-center"
      >
        <div className=" flex flex-col gap-4 mt-2">
          <h1 className="gradient2 font-SatoshiBold font-bold text-[40px] max-[768px]:text-[25px]">
            Course & Assessment
          </h1>
          <p className="text-[#C3C3C3] w-[505px]  font-SatoshiLight">
            Students are automatically graded by the system and the result
            uploaded to student portal for use.
          </p>
        </div>
        <div className="flex flex-row">
          <img
            src="\images\iPhone XS Max Silver Mockup (11).svg"
            className=" mt-28"
            alt=""
          />
          <img src="\images\iPhone XS Max Silver Mockup (12).svg" alt="" />
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
          <img
            src="images\iPhone XS Max Silver Mockup-1.png"
            className=" mb-10"
            alt=""
          />
          <img
            src="images\iPhone XS Max Silver Mockup-3.png"
            className=" mt-10"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-1">
          <img
            src="images\iPhone XS Max Silver Mockup.png"
            className=" mt-10"
            alt=""
          />
          <img
            src="images\iPhone XS Max Silver Mockup-2.png"
            className=" mb-10"
            alt=""
          />
        </div>
      </motion.div>

      <h1 className="gradient mt-5 font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit mb-1 xl:mb-10 ml-10">
        ...end.
      </h1>
    </>
  );
};

export default Userpersona;
