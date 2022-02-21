import type { NextPage } from "next";
import { DoctorLayout } from "@/layout/DoctoLayout";
import React from "react";
import { Formik } from "formik";
import { Select } from "@/components/Select";

import { Patient } from "@/components/Patient";
import { useEffect, useState } from "react";
import { Spin } from "antd";

import { fetchAllPatient } from "@/services/requests/authRequests";

import {
  districtData,
  service,
  palikaData,
  province,
} from "@/modules/data/data";
import "antd/dist/antd.css";

export const healthFacilities = [
  {
    id: 1,
    label: "Province",
  },
  {
    id: 2,
    label: "District",
  },
  {
    id: 3,
    label: "Municipality",
  },
  {
    id: 4,
    label: "Other Health Facility",
  },
];
const PatientPage: NextPage = () => {
  const [patients, setPatients] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllPatient().then((data: any) => {
      setPatients(data.data);
      setLoading(false);
    });
  }, []);

  const Spinner = () => {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  };
  return (
    <DoctorLayout>
      <div className="space-y-2">
        <h1 className="text-2xl text-gray-600">
          Please choose a Health Facility
        </h1>

        <div className=" h-76 w-full flex justify-evenly items-center border-b-2 py-2">
          <div className="w-full">
            <Formik
              initialValues={{
                service: "",
                province: "",
                district: "",
                palika: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ values, setFieldValue }) => {
                const id =
                  values.province !== ""
                    ? province.filter(
                        (element) => element.label === values.province
                      )[0].id
                    : 1;

                const district = () => {
                  const data = districtData.filter(
                    (element) => element.provinceId === id
                  );
                  if (data) {
                    return data;
                  } else {
                    setFieldValue("district", "");
                    return [];
                  }
                };

                const districtCode =
                  values.district !== ""
                    ? district().filter(
                        (ele) => ele.label === values.district
                      )[0]
                      ? district().filter(
                          (ele) => ele.label === values.district
                        )[0].code
                      : "123"
                    : 1;

                const palikas = palikaData.filter(
                  (palika) => palika.districtCode === districtCode
                );

                return (
                  <form>
                    <div className="space-y-4 mb-4">
                      <div className="flex space-x-5 z-[10]">
                        <Select name="service" data={service} />
                        <Select name="province" data={province} />
                        <Select name="district" data={district()} />
                        <Select name="palika" data={palikas} />
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white text-xl rounded-sm">
                      Submit
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>

        <div>
          {loading ? (
            <Spinner />
          ) : (
            <div className=" border-3">
              <h2 className="text-lg text-gray-600"> Active Patients</h2>
              <div className="border-2 px-2 py-2 bg-gray-50 grid grid-cols-4 gap-2">
                {patients &&
                  patients.map((patient) => (
                    <Patient
                      key={patient.id}
                      name={patient.name}
                      gender={patient.gender}
                      service={patient.Service}
                      status={true}
                      id={patient.patient_id}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-5xl font-semibold text-gray-700">All Patients</h1>
          <p className="text-xl font-normal text-gray-400">
            Please choose a health service facility to search for your patient
          </p>
        </div>
        <PatientSearchTab />

        <hr />
        <div className="grid grid-cols-3">
          <div className="h-56 shadow-E500 bg-white rounded-sm p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                  <Image src="/avatar.png" alt="Avatar" layout="fill" />
                </div>

                <div className="flex-col">
                  <div className="capitalize text-3xl font-semibold text-gray-700 align-middle">
                    Sagar Karki
                  </div>
                  <div className="capitalize text-xl font-medium text-gray-500">
                    OPD Service
                  </div>
                  <div>
                    <Tag color="success">Active</Tag>
                  </div>
                  <div className="flex flex-row mt-3 justify-between">
                    <div className="bg-blue-800 text-white py-2 px-5 text-lg rounded-sm">
                      Call
                    </div>
                    <div className="bg-blue-800 text-white py-2 px-5 text-lg rounded-sm">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </DoctorLayout>
  );
};

export default PatientPage;
