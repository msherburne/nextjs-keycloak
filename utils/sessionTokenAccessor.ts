import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { decrypt } from "@/utils/encryption";

export async function getAccessToken() {
  const session = (await getServerSession(authOptions)) as any;
  if (session) {
    const accessToken = decrypt(session.accessToken);
    return accessToken;
  }
  return null;
}

export async function getIdToken() {
  const session = (await getServerSession(authOptions)) as any;
  if (session) {
    const idToken = decrypt(session.idToken);
    console.log("idToken: ");
    console.log(idToken);
    return idToken;
  }
  return null;
}
