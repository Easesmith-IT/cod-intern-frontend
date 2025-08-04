// hooks/useAuth.ts
"use client";

import { readCookie } from "@/lib/readCookie";
import { setAuthCookies } from "@/lib/setCookies";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const AUTH_KEY = ["isLoggedIn"];

export const useAuth = () => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: AUTH_KEY,
    queryFn: () => false, // dummy, we override it
    initialData: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    const isAuthenticated = readCookie("isAuthenticated");

    console.log("isAuthenticated", isAuthenticated);

    const isLoggedIn = !!isAuthenticated;
    queryClient.setQueryData(AUTH_KEY, isLoggedIn);
  }, [queryClient]);

  return result;
};

export const useSetLogin = () => {
  const queryClient = useQueryClient();

  const login = () => {
    queryClient.setQueryData(AUTH_KEY, true);
  };

  const logout = () => {
    setAuthCookies({
      accessToken: "",
      refreshToken: "",
      userInfo: "",
      isAuthenticated: false,
    });
    queryClient.setQueryData(AUTH_KEY, false);
  };

  return { login, logout };
};
