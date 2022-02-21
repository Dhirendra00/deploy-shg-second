import { MainLayout } from "@/layout/MainLayout";
import withAuth from "@/shared/withAuth";
import { useRouter } from "next/router";
import Image from "next/image";
import { Modal } from "@/components/Modal/useModal";
import { Field, Form, Formik } from "formik";
import { Input, TextAreaInput, UnitInput } from "@/components/Input";
import { Button, GrayButton } from "@/components/Button";
import React, { useState } from "react";
import Link from "next/link";
import { CallCalling, Eye } from "iconsax-react";

import {
  addPatientHistory,
  addPatientVitals,
  addPatientExamination,
} from "@/services/requests/authRequests";
import { alert } from "@/components/Alert";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const StartOPD = () => {
  const router = useRouter();

  const services = [
    { title: "Take Vitals Test Now", image: "/vitals.png" },

    { title: "Take Medical History", image: "/history.png" },
    { title: "Take Chief Complaint", image: "/complain.png" },
    { title: "Physical Examination", image: "/examination.png" },
    { title: "Lab Tests And Radiology", image: "/chemistry.png" },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold text-gray-700">
              Welcome To OPD Service
            </h1>
            <p className="text-xl font-normal text-gray-400">
              Please click on any of the below services to continue tests for
              patient
            </p>
          </div>
          <div className="flex items-center space-x-4 px-6 py-3 shadow-E500 ring-1 ring-gray-600 ring-opacity-25 rounded-xl bg-white">
            <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
              <Image src="/avatar.png" alt="Avatar" layout="fill" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl text-gray-800 font-semibold">
                {router.query.name}
              </span>
              <span className="text-xl text-gray-400 font-medium">
                {router.query.id}
              </span>
              <span className="text-red-800 text-base text-right font-extrabold">
                Patient
              </span>
            </div>
          </div>
        </div>

        <hr />
        <div className="space-y-4 pb-4">
          <h1 className="text-xl font-semibold text-gray-700">
            Basic Services
          </h1>
          <div className="flex flex-wrap justify-between">
            {services.map((service) => (
              <Modal key={service.title}>
                <Modal.Button type="open">
                  <button
                    key={service.title}
                    className="w-64 px-4 py-14 cursor-pointer flex flex-col items-center space-y-4 justify-center bg-white hover:ring-blue-500 hover:ring-2 ring-1 ring-gray-600 ring-opacity-25 rounded-lg shadow-E300 focus:shadow-E100  transition-all duration-200"
                  >
                    <div className="h-32 w-32 relative">
                      <Image src={service.image} alt="Vitals" layout="fill" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-700">
                      {service.title}
                    </h1>
                  </button>
                </Modal.Button>
                <Modal.Content>
                  <Modal.Title>{service.title}</Modal.Title>
                  {service.title === "Take Vitals Test Now" && (
                    <VitalModalContent />
                  )}
                  {service.title === "Take Medical History" && (
                    <HistoryModalContent />
                  )}
                  {service.title === "Take Chief Complaint" && (
                    <ChiefComplaintModal />
                  )}
                  {service.title === "Physical Examination" && (
                    <ExaminationFormModal />
                  )}
                  {service.title === "Lab Tests And Radiology" && (
                    <LabTestModal />
                  )}
                </Modal.Content>
              </Modal>
            ))}
          </div>
        </div>
        <hr />
        <div className="space-y-4">
          <button
            className="primaryBgColor hover:bg-sky-600 flex text-white py-1 px-3 text-base mr-2 rounded-sm"
            onClick={() =>
              router.push(
                `/service/opd/videocall?name=${router.query.name}&id=${router.query.id}`
              )
            }
          >
            <h2 className="text-white text-2xl pt-3 font-semibold mr-3 p-2">
              {" "}
              Initiate Call
            </h2>
            <CallCalling
              size={40}
              variant="Broken"
              color="white"
              className="text-center p-2 pt-3"
            />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(StartOPD);

const LabTestModal = () => {
  const { handleSubmit } = useForm({
    mode: "onBlur",
  });

  // const [imageFile, setImageFile] = useState(null);

  // const handleChange = e => {
  //   e.persist(); // per ParmentierChristophe react-hook-form/issues/274
  //   // console.log("e: ", e);
  //   setImageFile(e.target.files[0]); // oops. Nothing is there..
  //   console.log(imageFile);
  // };
  const router = useRouter();
  const fileInput = React.createRef<any>();

  const onSubmitFn = (data: any) => {
    // event.preventDefault();  // I believe react-hook-form handles this
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0]
    );
    const fd = new FormData();
    // eslint-disable-next-line guard-for-in
    for (const key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }
    fd.append(
      "test1",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    fd.append(
      "test2",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    fd.append(
      "test3",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );
    fd.append(
      "test4",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );
    fd.append(
      "test5",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );
    fd.append(
      "test6",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    fd.append(
      "test7",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    fd.append(
      "test8",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    console.log(fd);
    axios
      .put(
        `https://shg-backend1.herokuapp.com/shg/api/patients/tests/${router.query.id}`,
        fd,
        {
          onUploadProgress: (ProgressEvent: any) => {
            toast.loading("Uploading Images", {
              id: "toastId",
            });
          },
        }
      )
      .then((res) => {
        toast.dismiss("toastId");

        toast.success("Uploaded");
        console.log("response from server: ", res);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitFn)}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <label htmlFor="test1">Upload Test1 Photo</label>
          <input
            type="file"
            id="test1"
            name="test1"
            placeholder={"Upload"}
            multiple
            ref={fileInput}
            required
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test2">Upload Test2 Photo</label>
          <input
            type="file"
            id="test2"
            name="test2"
            multiple
            ref={fileInput}
            required
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test3">Upload Test3 Photo</label>
          <input
            type="file"
            id="test3"
            name="test3"
            multiple
            ref={fileInput}
            required
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test4">Upload Test4 Photo</label>
          <input
            type="file"
            id="test4"
            name="test4"
            multiple
            ref={fileInput}
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test5">Upload Test5 Photo</label>
          <input
            type="file"
            id="test5"
            name="test5"
            multiple
            ref={fileInput}
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <h1 className="text-2xl underline text-gray-700">Radiology Tests</h1>
        <div>
          <label htmlFor="test6">Upload Test6 Photo</label>
          <input
            type="file"
            id="test6"
            name="test6"
            multiple
            ref={fileInput}
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test7">Upload test7 Photo</label>
          <input
            type="file"
            id="test7"
            name="test7"
            multiple
            ref={fileInput}
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>
        <div>
          <label htmlFor="test8">Upload Test8 Photo</label>
          <input
            type="file"
            id="test8"
            name="test8"
            multiple
            ref={fileInput}
            className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm pr-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
          />
        </div>

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </>
  );
};

const VitalModalContent = () => {
  const router = useRouter();

  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: addPatientVitals(
            {
              temp: Number(values.temperature),
              pulse: Number(values.pulse),
              rr: Number(values.respiratoryRate),
              bp_systolic: Number(values.systolic),
              bp_diastolic: Number(values.diastolic),
              spo_2: Number(values.spo2),
            },
            router.query.id
          ),
          type: "promise",
          msgs: {
            loading: "Updating Vitals",
            success: "Updated Patient Vitals",
            error: (data) => `${data}`,
          },
        });
      }}
      initialValues={{
        temperature: "",
        pulse: "",
        respiratoryRate: "",
        systolic: "",
        diastolic: "",
        spo2: "",
      }}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          <Field
            name="temperature"
            label="Temperature"
            placeholder="Enter Temperature °F"
            unit="°F"
            type="number"
            component={UnitInput}
          />
          <Field
            name="pulse"
            label="Heart Pulse Rate"
            component={UnitInput}
            placeholder="Enter Blood Pulse"
            unit="bpm"
            type="number"
          />
          <Field
            name="respiratoryRate"
            label="Respiratory Rate"
            placeholder="Enter Bpm"
            type="number"
            unit="/min"
            component={UnitInput}
          />
          <div className="flex space-x-4">
            <Field
              name="systolic"
              label="BP systolic"
              component={UnitInput}
              placeholder="Enter Blood Pressure"
              type="number"
              unit="mmhg"
            />{" "}
            <Field
              name="diastolic"
              label="BP diastolic"
              component={UnitInput}
              placeholder="Enter Blood Pressure"
              type="number"
              unit="mmhg"
            />
          </div>
          <Field
            name="spo2"
            label="SPO2"
            component={UnitInput}
            placeholder="Enter SPO2"
            type="number"
            unit="%"
          />
        </div>
        <Button>Submit</Button>
      </Form>
    </Formik>
  );
};

