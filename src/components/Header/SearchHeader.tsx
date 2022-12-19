import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { GiSkullCrossedBones } from "react-icons/gi";
import { FaMicrophone, FaSearchDollar } from "react-icons/fa";
import Avater from "../Avater/Avater";
import HeaderOptions from "./HeaderOptions";

type Props = {};

export default function SearchHeader({}: Props) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchInputRef?.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="item-center flex w-full p-6">
        <Image
          src="https://www.google.dk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="main logo"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="broder-gray-200 ml-10 mr-5 flex max-w-4xl flex-grow items-center rounded-full border px-6 py-3 shadow-lg">
          <input
            ref={searchInputRef}
            type="text"
            className="w-full flex-grow focus:outline-none"
          />
          <GiSkullCrossedBones
            className="transform cursor-pointer text-3xl text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <FaMicrophone className="mr-2 hidden transform cursor-pointer border-l-2 border-gray-300 text-2xl text-blue-500 transition duration-100 hover:scale-125 sm:mr-3 md:inline-flex" />
          <FaSearchDollar className="hidden transform cursor-pointer border-gray-300 text-2xl text-red-500 transition duration-100 hover:scale-125 md:mr-3 md:inline-flex" />
          <button hidden type="submit" onClick={handleSearch}>
            Search
          </button>
        </form>
        <Avater
          mlAuto="ml-auto"
          url="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}
