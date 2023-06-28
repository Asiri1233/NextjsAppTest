import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import Stepper from "@/components/Stepper";
import React from "react";

const page = () => {
  return (
    <div className="w-[100%] md:h-[100vh] background">
    <div className="relative">
      <NavBar background="[#021625]" />
    </div>
    <div className="flex items-center md:mt-[8rem] mt-[3rem] sm:mt-[4rem] justify-center md:mb-[3rem] mb-[4rem] ">
     <Stepper li="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5" border="dark:border-blue-500 border-blue-600 "/>
     
    </div>
    <div className="flex items-center justify-center">
    <div className="md:max-w-md">
      <Form />
    </div>
    </div>
    </div>
  );
};

export default page;
