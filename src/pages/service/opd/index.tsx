/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MainLayout } from "@/layout/MainLayout";
import withAuth from "@/shared/withAuth";
import { useState } from "react";

import { OldPatientTab } from "../../../modules/OldPatientTab";
import { NewPatientTab } from "../../../modules/NewPatientTab";

const OPDService = () => {
  const [selectedTab, setSelectedTab] = useState("new");

  const tabs = ["new", "old"];
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="-space-y-6">
          <h1 className="text-5xl font-semibold text-gray-700">OPD Service</h1>
          <p className="text-xl font-normal text-gray-400">
            Please search for patient or add a new one to start opd service
          </p>
        </div>

        <div className="flex flex-col space-y-4 -ml-2 relative">
          <div className="w-full flex border-b-2 border-gray-300/40 ">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer  text-xl font-medium flex  border-gray-800 transition-all duration-200`}
              >
                <div
                  className={`transition-all duration-200 ${
                    selectedTab === tab
                      ? "border-b-4 primaryBorder bg-gray-200 h-full rounded-lg w-full py-3 px-4 text-gray-800"
                      : " px-4 py-2 text-gray-500"
                  }`}
                >
                  {" "}
                  {tab === "new"
                    ? "Add New Patient"
                    : "Search Old Patient"}{" "}
                </div>
              </div>
            ))}
          </div>

          {selectedTab === "new" ? <NewPatientTab /> : <OldPatientTab />}
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(OPDService);
