"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  async function keycloakSessionLogout() {
    try {
      await fetch("/api/auth/logout", { method: "GET" });
    } catch (error) {
      console.log(error);
    }
  }

  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col">
      <p>Home: {status}</p>
      <p>Session: {JSON.stringify(session)}</p>
    </div>
  );
}
