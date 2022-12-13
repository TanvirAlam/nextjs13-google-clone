import React from "react";
import Avater from "../Avater/Avater";

import { BsGridFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex w-full justify-between p-5 text-sm text-gray-700">
      <div className="flex items-center gap-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <div className="cursor-pointer rounded-full p-2 hover:bg-gray-100">
          <BsGridFill className="text-lg" />
        </div>
        <Avater url="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" />
      </div>
    </header>
  );
}
