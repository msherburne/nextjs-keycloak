"use client";

import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
import Authentication from "./authentication";

type Props = {
  children?: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <Authentication>{children}</Authentication>
    </SessionProvider>
  );
}
