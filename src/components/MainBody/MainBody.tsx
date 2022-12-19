import Image from "next/image";
import React from "react";

import { BiSearchAlt2 } from "react-icons/bi";
import { TiMicrophone } from "react-icons/ti";

export default function MainBody() {
  return (
    <form className="flex w-4/5 flex-col items-center rounded-full">
      <Image
        src="https://www.google.dk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="main logo"
        width={300}
        height={100}
      />
      <div className="mt-5 flex w-full max-w-md items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <BiSearchAlt2 className="text-2xl" />
        <input
          type="text"
          className="flex-grow rounded-full p-2 focus:outline-none"
          placeholder="Search..."
        />
        <TiMicrophone className="text-2xl" />
      </div>
      <div className="mt-5 flex w-1/2 flex-col justify-center gap-5 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="cusBtn">Google Search</button>
        <button className="cusBtn">Im Feeling lucky</button>
      </div>
    </form>
  );
}
