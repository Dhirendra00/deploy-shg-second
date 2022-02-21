import { Input } from "@/components/Input";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { BackwardItem } from "iconsax-react";
export const PasswordResetPage = () => {
  return (
    <div className="bg-white h-[80vh] shadow-2xl w-full max-w-[90rem] rounded-3xl flex overflow-hidden relative">
      <Image
        src="/forgot-password.svg"
        alt="image"
        layout="fill"
        className="z-[0]"
        objectPosition="25rem"
      />

      <div className="w-3/5 flex flex-col justify-center px-16 space-y-6 z-10">
        <div>
          <p className="text-3xl font-medium text-gray-400">
            Forgot Your Password?
          </p>
        </div>
        <div className="w-2/3">
          <Formik
            onSubmit={(values) => console.log(values)}
            initialValues={{ email: "" }}
          >
            <Form className="space-y-4">
              <Field name="email" component={Input} placeholder="Enter Email" />

              <button className="bg-blue-600 px-4 py-3 rounded-md text-xl text-gray-50">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <div className=" flex text-base font-semibold text-gray-500 hover:text-gray-700">
          <BackwardItem />
          <Link href="/" passHref>
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};
