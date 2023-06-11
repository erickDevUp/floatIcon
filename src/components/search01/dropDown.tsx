import DropDownView from "./dropDown/dropDownView";
import Element from "./dropDown/element";
type Props = {
  dropdownOpen: boolean;
  keyword: string;
  active: boolean;
  setDropdownOpen: Function;
  setSelect: Function;
};

import useGetIcon from "./dropDown/useGetIcon";
import { useEffect, useState } from "react";
export default function DropDown({
  dropdownOpen,
  keyword,
  active,
  setDropdownOpen,
  setSelect,
}: Props) {
  const [keywordFetch, setKeywordFetch] = useState("");

  const { elements, nameIcons } = useGetIcon(keywordFetch);
  useEffect(() => {
    setKeywordFetch(keyword || "search-line");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <div className="flex flex-col w-full ">
        <DropDownView dropdownOpen={dropdownOpen}>
          <div className="absolute z-10 left-1/2 mt-3 w-full bg-white -translate-x-1/2 transform sm:px-0 ">
            <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto h-64">
              <div className="relative grid gap-4 bg-white px-3 py-3 sm:gap-8 sm:p-8">
                {elements?.map((element: string, i: number) => (
                  <Element
                    nameTitle={nameIcons[i]}
                    key={i + "icon"}
                    img={element}
                    setDropdownOpen={setDropdownOpen}
                    setSelect={setSelect}
                  ></Element>
                ))}
              </div>
            </div>
          </div>
        </DropDownView>
      </div>
    </>
  );
}
