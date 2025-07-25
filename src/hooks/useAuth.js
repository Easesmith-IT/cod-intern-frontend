// hooks/useAuth.ts
"use client";

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
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;
    queryClient.setQueryData(AUTH_KEY, isLoggedIn);
  }, [queryClient]);

  return result;
};

export const useSetLogin = () => {
  const queryClient = useQueryClient();

  const login = (token) => {
    localStorage.setItem("token", token);
    queryClient.setQueryData(AUTH_KEY, true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.setQueryData(AUTH_KEY, false);
  };

  return { login, logout };
};
