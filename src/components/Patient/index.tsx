import React from "react";
import { Tag } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { CallCalling, Eye } from "iconsax-react";

interface IPatientProps {
  name: string;
  service: string;
  status: boolean;
  gender: string;
  id: string;
}

export const Patient = ({
  name,
  service,
  status,
  gender,
  id,
}: IPatientProps) => {
  const router = useRouter();
  return (
    <div className="h-44 shadow-E500 bg-white rounded-sm p-4 w-1/7">
      <div className="flex justify-start">
        <div className="w-20 h-20  relative rounded-full overflow-hidden shadow-E400">
          <Image src="/avatar.png" alt="Avatar" layout="fill" />
        </div>

        <div className="flex-col pl-4 w-full">
          <div className="capitalize text-2xl font-semibold text-gray-700 align-middle">
            {name}
          </div>
          <hr className="mt-2 mb-3"></hr>
          <div className=" flex justify-between ">
            <div>
              <div className="capitalize font-medium text-gray-500 text-lg">
                {id}
              </div>
              <div className="capitalize text-base font-medium text-gray-500">
                {gender}
              </div>
              <div className="capitalize text-base font-medium text-gray-500">
                {service} Service
              </div>
              {/* <div>{status && <Tag color="success">Active</Tag>}</div> */}
            </div>
            <div className="flex-col">
              <div>
                <button className="primaryBgColor text-white py-1 px-3 text-base mr-2 rounded-sm">
                  <Link href={`/doctor/videocall?patientId=${id}`} passHref>
                    <CallCalling
                      size={20}
                      variant="Broken"
                      color="white"
                      className="text-center"
                    />
                  </Link>
                </button>
              </div>
              <div>
                <button className="primaryBgColor text-white py-1 px-3 text-base rounded-sm">
                  <Link
                    href={`/doctor/patient-details?patientId=${id}`}
                    passHref
                  >
                    <Eye
                      size={20}
                      variant="Broken"
                      color="white"
                      className="text-center"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
