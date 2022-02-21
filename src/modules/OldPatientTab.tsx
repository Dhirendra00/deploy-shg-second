import React from "react";
import { Button } from "@/components/Button";
import { PrimaryInput } from "@/components/Input";
import { useState } from "react";
import Image from "next/image";
import { searchPatient } from "@/services/requests/authRequests";
import ReactLoading from "react-loading";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { Table, Space } from "antd";

export const OldPatientTab = () => {
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState<any>([]);
  const [patients, setPatients] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const display = [{}];

  const columns = [
    {
      title: "Patient ID",
      dataIndex: "patient_id",
      key: "patient_id",
      render: (patient_id) => (
        <span className="text-base secondaryBgColor px-3 py-1 text-white rounded-lg ">
          {patient_id}
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "District/Province",
      dataIndex: "district/province",
      key: "district",
      render: (text, record) => (
        <Space size="middle">
          <span>
            {record.district} - {record.province}
          </span>
        </Space>
      ),
    },

    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      render: (text) => (
        <Space size="middle">
          <span className="text-base secondaryBgColor px-3 py-1 text-white rounded-lg ">
            {text.toUpperCase()}
          </span>
        </Space>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: (text, record) => (
        <Space size="middle">
          <button
            className="px-5 py-1 primaryBgColor text-base text-white rounded-md"
            onClick={() =>
              router.push(
                `/service/opd/start?name=${record.name}&id=${record.patient_id}`
              )
            }
          >
            View
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="ml-4 w-2/3 py-2 space-y-8">
      <form
        className="flex items-end space-x-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          await searchPatient(id, number)
            .then((response) => {
              console.log(response.data.patient);
              setData(response.data.patient);
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              setError(error);
            });
        }}
      >
        <div className="w-1/5">
          <PrimaryInput
            name="Search Id"
            placeholder="Search By Id"
            value={id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
            required={false}
          />
        </div>
        <div className="w-1/3">
          <PrimaryInput
            name="Search Number"
            required={false}
            placeholder="Search Patient By Number"
            value={number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
          />
        </div>
        <Button>Search</Button>
      </form>

      {loading ? (
        <div className="flex items-center justify-center h-60 w-1/2">
          <ReactLoading type={"spin"} color="blue" />
        </div>
      ) : data.length === 0 ? (
        <div className="pt-12 ml-32 space-y-8 flex flex-col justify-center">
          {/* <div className="relative w-1/3 h-[30vh]"> */}

          {/* </div> */}
          <div className="text-blue-500 font-semibold text-xl tracking-wider">
            {error}
          </div>
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          className="shadow-E500 rounded-lg overflow-hidden"
        />
      )}
      <div>
        <Table
          columns={columns}
          dataSource={data}
          className="shadow-E500 rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
};
