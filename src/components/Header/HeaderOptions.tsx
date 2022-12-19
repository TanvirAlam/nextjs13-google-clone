import React from "react";
import HeaderOption from "./HeaderOption";

import {
  HiDotsVertical,
  HiOutlineMap,
  HiOutlineNewspaper,
  HiOutlinePhotograph,
  HiPlay,
  HiOutlineSearchCircle,
} from "react-icons/hi";

type Props = {};

export default function HeaderOptions({}: Props) {
  return (
    <div className="test-sm flex w-full justify-evenly border-b-[1px] text-gray-700 lg:justify-start lg:space-x-36 lg:pl-52 lg:text-base">
      <div className="flex space-x-6">
        <HeaderOption Icon={HiOutlineSearchCircle} title="Search" selected />
        <HeaderOption Icon={HiPlay} title="Play" />
        <HeaderOption Icon={HiOutlinePhotograph} title="Photo" />
        <HeaderOption Icon={HiOutlineNewspaper} title="News" />
        <HeaderOption Icon={HiOutlineMap} title="Map" />
        <HeaderOption Icon={HiDotsVertical} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="flex">Settings</p>
        <p className="flex">Tools</p>
      </div>
    </div>
  );
}
