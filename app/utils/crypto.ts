import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.ENCRYPTION_SECRET || "";
/**
 * Encrypts an object using AES encryption.
 * @param obj - The object to encrypt.
 * @returns The encrypted string.
 */
export function encryptObject(obj: object): string {
  const json = JSON.stringify(obj);
  const encrypted = CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
  return encrypted;
}

/**
 * Decrypts an encrypted string back to an object.
 * @param encryptedData - The encrypted string.
 * @returns The decrypted object.
 */
export function decryptObject(encryptedData: string): object {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
}
