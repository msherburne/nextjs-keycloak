import { signIn, signOut } from "next-auth/react";

async function keycloakSessionLogout() {
  try {
    await fetch("/api/auth/logout", { method: "GET" });
  } catch (error) {
    console.log(error);
  }
}

export const signInWithKeycloak = () => {
  signIn("keycloak");
};

export const signOutWithKeycloak = () => {
  keycloakSessionLogout().then(() => signOut({ callbackUrl: "/" }));
};
