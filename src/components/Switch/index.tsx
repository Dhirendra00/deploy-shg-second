import { useState } from "react";
import { Switch } from "@headlessui/react";
import videocall from "@/pages/service/opd/videocall";
// refered test
export const ReferedTest = ({ title }) => {
  const [enabled, setEnabled] = useState(false);
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <div className="flex justify-between mb-3 mt-3">
        <div className="mt-2">
          <h1 className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {" "}
            {title}
          </h1>
        </div>
        <input
          className={`${
            enabled
              ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-2 mr-2"
              : "hidden"
          }`}
          type=""
        ></input>

        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-red-600"}
relative inline-flex flex-shrink-0 h-[28px] w-[64px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-12" : "translate-x-0"}
pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg
 transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
      <hr></hr>
    </>
  );
};
