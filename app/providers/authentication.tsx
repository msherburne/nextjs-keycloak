import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Authentication({ children }: { children: any }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    signIn("keycloak");
  }
  if (!session) {
    return <div>Session not found</div>;
  }
  return (
    <>
      {children}
      {status}
    </>
  );
}
