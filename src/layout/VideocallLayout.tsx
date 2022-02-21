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

export const VideocallLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
  ];

  return (
    <div>
      <div className="flex w-full min-h-screen" suppressHydrationWarning={true}>
        <div className="fixed w-1/6 bg-white h-screen shadow-E500 z-20 flex items-start py-16 flex-col space-y-12">
          <nav className="w-full">
            <hr className=" border-gray-100 h-0.5 mb-6" />
            <ul className="w-full px-4 space-y-1">
              {SidebarNavItems.map((item) => (
                <Link href={item.route} key={item.name} passHref>
                  <li
                    className={`${
                      router.pathname === item.route
                        ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white py-3"
                        : " text-gray-700 hover:text-gray-900 py-3  hover:bg-gray-100"
                    }   cursor-pointer flex items-center text-xl font-medium px-4 rounded-xl   w-full space-x-4`}
                  >
                    <span>{item.icon}</span>
                    <span> {item.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <hr className=" border-gray-100 mt-3 h-0.5" />
          </nav>
        </div>
        <div className="w-5/6 ml-[16.67%] bg-gray-50 h-screen">
          <div className="w-full bg-white shadow-md pl-5">
            <Image src="/logo.png" alt="logo" width={250} height={100} />
          </div>
          <div className="px-12 py-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
