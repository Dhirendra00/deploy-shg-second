import React from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Field, Form, Formik } from "formik";
import { Select } from "@/components/Select";
import {
  caste,
  districtData,
  gender,
  palikaData,
  province,
  wardData,
} from "@/modules/data/data";
import { useRouter } from "next/router";
import { addPatientData } from "@/services/requests/authRequests";
import { alert } from "@/components/Alert";

export const NewPatientTab = () => {
  const router = useRouter();
  return (
    <div className="ml-4 w-2/3 py-2 space-y-8">
      <div>
        <div className="text-3xl font-medium text-gray-700">
          New Client Registration
        </div>
        <p className="text-xl font-normal text-gray-400">
          Please fill all of the following details properly. All fields are
          required.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          caste: "",
          age: "",
          gender: "",
          province: "",
          district: "",
          palika: "",
          ward: "",
          contact: "",
        }}
        onSubmit={(values) => {
          alert({
            promise: addPatientData({
              name: values.name,
              caste: values.caste,
              age: Number(values.age),
              gender: values.gender,
              province: values.province,
              district: values.district,
              palika: values.palika,
              ward: Number(values.ward),
              contact: values.contact,
              service: "opd",
            })
              .then((response: any) =>
                router.push(
                  `/service/opd/start?name=${values.name}&id=${response.data.newPatient.patient_id}`
                )
              )
              .catch((error) => console.log(error)),
            type: "promise",
            msgs: {
              loading: "Adding Patient...",
              success: "New patient Registered",
              error: (data) => `${data}`,
            },
          });
        }}
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
              ? district().filter((ele) => ele.label === values.district)[0]
                ? district().filter((ele) => ele.label === values.district)[0]
                    .code
                : "123"
              : 1;

          const palikas = palikaData.filter(
            (palika) => palika.districtCode === districtCode
          );

          return (
            <Form className="space-y-8 w-5/6">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Field
                    name="name"
                    component={Input}
                    placeholder="Enter Full Name"
                  />
                  <Field
                    name="contact"
                    placeholder="(+977)-1231235"
                    component={Input}
                    type="number"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/3">
                    <Field
                      name="age"
                      component={Input}
                      placeholder="Enter Age"
                      type="number"
                    />
                  </div>
                  <div className="w-1/3">
                    <Select name="gender" data={gender} />
                  </div>
                  <div className="w-1/3">
                    <Select name="caste" data={caste} />
                  </div>
                </div>
                <div className="flex space-x-4 z-[10]">
                  <Select name="province" data={province} />
                  <Select name="district" data={district()} />
                </div>
                <div className="flex space-x-4">
                  <div className="w-3/4">
                    <Select name="palika" data={palikas} />
                  </div>
                  <div className="w-1/4">
                    <Select name="ward" data={wardData} />
                  </div>
                </div>
              </div>

              <Button>Submit</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
