import React from "react";
import withAuth from "@/shared/withAuth";
import { AdminLayout } from "@/layout/AdminLayout";
// import {Accordion} from "@/components/Accordion/useAccordion"
// import {Formik,Field, Form} from "formik"
// import {UnitInput} from "@/components/Input"
// import { Button } from "@/components/Button";

const DoctorDashboard: React.FC = () => {
  return (
    <AdminLayout>
      This will be later designed for home page for doctors
    </AdminLayout>
  );
};

export default withAuth(DoctorDashboard);