const HistoryModalContent = () => {
  const router = useRouter();
  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: addPatientHistory(
            {
              medical: values.medicalHistory,
              surgical: values.surgicalHistory,
              gyeObs: values.gyeHistory,
            },
            router.query.id
          ),
          type: "promise",
          msgs: {
            loading: "Updating Patient History",
            success: "Updated Patient History",
            error: (data) => `${data}`,
          },
        });
      }}
      initialValues={{
        medicalHistory: "",
        surgicalHistory: "",
        gyeHistory: "",
      }}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          <Field
            name="medicalHistory"
            label="Medical History"
            component={TextAreaInput}
            placeholder="Enter Medical History"
          />
          <Field
            name="surgicalHistory"
            label="Surgical History"
            component={TextAreaInput}
            placeholder="Enter Surgical History"
          />
          <Field
            name="gyeHistory"
            label="GYE/OBS History"
            component={TextAreaInput}
            placeholder="Enter Surgical History"
          />
        </div>
        <Button>Submit</Button>
      </Form>
    </Formik>
  );
};

const ChiefComplaintModal = () => {
  const [input, setInput] = useState([1]);

  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        chiefComplaint1: "",
        chiefComplaint2: "",
        chiefComplaint3: "",
        chiefComplaint4: "",
        chiefComplaint5: "",
      }}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          {input.map((ele) => (
            <Field
              key={ele}
              name={`chiefComplaint${ele}`}
              label="Chief Complaint"
              component={Input}
              placeholder="Enter Chief Complaint"
            />
          ))}
        </div>
        <div className="flex space-x-4">
          <GrayButton
            type="button"
            onClick={() => setInput([...input, input[input.length - 1] + 1])}
          >
            Add
          </GrayButton>
          <Button>Submit</Button>
        </div>
      </Form>
    </Formik>
  );
};

