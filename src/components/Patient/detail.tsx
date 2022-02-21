import Image from "next/image";
import { Fragment, useState } from "react";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CallCalling } from "iconsax-react";

const people = [
  { id: 1, date: "2077/10/12", unavailable: false },
  { id: 2, date: "2077/5/10", unavailable: false },
  { id: 3, date: "2077/2/10", unavailable: false },
  { id: 4, date: "2077/1/10", unavailable: true },
  { id: 5, date: "2076/5/6", unavailable: false },
];

export const Details = ({
  name,
  patient_id,
  gender,
  age,
  caste,
  district,
  service,
  temperature,
  pulse,
  respiratoryRate,
  bpSystolic,
  bpDiastolic,
  spo,
  medicalHistory,
  surgicalHistory,
  gyeObs,
}) => {
  const [selected, setSelected] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 divide-x-2 divide-dashed">
        <div className="col-start-1 col-end-10  p-3">
          <div className="flex">
            <div className="w-60 shadow-E500 ml-3 bg-white rounded-3xl p-4 ">
              <h1 className="text-xl   text-dark">Heart Rate</h1>
              <h2 className="text-3xl mt-2 font-bold text-dark">
                {respiratoryRate}
              </h2>
              {/* <Image
                src="/heartrate.jpeg"
                alt="Avatar"
                width={70}
                height={50}
              /> */}
            </div>
            <div className="w-60 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white">Temperature</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">
                {temperature}
              </h2>
            </div>
            <div className="w-60 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white"> Blood Pressure Systolic</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">
                {bpSystolic}/{bpDiastolic}
              </h2>
            </div>

            {/* <div className="flex-col">
              <div className="w-60 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
                <h1 className="text-xl   text-white">
                  Blood Pressure Systolic
                </h1>
                <h2 className="text-3xl mt-2 font-bold text-white">
                  {bpSystolic}/{bpDiastolic}
                </h2>
              </div>
             
            </div> */}

            <div className="w-60 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white">SPO2</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">{spo}</h2>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-4/6 h-96 shadow-E500 ml-3  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white">Pulse</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">{pulse}</h2>
            </div>
            {/* medical history */}
            <div className="w-2/6 shadow-E500 ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl font-semibold text-white text-center">
                Medical history
              </h1>
              <hr></hr>
              <h2 className="text-3xl mt-2 pt-3 font-bold text-white ">
                {medicalHistory}
              </h2>
              <hr></hr>
              <h2 className="text-3xl mt-2 font-bold text-white">
                {surgicalHistory}
              </h2>
              <hr></hr>
              <h2 className="text-3xl mt-2 font-bold text-white">{gyeObs}</h2>
            </div>
            {/* medical history */}
          </div>
          {/* physical examination and chief complaints */}
          <div className="flex mt-5">
            <div className="w-3/6 shadow-E500 ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white">Physical Examination</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">
                {respiratoryRate}
              </h2>
            </div>
            <div className="w-3/6 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
              <h1 className="text-xl   text-white">Chief Complaints</h1>
              <h2 className="text-3xl mt-2 font-bold text-white">
                {temperature}
              </h2>
            </div>
          </div>
          {/* physical examination and chief complaints */}
        </div>
        <div className="col-start-10 col-end-13">
          {/* user profile */}
          <div className="w-6/6 shadow-E500 ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold text-white text-center">
                {name}
              </h1>
              <button className="bg-red-600 text-white ml-4 mb-1 py-1 px-3 text-base mr-2 rounded-sm">
                <Link
                  href={`/doctor/videocall?patientId=${patient_id}`}
                  passHref
                >
                  <CallCalling
                    size={20}
                    variant="Broken"
                    color="white"
                    className="text-center"
                  />
                </Link>
              </button>
            </div>
            <hr></hr>
            <div className="flex flex-col  space-y-4">
              <div className="w-32 h-32 mt-3 relative self-center  items-center rounded-full overflow-hidden shadow-E400">
                <Image src="/avatar.png" alt="Avatar" layout="fill" />
              </div>
              <div className="flex flex-col items-center space-x-1">
                <h2 className="text-xl font-semibold bg-white mt-2 text-dark pl-3 pr-3 rounded uppercase">
                  {service}
                </h2>
              </div>
              <div className="flex flex-col flex-start space-x-1">
                <h2 className="text-xl mt-1 text-white uppercase">
                  Patient ID: {patient_id}
                </h2>
                <h2 className="text-xl mt-1 text-white uppercase">
                  Gender: {gender}
                </h2>
                <h2 className="text-xl mt-1 text-white uppercase">
                  Age: {age}
                </h2>
                <h2 className="text-xl mt-1 text-white uppercase">
                  Caste: {caste}
                </h2>
                <h2 className="text-xl mt-1 text-white uppercase">
                  District: {district}
                </h2>
                <div className="flex">
                  <h2 className="text-xl mt-2 text-white uppercase">Visit: </h2>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative ml-3 mt-1  w-full">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span className="block text-white truncate backdrop-opacity-10 ">
                          {selected.date}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "text-amber-900 bg-amber-100"
                                    : "text-gray-900"
                                }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? "font-medium" : "font-normal"
                                    } block truncate`}
                                  >
                                    {person.date}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active
                                          ? "text-amber-600"
                                          : "text-amber-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>
          </div>
          {/* user profile */}
          {/* Refered Test */}
          <div className="w-6/6 shadow-E500 mt-5 ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
            <h1 className="text-xl font-semibold text-white text-center">
              Refered Test
            </h1>
            <hr></hr>
            <div className="mt-3 flex justify-between p-2">
              <span>
                <h1>ecg.svg</h1>
              </span>
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                ECG TEST
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
          {/* Refered Test*/}
        </div>
      </div>
    </>
  );
};

// export const MedicalHistory = ({medicalHistory,surgicalHistory,gyeObs}) => {
//    return (
//       <>
//        <div className="w-2/6 shadow-E500 ml-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
//                <h1 className="text-xl font-semibold text-white text-center">Medical history</h1>
//                <hr></hr>
//                <h2 className="text-3xl mt-2 font-bold text-white">{medicalHistory }</h2>
//                <h2 className="text-3xl mt-2 font-bold text-white">{surgicalHistory }</h2>
//                <h2 className="text-3xl mt-2 font-bold text-white">{gyeObs }</h2>
//             </div>
//       </>
//    )
// }
// export const ChiefComplaint = ({ }) => {
//    return (
//       <>
//        <div className="w-3/6 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
//                <h1 className="text-xl   text-white">Chief Complaints</h1>
//                <h2 className="text-3xl mt-2 font-bold text-white">{ }</h2>
//             </div>
//       </>
//    )
// }

// export const PhysicalExamination = ({ }) => {
//    return (
//       <>
//        <div className="w-3/6 shadow-E500 ml-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-4 ">
//                <h1 className="text-xl   text-white">Physical Examination</h1>
//                <h2 className="text-3xl mt-2 font-bold text-white">{ }</h2>
//             </div>
//       </>
//    )
// }
