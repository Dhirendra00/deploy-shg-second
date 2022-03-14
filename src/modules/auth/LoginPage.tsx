import LoginForm from "./LoginForm";
import Image from "next/image";

export const LoginPage = () => {
  return (
    <div className="bg-white h-[80vh] shadow-2xl w-full max-w-[90rem] rounded-3xl flex overflow-hidden relative sm:max-w-[30rem]">
      <div className="sm:hidden block">
        <Image
          src="/login1.svg"
          alt="image"
          layout="fill"
          className="z-[0]"
          objectPosition="2rem"
        />
      </div>
      <div className="w-3/5 flex flex-col justify-center  px-16 space-y-24 z-10 sm:w-full sm:px-4 sm:space-y-5 sm:justify-start sm:py-8">
        <div>
          <h1 className="text-7xl font-light text-gray-850">Welcome Back</h1>
          <p className="text-2xl font-medium text-gray-400">
            Hello, Please login to continue to Smart Health Dashboard
          </p>
        </div>
        <div className="w-2/3 sm:w-full">
          <LoginForm />
        </div>
        <div className="text-base font-semibold text-gray-500 sm:py-4">
          *By logging in you accept our{" "}
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            Terms of Service.
          </span>
        </div>
      </div>
      <div className="w-2/5 bg-blue-300 sm:hidden"></div>
    </div>
  );
};
