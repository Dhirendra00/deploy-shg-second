import { LoginPage } from "@/modules/auth/LoginPage";
import { useAuthStore } from "@/modules/auth/useAuthStore";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const Home: NextPage = () => {
  const router = useRouter();
  const hasTokens = useAuthStore((s) => !!s.refreshToken && !!s.accessToken);
  const token = useAuthStore((s) => s.accessToken);
  const decoded: any = token && jwtDecode(token);

  useEffect(() => {
    if (hasTokens && decoded.payload.userType === "doctor") {
      router.push("/doctor");
    } else if (hasTokens && decoded.payload.userType === "hfstaff") {
      router.push("/dashboard");
    }
  }, [hasTokens, router, decoded]);

  return !hasTokens ? (
    <div className="bg-gray-100 h-screen flex items-center justify-center w-full">
      <LoginPage />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Home;
