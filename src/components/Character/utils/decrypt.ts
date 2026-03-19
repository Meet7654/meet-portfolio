async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string,
  onProgress?: (percent: number) => void
): Promise<ArrayBuffer> => {
  // Start key generation in parallel with fetch
  const keyPromise = generateAESKey(password);

  const response = await fetch(url);
  const contentLength = Number(response.headers.get("content-length") || 0);

  let encryptedData: ArrayBuffer;

  if (contentLength && response.body && onProgress) {
    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.length;
      onProgress(Math.round((received / contentLength) * 100));
    }

    const result = new Uint8Array(received);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    encryptedData = result.buffer;
  } else {
    encryptedData = await response.arrayBuffer();
  }

  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await keyPromise;
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
