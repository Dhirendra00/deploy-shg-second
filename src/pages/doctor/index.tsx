import React from "react";
import withAuth from "@/shared/withAuth";
import { DoctorLayout } from "@/layout/DoctoLayout";
import { Schedule } from "@/components/Schedule";
import { Patient } from "@/components/Patient";
import { useEffect, useState } from "react";
import { fetchAllPatient } from "@/services/requests/authRequests";
import { Button } from "@/components/Button";
import { DoctorBadge, Badge } from "@/components/Badge";
import { TickCircle, CloseCircle } from "iconsax-react";
import { UserCircle } from "phosphor-react";

// import {Accordion} from "@/components/Accordion/useAccordion"
// import {Formik,Field, Form} from "formik"
// import {UnitInput} from "@/components/Input"
// import { Button } from "@/components/Button";

const DoctorDashboard: React.FC = () => {
  const [patients, setPatients] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllPatient().then((data: any) => {
      setPatients(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <DoctorLayout>
      <Schedule key=" " day=" " starttime=" " endtime=" " />
      <div className="bg-gray-50 border-2 mt-5">
        <div className="flex p-4 w-full justify-between">
          <span>
            <h1 className="font-bold text-2xl">Appointment</h1>
            <h2 className="font-normal text-2xl">Patient For Today.</h2>
          </span>
          <span>
            <Button>View All</Button>
          </span>
        </div>
        <div className="flex justify-start mb-3">
          <span className="flex bg-orange-600 rounded-lg ml-2 p-2">
            <UserCircle size={25} color="white" className="ml-3" />
            <DoctorBadge
              title="Total patient"
              color="text-white"
              number="85"
            ></DoctorBadge>
          </span>
          <span className="flex bg-green-600 rounded-lg ml-3 p-2">
            <TickCircle
              size={25}
              variant="Broken"
              color="white"
              className="ml-3"
            />
            <DoctorBadge
              title="Treated patient"
              color="text-white"
              number="20"
            ></DoctorBadge>
          </span>
          <span className="flex bg-red-600 rounded-lg ml-3 p-2">
            <CloseCircle
              size={25}
              variant="Broken"
              color="white"
              className="ml-3"
            />
            <DoctorBadge
              title="Remaining patient"
              color="text-white"
              number="65"
            ></DoctorBadge>
          </span>
        </div>
        <hr></hr>
        <div className=" px-2 py-2  grid grid-cols-4 gap-2 grid-rows-3 ">
          {patients &&
            patients.slice(0, 12).map((patient) => (
              <Patient
                key={patient.id}
                name={patient.name}
                gender={patient.gender}
                service={patient.Service}
                status={true}
                id={patient.patient_id}
                // address={patient.patient_address}
              />
            ))}
        </div>
      </div>
    </DoctorLayout>
  );
};

export default withAuth(DoctorDashboard);
