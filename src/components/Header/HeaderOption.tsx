import React from "react";

type Props = {
  Icon: any;
  title: string;
  selected?: boolean;
};

export default function HeaderOption({ Icon, title, selected }: Props) {
  return (
    <div
      className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500 ${
        selected && "border-blue-500 text-blue-500"
      }`}
    >
      <Icon className="text-2xl" />
      <p className="hidden md:inline-flex">{title}</p>
    </div>
  );
}
