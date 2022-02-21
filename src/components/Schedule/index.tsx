import React from "react";
import { Tag } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Clock } from "iconsax-react";
interface AdoctorSchedule {
  day: string;
  starttime: string;
  endtime: string;
}

export const Schedule = ({ day, starttime, endtime }: AdoctorSchedule) => {
  const router = useRouter();
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
      <div className="col-span-2 shadow-E500 bg-white rounded-sm p-4 mr-5">
        <h1 className="font-bold text-2xl">Welcome Mr. Doctor</h1>
        <span className="flex">
          <Clock size={25} variant="Broken" color="green" />
          <h2 className="font-normal text-2xl ml-2">
            {" "}
            Working schedule for this week
          </h2>
        </span>
        <hr></hr>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="pb-3 pt-3 text-xl">Sunday</th>
              <th className="pb-3 pt-3 text-xl">Monday</th>
              <th className="pb-3 pt-3 text-xl">Tuesday</th>
              <th className="pb-3 pt-3 text-xl">Wednesday</th>
              <th className="pb-3 pt-3 text-xl">Thursday</th>
              <th className="pb-3 pt-3 text-xl">Friday</th>
              <th className="pb-3 pt-3 text-xl">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
              <td>
                <p>10:00-12:00</p>
                <p>13:00-17:00</p>
              </td>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
              <td>
                <p>8:00-12:00</p>
                <p>15:00-17:00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="shadow-E500 bg-white rounded-sm p-4 ml-5">
        <h1 className="font-bold text-2xl">My Schedule</h1>
        <p>
          You can customize your schedule for comming days. Note: not allowed to
          customize for today.
        </p>
        <div className="flex justify-center py-8">
          <button className="center bg-amber-400 w-full p-3 text-white text-xl font-bold hover:bg-amber-700">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
