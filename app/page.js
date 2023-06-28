import Card from "@/components/Card";
import Navbar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[80vh] bg-cover object-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dok8vgjce/image/upload/v1687361721/n0Yh6ks_wxvyqd.jpg')] relative"></div>
      <div className="absolute top-0 w-[100%]">
        <Navbar />
        <div className="text-center ">
          <h1
            className="lg:text-5xl sm:text-3xl text-3xl  text-center md:text-4xl mt-16 
            font-semibold leading-75  text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-blue-500 to-blue-900 
          "
          >
            Pixel MarketPlace
          </h1>
          <div className="mt-[2rem] lg:mt-[4rem]">
            <h2 className="text-white lg:text-2xl md:text-2xl lg:mt-5 mt-3  text-center font-semibold xl:text-3xl text-[1.5rem] font-poppins">
              ARE YOU TIRED OF FALLING TO {""}
              <span className="text-red-800 animate-pulse">SCAMS?</span> <br />
              <span className="hidden md:block m-2">LOOK NO FURTHER!</span>
              <span className="">
                DISCOVER THE MOST VOUCHED AND BEST SHOPS IN THE CRACKING
                COMMUNITY!
              </span>
            </h2>
          </div>
          <div className="xl:mt-[8rem] xl:mb-[4rem] md:mt-[5rem] sm:mt-[4rem] mt-[3rem]">
            <Stats />
            <div className="mt-[2rem] md:mt-[2rem] ">
              <Link
                href="/buy"
                className=" bg-red-800 text-white rounded-md px-5 py-2 "
              >
                Buy / Redeem Access
              </Link>
              <div className="flex justify-center mt-9">

            <img src="https://i.imgur.com/I9r3J4u.png" className="w-10 h-10 animate-bounce cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background flex justify-center  h-[100%] w-[100%] ">
        <div className="w-[1450px]">
          <div className="mx-auto mt-20 ">
            <div className="flex items-center justify-center ">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
