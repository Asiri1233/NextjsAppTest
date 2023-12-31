"use client";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Stepper from "@/components/Stepper";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const page = () => (
  <div className="w-[100%] h-[100%]  background">
    <div className="relative">
      <NavBar background="background" />
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center md:mt-[8rem] mt-[3rem] sm:mt-[4rem] justify-center md:mb-[3rem] mb-[4rem] ">
        <Stepper />
      </div>
      <div>
        <h1 className="text-red-500 lg:text-3xl font-bold text-center md:text-2xl text-xl">
          !IMPORTANT ATM YOU CAN ONLY BUY VIA TELEGRAM MESSAGE @WRestocker
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <ProductCard
          title="7-Day Access Key"
          price="14.99"
          cut="25"
          duration="/week"
          image="https://res.cloudinary.com/dok8vgjce/image/upload/v1687366673/image_yakty8.png"
          dkey="6490cff15a267"
          dprecent="40"
        />
        <ProductCard
          title="30-Day Access Key"
          price="49.99"
          cut="60"
          duration="/month"
          image="https://res.cloudinary.com/dok8vgjce/image/upload/v1687366897/image_fhhvgg.png"
          dkey="6490dc8969b64"
          dprecent="16"
        />
        <ProductCard
          title="60-Day Access Key"
          cut="100"
          price="89.99"
          duration="/months"
          hide={true}
          image="https://res.cloudinary.com/dok8vgjce/image/upload/v1687367076/image_jbevci.png"
          dkey="6493259e2e3e4"
          dprecent="10"
        />
      </div>
      <p className="mt-5 border border-white rounded-md px-3 text-ellipsis text-center text-white">
        Or, you can buy directly via Telegram message.
      </p>
      <div className="mt-[2rem] flex flex-col items-center">
        <a
          href="https://t.me/WRestocker"
          target="_blank"
          type="button"
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90  focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        >
          <img
            itemProp="image"
            className="w-5 h-5 mr-2"
            src="https://freelogopng.com/images/all_img/1683045226telegram-logo-black.png"
            width="100"
            height="100"
            alt="@Sellix"
          />
          Continue via Telegram
        </a>
        <div className="mt-4 mb-[4rem]">
          <Link
            className=" text-white border border-white rounded-lg p-2 px-4  hover:bg-blue-100 hover:text-black duration-200"
            href="/form"
          >
            Fill the form
          </Link>
        </div>
      </div>
    </div>
    <div></div>
  </div>
);

export default page;
