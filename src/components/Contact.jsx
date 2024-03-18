import React from "react";
import { TextField } from "@mui/material";
import { act } from "react-dom/test-utils";
import InputComponents from "./InputComponents";

const Contact = () => {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" mx-auto lg:w-[50%] w-[90%] rounded-xl bg-[#0F1123] px-10 py-10 gap-10 flex flex-col">
        <h1 className=" justify-center text-[24px] flex items-center">
          Tell me a little about your brand/idea
        </h1>
        <form className="jutstify-center flex items-center w-full flex-col gap-3">
          <InputComponents title={"Your name*"} />
          <InputComponents title={"Your name*"} />
          <InputComponents title={"Your name*"} />
          <InputComponents title={"Your name*"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
