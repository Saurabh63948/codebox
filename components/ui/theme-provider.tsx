"use client";

import * as React from "react";
import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailsContext";
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user, isLoaded } = useUser();
  const hasRun = React.useRef(false);
  const[userDetail,setUserDetail]=useState();
  React.useEffect(() => {
    if (!isLoaded || !user || hasRun.current) return;

    hasRun.current = true;

    const createNewUser = async () => {
  try {
    const result=await axios.post("/api/user");

    setUserDetail(result?.data)
  } catch (error) {
    console.error("User creation failed", error);
  }
};

    createNewUser();
  }, [isLoaded, user]);

  return <NextThemesProvider {...props}>
  <UserDetailContext.Provider value={{userDetail,setUserDetail}} >{children}</UserDetailContext.Provider></NextThemesProvider>;
}
