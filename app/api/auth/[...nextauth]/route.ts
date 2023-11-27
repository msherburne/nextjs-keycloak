import NextAuth, { AuthOptions } from "next-auth";
import KeyCloakProvider from "next-auth/providers/keycloak";
import { jwtDecode } from "jwt-decode";
import { encrypt } from "@/utils/encryption";

export const authOptions: AuthOptions = {
  providers: [
    KeyCloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_REALM_URL as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      const nowTimestamp = Math.floor(Date.now() / 1000);

      if (account) {
        token.decoded = jwtDecode(account.access_token);
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        return token;
      } else if (nowTimestamp < token.expiresAt) {
        return token;
      } else {
        console.log("Token expired, refreshing token");
        return token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.accessToken = encrypt(token.accessToken);
      session.idToken = encrypt(token.idToken);
      session.roles = token.decoded.realm_access.roles;
      session.decoded = token.decoded;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
