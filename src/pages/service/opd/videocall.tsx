import Image from "next/image";
import HfPatientDetailTab from "@/modules/HfPatientDetailTab";
import { Button, GrayButton } from "@/components/Button";
import withAuth from "@/shared/withAuth";

import React, { FormEvent, useState } from "react";
import { JitsiMeet } from "../../../components/videocall/jitsi-meet";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

enum CallStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN PROGRESS",
  ENDED = "ENDED",
}

function Videocall() {
  const router = useRouter();
  const [roomName, setRoomName] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.PENDING);

  const callInProgress = callStatus === CallStatus.IN_PROGRESS;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCallStatus(CallStatus.IN_PROGRESS);
  };

  const onCallEnd = () => {
    setCallStatus(CallStatus.ENDED);
  };
  return (
    <div>
      <div className="flex w-full min-h-screen" suppressHydrationWarning={true}>
        <div className="fixed w-1/4 bg-white h-screen shadow-E500 z-20 flex items-start pb-4 pt-2 flex-col space-y-12">
          <nav className="w-full overflow-y-auto">
            <ul className="w-full px-4 space-y-1">
              <Link href="/dashboard" passHref>
                <div className=" w-10 h-10 rounded-full text-gray-700 text-center border-2 mt-1 ml-3 hover:bg-gray-700 hover:text-white hover:cursor-pointer ">
                  <ArrowLeftOutlined />
                </div>
              </Link>
              <HfPatientDetailTab />
            </ul>
          </nav>
        </div>
        <div className="w-3/4 ml-[25%] bg-gray-50 h-screen">
          <div className="w-full bg-white shadow-md pl-5">
            <Image src="/logo.png" alt="logo" width={250} height={100} />
          </div>
          <div className="px-12 py-12">
            <div className="App">
              {/* <header className="header">
  
      </header> */}
              {!callInProgress && (
                <article className="body">
                  <form onSubmit={onSubmit}>
                    <section className="formField">
                      <div className="flex items-center w-full justify-between">
                        <div className="flex flex-col">
                          <p className="text-xl font-normal text-gray-400">
                            Connect With Our Available Doctor&apos;s
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 px-6 py-3 shadow-E500 ring-1 ring-gray-600 ring-opacity-25 rounded-xl bg-white">
                          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                            <Image
                              src="/avatar.png"
                              alt="Avatar"
                              layout="fill"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-2xl text-gray-800 font-semibold">
                              <input
                                // type="text"
                                // placeholder= {router.query.name}
                                value={router.query.name}
                                onChange={(e) => setDisplayName(e.target.value)}
                              />
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
                      <hr className="mt-3 mb-3" />
                      <h1 className="text-2xl font-bold underline decoration-sky-500">
                        Our Available Doctors For Today&apos;s!
                      </h1>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="h-56 shadow-E500 bg-white rounded-sm p-4 mr-5">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-4">
                              <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                                <Image
                                  src="/avatar.png"
                                  alt="Avatar"
                                  layout="fill"
                                />
                              </div>
                              <div className="flex-col">
                                <div className="capitalize text-3xl font-semibold text-gray-700">
                                  Dr. Manoj
                                </div>
                                <div className="capitalize text-xl font-medium text-gray-500">
                                  OPD Service
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="primaryBgColor w-3/12 mt-8 text-white py-3 px-10 text-lg rounded-sm">
                            <input
                              type="checkbox"
                              value="Manoj"
                              id="Manoj"
                              // checked={displayName === "Dhirendra"}
                              onChange={(e) => setRoomName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="h-56 shadow-E500 bg-white rounded-sm p-4 mr-5">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-4">
                              <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                                <Image
                                  src="/avatar.png"
                                  alt="Avatar"
                                  layout="fill"
                                />
                              </div>
                              <div className="flex-col">
                                <div className="capitalize text-3xl font-semibold text-gray-700">
                                  Dr. Santosh
                                </div>
                                <div className="capitalize text-xl font-medium text-gray-500">
                                  OPD Service
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="primaryBgColor w-3/12 mt-8 text-white py-3 px-10 text-lg rounded-sm">
                            <input
                              type="checkbox"
                              value="Santosh"
                              id="Santosh"
                              // checked={displayName === "Dhirendra"}
                              onChange={(e) => setRoomName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="h-56 shadow-E500 bg-white rounded-sm p-4 mr-5">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-4">
                              <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                                <Image
                                  src="/avatar.png"
                                  alt="Avatar"
                                  layout="fill"
                                />
                              </div>
                              <div className="flex-col">
                                <div className="capitalize text-3xl font-semibold text-gray-700">
                                  Dr. Dhirendra
                                </div>
                                <div className="capitalize text-xl font-medium text-gray-500">
                                  OPD Service
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="primaryBgColor w-3/12 mt-8 text-white py-3 px-10 text-lg rounded-sm">
                            <input
                              type="checkbox"
                              value="Dhirendra"
                              id="Dhirendra"
                              // checked={displayName === "Dhirendra"}
                              onChange={(e) => setRoomName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="h-56 shadow-E500 bg-white rounded-sm p-4 mr-5">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-4">
                              <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
                                <Image
                                  src="/avatar.png"
                                  alt="Avatar"
                                  layout="fill"
                                />
                              </div>
                              <div className="flex-col">
                                <div className="capitalize text-3xl font-semibold text-gray-700">
                                  Dr. Sagar
                                </div>
                                <div className="capitalize text-xl font-medium text-gray-500">
                                  OPD Service
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="primaryBgColor w-3/12 mt-8 text-white py-3 px-10 text-lg rounded-sm">
                            <input
                              type="checkbox"
                              value="Sagar"
                              id="Sagar"
                              // checked={displayName === "Dhirendra"}
                              onChange={(e) => setRoomName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="formActions mt-5">
                      <Button>Initiate Call</Button>
                    </section>
                  </form>
                </article>
              )}
              {callInProgress && (
                <JitsiMeet
                  roomName={roomName}
                  displayName={displayName}
                  onEnd={onCallEnd}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Videocall);
