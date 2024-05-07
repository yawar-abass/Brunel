"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import { useRouter } from "next/navigation";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const router = useRouter();

  const handleFormData = (e) => {
    e.preventDefault();

    if (e.target.name === "email") {
      if (e.target.value.includes("@") && e.target.value.includes(".")) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (formData.name.trim() && formData.email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "" });
    router.push("/thank-you");
  };

  return (
    <div className="flex justify-center items-center mx-auto  flex-col">
      <Heading />
      <div>
        <h1 className="text-[56px] leading-[120%] text-center font-semibold ">
          Start your success <br /> Journey here!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center  mt-16 "
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            className="py-5 bg-[#EFEFEF] rounded-full mb-6 w-[417px]  text-lg font-medium px-10 focus:outline-[#537FF1]  "
            required
            onChange={handleFormData}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            className={`py-5 bg-[#EFEFEF] rounded-full mb-2 w-[417px] text-lg font-medium px-10 focus:outline-[#537FF1] `}
            required
            onChange={handleFormData}
          />
          {!isEmailValid && (
            <div className="">
              <span className="text-white text-md font-semibold h-3 w-3 px-2 py-[1px] mr-2 text-sm  rounded-full bg-red-500 ">
                !
              </span>
              <span className="text-start text-[#FF0808] font-medium">
                Enter a valid email address
              </span>
            </div>
          )}

          <button
            type="submit"
            className={`py-5 ${
              isDisabled
                ? "bg-[#C9C9C9]"
                : "bg-[#1C1C1C] hover:bg-gradient-to-r hover:bg-[#4E4E4E]  transition-all ease-out duration-300"
            } rounded-full w-[417px]  mt-12 text-lg font-medium px-10 text-white `}
            disabled={isDisabled}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
