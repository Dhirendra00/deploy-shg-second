import { useAuthStore } from "@/modules/auth/useAuthStore";
import Image from "next/image";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { Building, Home3, UserTag } from "iconsax-react";
import { useRouter } from "next/router";
import { SignOut } from "phosphor-react";
import Link from "next/link";
import { alert } from "@/components/Alert";
import { onLogout } from "@/services/promises/authPromise";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const DoctorLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const access = useAuthStore().accessToken;
  const data = access && jwt_decode<any>(access);

  const router = useRouter();

  const SidebarNavItems = [
    {
      name: "Home",
      route: "/doctor",
      icon: (
        <Home3
          size={28}
          variant="Broken"
          color={router.pathname === "/dashboard" ? "white" : "gray"}
        />
      ),
    },
    {
      name: "Appointment",
      route: "/doctor/patients",
      icon: (
        <UserTag
          size={28}
          variant="Broken"
          color={router.pathname === "/dashboard" ? "white" : "gray"}
        />
      ),
    },
    {
      name: "Health Facility",
      route: "/doctor/health-facility",
      icon: (
        <Building
          size={28}
          variant="Broken"
          color={router.pathname === "/service/opd" ? "white" : "gray"}
        />
      ),
    },
  ];

  const handleLogout = async () => {
    await alert({
      type: "promise",
      promise: onLogout(),
      msgs: {
        loading: "Logging Out",
        success: () => {
          router.push("/");
          return "Logged Out Successfully";
        },
        error: (data: any) => `${data}`,
      },
    });
  };

  return (
    <div suppressHydrationWarning={true}>
      <div className="flex w-full min-h-screen" suppressHydrationWarning={true}>
        <div className="fixed w-1/6 bg-white h-screen shadow-E500 z-20 flex items-start py-16 flex-col space-y-12 sm:-translate-x-80 sm:absolute">
          <div className="self-center flex flex-col items-center space-y-4">
            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-E400">
              <Image src="/avatar.png" alt="Avatar" layout="fill" />
            </div>
            <div className="flex flex-col items-center space-x-1">
              <div className="capitalize text-4xl font-semibold text-gray-700">
                {data.payload && data.payload.firstName}{" "}
                {data.payload && data.payload.lastName}
              </div>
              <div className="text-lg font-medium text-gray-500">
                {data.payload && data.payload.email}
              </div>
              <div className="text-base font-medium text-white primaryBgColor px-2 py-1 rounded-lg">
                {data.payload && data.payload.userType}
              </div>
            </div>
          </div>

          {/** SIDEBAR NAV */}
          <nav className="w-full overflow-y-auto">
            <hr className=" border-gray-100 h-0.5 mb-6" />
            <ul className="w-full px-4 space-y-1">
              {SidebarNavItems.map((item) => (
                <Link href={item.route} key={item.name} passHref>
                  <li
                    className={`${
                      router.pathname === item.route
                        ? "primaryBgColor text-white hover:bg-sky-600 hover:text-white py-3"
                        : " text-gray-700 hover:text-gray-900 py-3  hover:bg-gray-100"
                    }   cursor-pointer flex items-center text-xl font-medium px-4 rounded-xl   w-full space-x-4`}
                  >
                    <span>{item.icon}</span>
                    <span> {item.name}</span>
                  </li>
                </Link>
              ))}
              <div
                className="  cursor-pointer flex items-center text-xl font-medium px-4 rounded-xl   w-full space-x-4 text-gray-700 hover:text-gray-900 py-3  hover:bg-gray-100"
                onClick={handleLogout}
              >
                <SignOut weight="fill" size={32} />
                <div className="">Log Out</div>
              </div>
            </ul>
            <hr className=" border-gray-100 mt-3 h-0.5" />
          </nav>

          <div className="px-8 pb-2">
            <div className="text-sm text-gray-600">
              &copy; Copyright Smart Health Global 2021
            </div>
          </div>
        </div>

        <div className="w-5/6 ml-[16.67%] bg-gray-50 h-screen sm:ml-0 sm:w-full">
          <div className="w-full bg-white shadow-md pl-5">
            <div className="flex sm:justify-between">
              <div className="hamburger mt-9 mb-9 rounded pt-3 pb-3 pl-4 pr-4 bg-sky-500/100 cursor-pointer hidden sm:block">
                <div className="line h-0.5 w-6 my-2 bg-white"></div>
                <div className="line h-0.5 w-6 my-2 bg-white"></div>
                <div className="line h-0.5 w-6 my-2 bg-white"></div>
              </div>
              <div className="logo mr-3">
                <Image src="/logo.png" alt="logo" width={250} height={100} />
              </div>
            </div>
          </div>
          <div className="px-12 py-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
