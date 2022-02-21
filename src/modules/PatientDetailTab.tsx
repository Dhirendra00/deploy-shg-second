import { Accordion } from "@/components/Accordion/useAccordion";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Button, GrayButton } from "@/components/Button";
import { Edit } from "iconsax-react";
import { UnitInput, TextAreaInput, Input } from "@/components/Input";
import { Details } from "@/components/Patient/detail";
import { Modal } from "@/components/Modal/useModal";
import withAuth from "@/shared/withAuth";
import Image from "next/image";
import {
  addPatientHistory,
  addPatientVitals,
  addPatientExamination,
  updatePatientVitals,
  updatePatientHistory,
  fetchSinglePatient,
} from "@/services/requests/authRequests";
import { alert } from "@/components/Alert";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Badge, DoctorBadge } from "@/components/Badge";

const PatientDetailTab = () => {
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query && router.query.patientId;
  console.log(id);

  useEffect(() => {
    fetchSinglePatient(id).then((data) => {
      console.log(data);
      setPatient(data.data);
      setLoading(false);
    });
  }, [id]);

  const Spinner = () => {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Details
          patient_id={patient && patient.patient_id}
          name={patient && patient.name}
          gender={patient && patient.gender}
          age={patient && patient.age}
          caste={patient && patient.caste}
          district={patient && patient.district}
          service={patient && patient.service}
          temperature={patient && patient.vitals.temperature}
          pulse={patient && patient.vitals.pulse}
          respiratoryRate={patient && patient.vitals.respiratory_rate}
          bpSystolic={patient && patient.vitals.bp_systolic}
          bpDiastolic={patient && patient.vitals.bp_diastolic}
          spo={patient && patient.vitals.spo_2}
          medicalHistory={patient && patient.history.medical_history}
          surgicalHistory={patient && patient.history.surgical_history}
          gyeObs={patient && patient.history.gye_obs}
        ></Details>
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

const VitalModalContent = () => {
  const router = useRouter();

  return (
    <Formik
      onSubmit={(values) => {
        alert({
          promise: updatePatientVitals(
            {
              temp: Number(values.temperature),
              pulse: Number(values.pulse),
              rr: Number(values.respiratoryRate),
              bp_systolic: Number(values.systolic),
              bp_diastolic: Number(values.diastolic),
              spo_2: Number(values.spo2),
            },
            router.query.patientId
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
          promise: updatePatientHistory(
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

export default withAuth(PatientDetailTab);
