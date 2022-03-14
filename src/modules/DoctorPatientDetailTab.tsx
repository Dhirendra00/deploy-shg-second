import { Accordion } from "@/components/Accordion/useAccordion";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Transition, Dialog } from "@headlessui/react";
import { Button, GrayButton } from "@/components/Button";
import { Edit } from "iconsax-react";
import { UnitInput, TextAreaInput, Input } from "@/components/Input";
import { ReferedTest } from "@/components/Switch";
import { Modal } from "@/components/Modal/useModal";
import withAuth from "@/shared/withAuth";
import Image from "next/image";
import {
  addPatientHistory,
  addPatientVitals,
  addPatientExamination,
  fetchSinglePatient,
} from "@/services/requests/authRequests";
import { alert } from "@/components/Alert";
import React, { useState, useEffect, Fragment } from "react";
import { Spin } from "antd";

const DoctorPatientDetailTab = () => {
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      console.log(router.query);
      fetchSinglePatient(router.query.patientId).then((data) => {
        console.log(data);
        setPatient(data.data);
        setLoading(false);
      });
    }
  }, [router]);

  const Spinner = () => {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="mt-5 pb-3 mb-3">
            <hr></hr>
            <h1 className="text-2xl text-center p-3">Medical Details</h1>
            <hr></hr>
            <div className="flex flex-col">
              <div>
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
                                96.7&#176;F
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-gray-200 p-2">
                                Pulse
                              </th>
                              <td className="border border-gray-200 text-xl p-2">
                                96.7&#176;F
                              </td>
                            </tr>

                            <tr>
                              <th className="border border-gray-200 p-2">
                                Respiratory Rate
                              </th>
                              <td className="border border-gray-200 text-xl p-2">
                                96.7&#176;F
                              </td>
                            </tr>

                            <tr>
                              <th className="border border-gray-200 p-2">
                                BP Systolic
                              </th>
                              <td className="border border-gray-200 text-xl p-2">
                                96.7&#176;F
                              </td>
                            </tr>

                            <tr>
                              <th className="border border-gray-200 p-2">
                                BP Diastolic
                              </th>
                              <td className="border border-gray-200 text-xl p-2">
                                96.7&#176;F
                              </td>
                            </tr>

                            <tr>
                              <th className="border border-gray-200 p-2">
                                SPO2
                              </th>
                              <td className="border border-gray-200 text-xl p-2">
                                96.7&#176;F
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
                          <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                            <h1 className="text-xl text-dark">
                              Medical History
                            </h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga delectus error rem omnis reiciendis
                            tenetur odit at amet laboriosam voluptas minima
                            veritatis alias ipsa facilis recusandae provident
                            illo sequi ducimus, ea labore dignissimos
                            praesentium exercitationem earum. Soluta fugiat
                            deserunt minima minus vero reiciendis eius, officiis
                            natus similique eaque eum itaque.
                          </div>
                          <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                            <h1 className="text-xl text-dark">
                              Surgical History
                            </h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga delectus error rem omnis reiciendis
                            tenetur odit at amet laboriosam voluptas minima
                            veritatis alias ipsa facilis recusandae provident
                            illo sequi ducimus, ea labore dignissimos
                            praesentium exercitationem earum. Soluta fugiat
                            deserunt minima minus vero reiciendis eius, officiis
                            natus similique eaque eum itaque.
                          </div>
                          <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                            <h1 className="text-xl text-dark">
                              Gye OBS History
                            </h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga delectus error rem omnis reiciendis
                            tenetur odit at amet laboriosam voluptas minima
                            veritatis alias ipsa facilis recusandae provident
                            illo sequi ducimus, ea labore dignissimos
                            praesentium exercitationem earum. Soluta fugiat
                            deserunt minima minus vero reiciendis eius, officiis
                            natus similique eaque eum itaque.
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

              <div>
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
                        <Modal.Content>
                          {<ExaminationFormModal />}
                        </Modal.Content>
                      </Modal>

                      <div className=" w-11/12 space-y-2">
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">
                            General Condition
                          </h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga delectus error rem omnis reiciendis tenetur
                          odit at amet laboriosam voluptas minima veritatis
                          alias ipsa facilis recusandae provident illo .
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">Chest</h1>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Repellat, explicabo?
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">CVS</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga delectus error rem omnis reiciendis tenetur
                          odit at amet laboriosam voluptas minima veritatis
                          alias ipsa facilis
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">CNS</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga delectus error rem omnis reiciendis tenetur
                          odit at amet
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">Perabominal</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga delectus error rem omnis reiciendis tenetur
                          odit at amet
                        </div>
                        <div className="rounded-md shadow-E300 px-3 py-2 border-2 border-black">
                          <h1 className="text-xl text-dark">
                            Local Examination
                          </h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga delectus error rem omnis reiciendis tenetur
                          odit at amet
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion>

                <Accordion>
                  <Accordion.Button>Refered Tests</Accordion.Button>
                  <Accordion.Panel>
                    <ReferedTest title="CBC"></ReferedTest>
                    <ReferedTest title="RBS"></ReferedTest>
                    <ReferedTest title="CRP"></ReferedTest>
                    <ReferedTest title=" RA Factor"></ReferedTest>
                    <ReferedTest title="WIDAL"></ReferedTest>
                    <ReferedTest title="MP"></ReferedTest>
                    <ReferedTest title="DENGUE"></ReferedTest>
                    <ReferedTest title="SCRUBS TYPUS"></ReferedTest>
                    <ReferedTest title="TB (Sputum for AFB)"></ReferedTest>
                    <ReferedTest title="URNINE"></ReferedTest>
                    <ReferedTest title="STOOL"></ReferedTest>
                    <ReferedTest title="X-RAY"></ReferedTest>
                    <ReferedTest title="ULTRASOUND"></ReferedTest>
                    <ReferedTest title="ECG"></ReferedTest>

                    {patient && patient.tests === null ? (
                      " "
                    ) : (
                      <div className="border-2 border-black rounded-md p-2 text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugit, excepturi.
                      </div>
                    )}
                  </Accordion.Panel>
                </Accordion>
              </div>

              <div>
                <Accordion>
                  <Accordion.Button>Treatment</Accordion.Button>
                  <Accordion.Panel>
                    <div className="relative">
                      <Modal>
                        <Modal.Button type="open">
                          <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                            <Edit />
                          </div>
                        </Modal.Button>
                        <Modal.Content>{<TreatmentModal />}</Modal.Content>
                      </Modal>

                      <div className=" w-11/12 space-y-2">
                        No treatment recorded yet
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion>

                <Accordion>
                  <Accordion.Button>Advice and Follow up</Accordion.Button>
                  <Accordion.Panel>
                    <div className="relative">
                      <Modal>
                        <Modal.Button type="open">
                          <div className="w-8 h-8 rounded-full border-2 border-gray-400  flex justify-center items-center text-xl absolute left-96 hover:cursor-pointer">
                            <Edit />
                          </div>
                        </Modal.Button>
                        <Modal.Content>{<AdviceModalContent />}</Modal.Content>
                      </Modal>

                      <div className=" w-11/12 space-y-2">
                        No chief complients recorded yet
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="flex mt-11 justify-between">
            <div className="w-full bg-white p-6 border-2 border-gray-700 rounded-md shadow-E400">
              <h1 className="text-3xl text-semibold text-dark m-0">
                Test Results
              </h1>
              <hr className="mb-6 mt-2 border-2" />
              {patient && patient.tests === null ? (
                "No tests record uploaded yet"
              ) : (
                <div className=" grid grid-cols-2 gap-4">
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <button type="button" onClick={openModal} className="">
                      <Image
                        src="/test.jpg"
                        alt="test"
                        width={150}
                        height={200}
                      />
                    </button>
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              <div className="flex justify-between">
                                ECG Test
                                <button
                                  type="button"
                                  className="inline-flex mb-2 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}
                                >
                                  x
                                </button>
                              </div>
                            </Dialog.Title>
                            <hr></hr>
                            <div className="mt-2 w-5/6 h-96">
                              <Image src="/hr.svg" alt="Avatar" layout="fill" />
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <button type="button" onClick={openModal} className="">
                      <Image
                        src="/test.jpg"
                        alt="test"
                        width={150}
                        height={200}
                      />
                    </button>
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              <div className="flex justify-between">
                                ECG Test
                                <button
                                  type="button"
                                  className="inline-flex mb-2 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}
                                >
                                  x
                                </button>
                              </div>
                            </Dialog.Title>
                            <hr></hr>
                            <div className="mt-2 w-5/6 h-96">
                              <Image src="/hr.svg" alt="Avatar" layout="fill" />
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <button type="button" onClick={openModal} className="">
                      <Image
                        src="/test.jpg"
                        alt="test"
                        width={150}
                        height={200}
                      />
                    </button>
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              <div className="flex justify-between">
                                ECG Test
                                <button
                                  type="button"
                                  className="inline-flex mb-2 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}
                                >
                                  x
                                </button>
                              </div>
                            </Dialog.Title>
                            <hr></hr>
                            <div className="mt-2 w-5/6 h-96">
                              <Image src="/hr.svg" alt="Avatar" layout="fill" />
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                  <div className="border-2 border-gray-500  rounded-md object-cover h-52 w-40 shadow-E500 p-2 hover:cursor-pointer">
                    <button type="button" onClick={openModal} className="">
                      <Image
                        src="/test.jpg"
                        alt="test"
                        width={150}
                        height={200}
                      />
                    </button>
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              <div className="flex justify-between">
                                ECG Test
                                <button
                                  type="button"
                                  className="inline-flex mb-2 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}
                                >
                                  x
                                </button>
                              </div>
                            </Dialog.Title>
                            <hr></hr>
                            <div className="mt-2 w-5/6 h-96">
                              <Image src="/hr.svg" alt="Avatar" layout="fill" />
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
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

// treatment modal
const TreatmentModal = () => {
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
        <div className="flex">
          {input.map((ele) => (
            <Field
              key={ele}
              name={`Medicine`}
              label="Medicine"
              component={Input}
              placeholder="Enter Medicine Name"
            />
          ))}
        </div>
        <div className="flex">
          {input.map((ele) => (
            <Field
              key={ele}
              name={`Dose`}
              label="Dose"
              component={Input}
              placeholder="Enter Dose"
            />
          ))}

          {input.map((ele) => (
            <Field
              key={ele}
              name={`Time`}
              label="Time"
              component={Input}
              placeholder="Enter Time"
            />
          ))}
          {input.map((ele) => (
            <Field
              key={ele}
              name={`Days`}
              label="Days"
              component={Input}
              placeholder="Enter Days"
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
// treatment modal

// advice and follow up modal
const AdviceModalContent = () => {
  const router = useRouter();
  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: addPatientExamination(
            {
              general: values.advice,
              chest: values.followup,
              cvs: values.refer,
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
        advice: "",
        followup: "",
        refer: "",
      }}
    >
      <Form className="space-y-8">
        <div className="space-y-6">
          <Field
            name={"advice"}
            label="Advice"
            component={TextAreaInput}
            placeholder="Enter Advice"
          />
          <Field
            name={"followup"}
            label="Follow Up"
            component={TextAreaInput}
            placeholder="Enter Follow Up"
          />
          <Field
            name={"refer"}
            label="Refer"
            component={TextAreaInput}
            placeholder="Enter Refer"
          />
        </div>
        <Button>Update</Button>
      </Form>
    </Formik>
  );
};

// advice and follow up modal

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

export default withAuth(DoctorPatientDetailTab);
