import { alert } from "@/components/Alert";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { onLogin } from "@/services/promises/authPromise";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  return (
    <Formik
      onSubmit={async (
        values: FormData,
        { setSubmitting }: FormikHelpers<FormData>
      ) => {
        await alert({
          type: "promise",
          promise: onLogin(values.email, values.password),
          msgs: {
            loading: "Logging In",
            success: () => {
              router.push("/dashboard");
              return "Login Successfull";
            },
            error: (data: any) => `${data}`,
          },
        });

        setSubmitting(false);
      }}
      initialValues={{ email: "", password: "" }}
    >
      <Form className="space-y-6">
        <div className="space-y-4">
          <Field name="email" component={Input} placeholder="Enter Email" />
          <Field
            name="password"
            type="password"
            component={Input}
            placeholder="Enter Password"
          />
        </div>
        <div className="space-y-4">
          <hr />
          <div className="flex justify-between items-center">
            <Button>Log In</Button>

            <Link href="/auth" passHref>
              <span className="text-xl font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
                Forgot Your Password?
              </span>
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
