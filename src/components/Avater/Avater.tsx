import Image from "next/image";
import React from "react";

import { FaUserTie } from "react-icons/fa";

type Props = {
  url: string;
  mlAuto: string;
};

export default function Avater({ url, mlAuto }: Props) {
  console.log(mlAuto);

  return url ? (
    <Image
      loading="lazy"
      src={url}
      alt="Avater"
      className={`transform animate-pulse cursor-pointer rounded-full transition duration-150 hover:scale-110 ${mlAuto}`}
      width={55}
      height={40}
    />
  ) : (
    <FaUserTie className="cursor-pointer rounded-full text-2xl" />
  );
}
