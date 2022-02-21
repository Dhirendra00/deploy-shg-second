import { useAuthStore } from "@/modules/auth/useAuthStore";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const withAuth = (WrappedComponent: React.FC) => {
  const RequireAuthentication = (props: React.Props<any>) => {
    const storeAccessToken = useAuthStore.getState().accessToken;
    const [isAuthenticated, setIsAuthenticated] = useState(!!storeAccessToken);
    const router = useRouter();

    useEffect(() => {
      setIsAuthenticated(!!storeAccessToken);
      return useAuthStore.subscribe(
        () => {
          router.push(`/`);
        },
        (s) => s.refreshToken
      );
    }, [router, storeAccessToken]);

    useEffect(() => {
      if (!isAuthenticated) router.push(`/`);
    }, [isAuthenticated, router]);

    return storeAccessToken ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Loading</div>
    );
  };
  return RequireAuthentication;
};

export default withAuth;
