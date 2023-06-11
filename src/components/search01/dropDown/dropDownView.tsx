import React, { ReactNode } from "react";

type Props = { children: ReactNode; dropdownOpen: boolean };

export default function DropDownView({ children, dropdownOpen }: Props) {
  return (
    <div
      className={`${
        dropdownOpen ? `opacity-100 visible` : "invisible opacity-0"
      } shadow-card relative transition-all w-full `}
    >
      {children}
    </div>
  );
}
