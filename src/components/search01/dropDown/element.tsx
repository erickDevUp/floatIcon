/* eslint-disable @next/next/no-img-element */

import React from "react";

type Props = {
  nameTitle: string;
  img: string;
  setDropdownOpen: Function;
  setSelect: Function;
};

export default function Element({
  nameTitle,
  img,
  setDropdownOpen,
  setSelect,
}: Props) {
  const handleSelect = () => {
    setDropdownOpen(false);
    setSelect(img);
  };
  return (
    <>
      <div
        className="-m-3 flex items-center rounded-lg p-3 justify-between hover:bg-gray-50"
        onClick={handleSelect}
      >
        <div className="ml-4">
          <p className="text-lg font-medium text-gray-900">{nameTitle}</p>
        </div>

        <img src={img} alt={nameTitle} className="w-14 h-14"></img>
      </div>
    </>
  );
}
