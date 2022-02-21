import { Formik, Form, Field } from "formik";

import { Input } from "@/components/Input";
import { newPassword } from "@/services/requests/authRequests";
const NewPasswordPage = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="h-[40vh] bg-white shadow-2xl w-full max-w-[60rem] rounded-3xl px-6 py-5">
        <h1 className="text-3xl text-gray-600 mb-4">Reset Your Password</h1>

        <div className="w-2/3">
          <Formik
            onSubmit={(values) => {
              alert({
                promise: newPassword({
                  password: values.password,
                  confirmPassword: values.confirm,
                }),
                type: "promise",
                msgs: {
                  loading: "Updating your new Password..",
                  success: "Your password has been reset.",
                  error: (data) => `${data}`,
                },
              });
            }}
            initialValues={{ password: "", confirm: "" }}
          >
            <Form className="space-y-4">
              <Field
                name="password"
                component={Input}
                placeholder="New Password"
                type="password"
              />
              <Field
                name="confirm"
                component={Input}
                placeholder="Confirm New Password"
                type="password"
              />

              <button className="bg-blue-600 px-4 py-3 rounded-md text-xl text-gray-50">
                Reset
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
