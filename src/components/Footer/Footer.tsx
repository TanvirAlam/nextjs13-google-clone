import React from "react";

import { FaGlobeAfrica } from "react-icons/fa";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Denmark</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <FaGlobeAfrica className="mr-1 text-2xl text-green-700" />
          Carbon nutralsince 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertisment</p>
          <p>Advertisment</p>
          <p>Advertisment</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Advertisment</p>
          <p>Advertisment</p>
          <p>Advertisment</p>
        </div>
      </div>
    </footer>
  );
}
