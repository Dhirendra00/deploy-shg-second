import React from "react";
import withAuth from "@/shared/withAuth";
import { DoctorLayout } from "@/layout/DoctoLayout";
import PatientDetailTab from "@/modules/PatientDetailTab";
// import DoctorPatientDetailTab  from "@/modules/DoctorPatientDetailTab";

const DoctorDashboard: React.FC = () => {
  return (
    <DoctorLayout>
      <PatientDetailTab />
    </DoctorLayout>
  );
};

export default withAuth(DoctorDashboard);
