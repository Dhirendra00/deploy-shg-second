import Image from "next/image";
import DoctorPatientDetailTab from "@/modules/DoctorPatientDetailTab";
import { Button, GrayButton } from "@/components/Button";
import React, { FormEvent, useState } from "react";
import { JitsiMeet } from "../../components/videocall/jitsi-meet";
import { ArrowLeftOutlined } from "@ant-design/icons";
import withAuth from "@/shared/withAuth";

import Link from "next/link";

enum CallStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN PROGRESS",
  ENDED = "ENDED",
}

function Videocall() {
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
            <ul className="w-full px-2">
              <Link href="/doctor" passHref>
                <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-700  border-2 mt-1 ml-3 hover:bg-gray-700 hover:text-white hover:cursor-pointer ">
                  <ArrowLeftOutlined />
                </div>
              </Link>

              <DoctorPatientDetailTab />
            </ul>
          </nav>
        </div>
        <div className="w-3/4 ml-[25%] bg-gray-50 h-screen">
          <div className="w-full bg-white shadow-md pl-5">
            <Image src="/logo.png" alt="logo" width={250} height={100} />
          </div>
          <div className="px-12 py-12">
            <div className="App">
              <header className="header">
                {/* <img
          src="https://previews.123rf.com/images/microone/microone1907/microone190700323/128173861-video-conference-people-group-on-computer-screen-taking-with-colleague-video-conferencing-and-online.jpg"
          alt="logo"
        /> */}
                <h1>Connect With Patient</h1>
              </header>
              {!callInProgress && (
                <article className="body">
                  <form onSubmit={onSubmit}>
                    <section className="formField">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Room's name"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                      />
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
