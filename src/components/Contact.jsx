// import { TextField } from "@mui/material";
import { act } from "react-dom/test-utils";
import InputComponents from "./InputComponents";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j7219qf", "template_ql8a29c", form.current, {
        publicKey: "kv2FMnLJ1Sto2y46C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" mx-auto lg:w-[50%] w-[90%] rounded-xl bg-[#0F1123] px-10 py-10 gap-10 flex flex-col">
        <h1 className=" justify-center text-[24px] flex items-center">
          Tell me a little about your brand/idea
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="jutstify-center flex items-center w-full flex-col gap-3"
        >
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              required
              id={"user_name"}
              name={"user_name"}
              placeholder=""
              type={"text"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
              e
            />
            <label
              htmlFor="name"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              Your name*
            </label>
          </div>
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              required
              id={"user_email"}
              name={"user_email"}
              placeholder=""
              type={"email"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
            />
            <label
              htmlFor="name"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              How to contact you (email address)*
            </label>
          </div>
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              required
              id={"about"}
              name={"about"}
              placeholder=""
              type={"text"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
            />
            <label
              htmlFor="about"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              Tell me about your business/idea*
            </label>
          </div>
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              required
              id={"handles"}
              name={"handles"}
              placeholder=""
              type={"text"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
            />
            <label
              htmlFor="handles"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              Brand’s social media handles (if available)
            </label>
          </div>
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              required
              id={"challenges"}
              name={"challenges"}
              placeholder=""
              type={"text"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
            />
            <label
              htmlFor="challenges"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              Challenges you face in your business
            </label>
          </div>
          <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
            <input
              autoComplete="off"
              id={"job_details"}
              name={"job_details"}
              placeholder=""
              type={"text"}
              className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
     
     required         `}
            />
            <label
              htmlFor="job_datails"
              className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
            >
              Where do you want me to come in?*
            </label>
          </div>
          <button className="bg-[#4952E4] py-3 px-8 rounded-full ">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
