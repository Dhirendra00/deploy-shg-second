import React from "react";

import { useAccordion } from "./useAccordion";
import { ChevronUpIcon } from "@heroicons/react/solid";

export type IPanelProps = {
  children: React.ReactNode;
};

export const Panel = ({ children }) => {
  const { isOpen } = useAccordion();
  return (
    <>
      {isOpen && (
        <div className="px-4 pt-4 pb-2 text-sm text-gray-800">{children}</div>
      )}
    </>
  );
};

export type IButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<IButtonProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useAccordion();
  const onClickFn = () => setIsOpen(!isOpen);

  return (
    <button
      className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-white hover:bg-emerald-700 secondaryBgColor rounded-lg  focus:outline-none focus-visible:ring   focus-visible:ring-opacity-75"
      onClick={onClickFn}
    >
      {children}
      <ChevronUpIcon
        className={`${
          isOpen ? "transform rotate-180" : ""
        } w-5 h-10 text-white`}
      />
    </button>
  );
};
