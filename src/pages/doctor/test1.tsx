import { Accordion } from "@/components/Accordion/useAccordion";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Button, GrayButton } from "@/components/Button";
import { Edit } from "iconsax-react";
import { UnitInput, TextAreaInput, Input } from "@/components/Input";
import { Modal } from "@/components/Modal/useModal";
import withAuth from "@/shared/withAuth";
import Image from "next/image";
import {
  addPatientHistory,
  addPatientVitals,
  addPatientExamination,
  updatePatientVitals,
  updatePatientHistory,
  fetchSinglePatient,
} from "@/services/requests/authRequests";
import { alert } from "@/components/Alert";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Badge, DoctorBadge } from "@/components/Badge";

const PatientDetailTab = () => {
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query && router.query.patientId;
  console.log(id);

  useEffect(() => {
    fetchSinglePatient(id).then((data) => {
      console.log(data);
      setPatient(data.data);
      setLoading(false);
    });
  }, [id]);

  const Spinner = () => {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="p-2 flex justify-evenly">
            <div className="border-2 border-purple-500  p-5  w-3/12 bg-white shadow-E400 rounded-md ">
              <h1 className="mb-2 text-xl">Personal Details</h1>
              <table className="border-collapse border border-gray-300 table-auto w-full text-left">
                <tr>
                  <th className="border border-gray-200 p-2">Name</th>
                  <td className="border border-gray-200 text-xl p-2">
                    {patient && patient.name}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">Gender</th>
                  <td className="border border-gray-200 text-xl p-2 capitalize">
                    {patient && patient.gender}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">Age</th>
                  <td className="border border-gray-200 text-xl p-2">
                    {patient && patient.age}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">Caste</th>
                  <td className="border border-gray-200 text-xl p-2">
                    {patient && patient.caste}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">District</th>
                  <td className="border border-gray-200 text-xl p-2">
                    {patient && patient.district}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">Address</th>
                  <td className="border border-gray-200 text-base p-2 ">
                    {`${patient && patient.province}, ${
                      patient && patient.district
                    }, ${patient && patient.palika}`}
                  </td>
                </tr>

                <tr>
                  <th className="border border-gray-200 p-2">Service</th>
                  <td className="border border-gray-200 text-xl p-2">
                    {
                      <Badge
                        title={patient && patient.service}
                        color="bg-blue-500"
                      />
                    }
                  </td>
                </tr>
              </table>
            </div>
            <div className="shadow-E400 w-8/12 bg-white p-3 rounded-md border-2 border-purple-500 flex justify-center items-center">
              <h1 className="text-2xl">More details here soon..</h1>
            </div>
          </div>
          <hr className="mt-3 mb-3" />
          <h1 className="text-2xl">Medical Details</h1>
          <div className="flex flex-col">
            <div className="flex">
              <Accordion>
                <Accordion.Button>Vitals</Accordion.Button>
                <Accordion.Panel>
                  <div className="relative">
                    <Modal>
                      <Modal.Button type="open">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                          <Edit />
                        </div>
                      </Modal.Button>
                      <Modal.Content>{<VitalModalContent />}</Modal.Content>
                    </Modal>

                    {patient && patient.vitals === null ? (
                      "No vitals recorded"
                    ) : (
                      <div className="px-6">
                        <table className=" table-auto w-full text-left">
                          <tr>
                            <th className="border border-gray-200 p-2">
                              Temperature
                            </th>
                            <td className="border border-gray-200 text-xl p-2  ">
                              {patient && patient.vitals.temperature}&#176;F
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-200 p-2">
                              Pulse
                            </th>
                            <td className="border border-gray-200 text-xl p-2">
                              {patient && patient.vitals.pulse} BPM
                            </td>
                          </tr>

                          <tr>
                            <th className="border border-gray-200 p-2">
                              Respiratory Rate
                            </th>
                            <td className="border border-gray-200 text-xl p-2">
                              {patient && patient.vitals.respiratory_rate}
                              &#47;min
                            </td>
                          </tr>

                          <tr>
                            <th className="border border-gray-200 p-2">
                              BP Systolic
                            </th>
                            <td className="border border-gray-200 text-xl p-2">
                              {patient && patient.vitals.bp_systolic}&#47;mmhg
                            </td>
                          </tr>

                          <tr>
                            <th className="border border-gray-200 p-2">
                              BP Diastolic
                            </th>
                            <td className="border border-gray-200 text-xl p-2">
                              {patient && patient.vitals.bp_diastolic}&#47;mmhg
                            </td>
                          </tr>

                          <tr>
                            <th className="border border-gray-200 p-2">SPO2</th>
                            <td className="border border-gray-200 text-xl p-2">
                              {patient && patient.vitals.spo_2}%
                            </td>
                          </tr>
                        </table>
                      </div>
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion>
              <Accordion>
                <Accordion.Button>Medical History</Accordion.Button>
                <Accordion.Panel>
                  <div className="relative">
                    <Modal>
                      <Modal.Button type="open">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                          <Edit />
                        </div>
                      </Modal.Button>
                      <Modal.Content>{<HistoryModalContent />}</Modal.Content>
                    </Modal>

                    {patient && patient.history === null ? (
                      "No history recorded"
                    ) : (
                      <div className=" w-11/12 space-y-2">
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                          <h1 className="text-xl text-purple-500">
                            Medical History
                          </h1>
                          {patient && patient.history.medical_history}
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                          <h1 className="text-xl text-purple-500">
                            Surgical History
                          </h1>
                          {patient && patient.history.surgical_history}
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                          <h1 className="text-xl text-purple-500">
                            Gye OBS History
                          </h1>
                          {patient && patient.history.gye_obs}
                        </div>
                      </div>
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion>
              <Accordion>
                <Accordion.Button>Chief Complients</Accordion.Button>
                <Accordion.Panel>
                  <div className="relative">
                    <Modal>
                      <Modal.Button type="open">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                          <Edit />
                        </div>
                      </Modal.Button>
                      <Modal.Content>{<ChiefComplaintModal />}</Modal.Content>
                    </Modal>

                    <div className=" w-11/12 space-y-2">
                      No chief complients recorded yet
                    </div>
                  </div>
                </Accordion.Panel>
              </Accordion>
            </div>

            <div className="flex w-8/12">
              <Accordion>
                <Accordion.Button>Refered Tests</Accordion.Button>
                <Accordion.Panel>
                  {patient && patient.tests === null ? (
                    "No refered tests yet"
                  ) : (
                    <div className="border-2 border-purple-500 rounded-md p-2 text-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugit, excepturi.
                    </div>
                  )}
                </Accordion.Panel>
              </Accordion>

              <Accordion>
                <Accordion.Button>Physical Examination</Accordion.Button>
                <Accordion.Panel>
                  <div className="relative">
                    <Modal>
                      <Modal.Button type="open">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                          <Edit />
                        </div>
                      </Modal.Button>
                      <Modal.Content>{<ExaminationFormModal />}</Modal.Content>
                    </Modal>

                    <div className=" w-11/12 space-y-2">
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">
                          General Condition
                        </h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga delectus error rem omnis reiciendis tenetur odit at
                        amet laboriosam voluptas minima veritatis alias ipsa
                        facilis recusandae provident illo .
                      </div>
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">Chest</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat, explicabo?
                      </div>
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">CVS</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga delectus error rem omnis reiciendis tenetur odit at
                        amet laboriosam voluptas minima veritatis alias ipsa
                        facilis
                      </div>
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">CNS</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga delectus error rem omnis reiciendis tenetur odit at
                        amet
                      </div>
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">Perabominal</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga delectus error rem omnis reiciendis tenetur odit at
                        amet
                      </div>
                      <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-purple-500">
                        <h1 className="text-xl text-purple-500">
                          Local Examination
                        </h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga delectus error rem omnis reiciendis tenetur odit at
                        amet
                      </div>
                    </div>
                  </div>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>

          <div className="flex mt-11 justify-between">
            <div className="w-5/12 bg-white p-6 border-2 border-purple-500 rounded-md shadow-E400">
              <h1 className="text-3xl text-semibold text-purple-500 m-0">
                Test Results
              </h1>
              <hr className="mb-6 mt-2 border-2" />
              {patient && patient.tests === null ? (
                "No tests record uploaded yet"
              ) : (
                <div className=" grid grid-cols-3 gap-4">
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <Image
                      src="/test.jpg"
                      alt="test"
                      width={150}
                      height={200}
                    />
                  </div>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <Image
                      src="/test.jpg"
                      alt="test"
                      width={150}
                      height={200}
                    />
                  </div>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <Image
                      src="/test.jpg"
                      alt="test"
                      width={150}
                      height={200}
                    />
                  </div>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <Image
                      src="/test.jpg"
                      alt="test"
                      width={150}
                      height={200}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
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

const VitalModalContent = () => {
  const router = useRouter();

  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: updatePatientVitals(
            {
              temp: Number(values.temperature),
              pulse: Number(values.pulse),
              rr: Number(values.respiratoryRate),
              bp_systolic: Number(values.systolic),
              bp_diastolic: Number(values.diastolic),
              spo_2: Number(values.spo2),
            },
            router.query.patientId
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
        <Button>Update</Button>
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
          promise: updatePatientHistory(
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
        <Button>Update</Button>
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
        <Button>Update</Button>
      </Form>
    </Formik>
  );
};

const TestReferalForm = () => {
  return (
    <Formik
      initialValues={{ test1: "", test2: "", test3: "", test4: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          <Field
            name={"test1"}
            label="Test 1"
            component={Input}
            placeholder="test 1"
            inputSize="small"
          />
          <Field
            name={"test2"}
            label="Test 2"
            component={Input}
            placeholder="test 2"
            inputSize="small"
          />
          <Field
            name={"test3"}
            label="Test 3"
            component={Input}
            placeholder="test 3"
            inputSize="small"
          />
          <Field
            name={"test4"}
            label="Test 4"
            component={Input}
            placeholder="test 4"
            inputSize="small"
          />
        </div>
        <Button buttonSize="small">Submit</Button>
      </Form>
    </Formik>
  );
};

export default withAuth(PatientDetailTab);
