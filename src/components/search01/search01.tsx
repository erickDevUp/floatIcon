import React, { useState } from "react";
import DropDown from "./dropDown";

type Props = { setSelect: Function };

export default function Search01({ setSelect }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    let newSearch = e.currentTarget.value;
    setSearch(() => newSearch);
  };
  return (
    <>
      <div className="w-full">
        <div
          className="flex items-center  bg-white rounded-lg w-full left-1/2 "
          x-data="{ search: '' }"
        >
          <div className="w-full">
            <input
              type="search"
              className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
              placeholder="search"
              x-model="search"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                setDropdownOpen(true);
                setActive(!active);
              }}
              className={
                "flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
              }
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {dropdownOpen && (
          <DropDown
            dropdownOpen={dropdownOpen}
            keyword={search}
            active={active}
            setDropdownOpen={setDropdownOpen}
            setSelect={setSelect}
          ></DropDown>
        )}
      </div>
    </>
  );
}
