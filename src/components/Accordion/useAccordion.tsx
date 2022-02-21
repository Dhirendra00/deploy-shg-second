import React, { useMemo, useState } from "react";

import { Panel, Button } from ".";
import { Disclosure, Transition } from "@headlessui/react";

interface IAccordionContext {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const AccordionContext = React.createContext<
  IAccordionContext | undefined
>(undefined);

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const memonizedContextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen, setIsOpen]
  );
  return (
    <AccordionContext.Provider value={memonizedContextValue}>
      <div className="w-full  mt-6">
        <div className="w-full max-w-md  bg-white rounded-2xl">
          <Disclosure>{children}</Disclosure>
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("this component should be inside <Accordion />");
  }
  return context;
};

Accordion.Panel = Panel;
Accordion.Button = Button;

export { Accordion };