const ExaminationFormModal = () => {
  const router = useRouter();
  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: addPatientExamination(
            {
              general: values.generalCondition,
              chest: values.chest,
              cvs: values.cvs,
              cns: values.cns,
              perabominal: values.perabdominal,
              local: values.localExamination,
            },
            router.query.id
          ),
          type: "promise",
          msgs: {
            loading: "Updating Patient Examination",
            success: "Updated Patient Examination",
            error: (data) => `${data}`,
          },
        });
      }}
      initialValues={{
        generalCondition: "",
        chest: "",
        cvs: "",
        cns: "",
        perabdominal: "",
        localExamination: "",
      }}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          <Field
            name={"generalCondition"}
            label="General Condition"
            component={Input}
            placeholder="Enter General Condition"
          />
          <Field
            name={"chest"}
            label="Chest"
            component={Input}
            placeholder="Enter Chest Condition"
          />
          <Field
            name={"cvs"}
            label="Cardiovascular (CVS)"
            component={Input}
            placeholder="Enter CVS Condition"
          />
          <Field
            name={"cns"}
            label="Neurological (CNS)"
            component={Input}
            placeholder="Enter cns Condition"
          />
          <Field
            name={"perabominal"}
            label="Perabdominal"
            component={Input}
            placeholder="Enter Perabdominal Condition"
          />
          <Field
            name={"localExamination"}
            label="Local Examination"
            component={Input}
            placeholder="Enter Local Condition"
          />
        </div>
        <Button>Submit</Button>
      </Form>
    </Formik>
  );
};
