import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const PatientPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>This is patient details page with id {router.query.patientId}</div>
  );
};

export default PatientPage;
