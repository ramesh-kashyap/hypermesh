import CryptoJS from "crypto-js";

// Ensure 32-byte key using SHA-256
const deriveKey = (password) => CryptoJS.SHA256(password);

// Generate IV (16 bytes)
const generateIV = () => CryptoJS.lib.WordArray.random(16);

const SECRET_KEY = deriveKey("Rameshk");

// Encrypt Function
export const encryptID = (id) => {
  if (!id) return null;

  const iv = generateIV();
  const encrypted = CryptoJS.AES.encrypt(id.toString(), SECRET_KEY, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return CryptoJS.enc.Base64.stringify(iv.concat(encrypted.ciphertext)); // Store IV + Ciphertext
};

// Decrypt Function
export const decryptID = (encryptedID) => {
  if (!encryptedID) {
    console.error("Error: Encrypted data is null or undefined");
    return null;
  }

  try {
    const rawData = CryptoJS.enc.Base64.parse(encryptedID);
    if (!rawData || rawData.sigBytes < 32) {
      throw new Error("Invalid encrypted data format");
    }

    const extractedIV = CryptoJS.lib.WordArray.create(rawData.words.slice(0, 4));
    const encryptedMessage = CryptoJS.lib.WordArray.create(rawData.words.slice(4));

    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedMessage }, SECRET_KEY, {
      iv: extractedIV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption Error:", error.message);
    return null;
  }
};