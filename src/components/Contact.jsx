import React from "react";
import { TextField } from "@mui/material";
import { act } from "react-dom/test-utils";

const Contact = () => {
  return (
    <div className=" w-full h-[90vh] flex justify-center items-center">
      <div className="h-[80%] mx-auto w-[50%] border justify-center items-center">
        <h1 className=" justify-center flex items-center">
          Tell me a little about your brand/idea
        </h1>
        <form className="jutstify-center flex items-center"></form>
      </div>
    </div>
  );
};

export default Contact;
