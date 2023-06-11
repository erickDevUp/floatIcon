import Image from "next/image";
import { Inter } from "next/font/google";
import Search01 from "@/components/search01/search01";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [select, setSelect] = useState("");
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 w-full ${inter.className}`}
    >
      <div className="w-80">
        <Search01 setSelect={setSelect}></Search01>
      </div>
      <div className="-m-3 flex items-center rounded-lg p-3 justify-between ">
        {select && (
          <div className="mt-5 z-0 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-4 bg-white px-3 py-3 sm:gap-8 sm:p-8">
              <img src={select} className="w-14 h-14"></img>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
