import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';

const encryptTransform = createTransform(
  (inboundState, key) => {
    // Encrypt the state
    const encryptedState = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      'secret-key'
    ).toString();
    return encryptedState;
  },
  (outboundState, key) => {
    // Decrypt the state
    const bytes = CryptoJS.AES.decrypt(outboundState, __REDUX_SECRET_KEY__);
    const decryptedState = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedState;
  }
);

export default encryptTransform;
