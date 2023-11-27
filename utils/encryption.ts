import Cryptr from "cryptr";

export function encrypt(text: string) {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const cryptr = new Cryptr(secretKey as string);

  const encryptedString = cryptr.encrypt(text);
  return encryptedString;
}

export function decrypt(text: string) {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const cryptr = new Cryptr(secretKey as string);

  const decryptedString = cryptr.decrypt(text);
  console.log("decryptedString: ");
  console.log(decryptedString);
  return decryptedString;
}
