import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDwHztWZiwRV5RE4JhfFSDlJQlOPtgYbqA',
  authDomain: 'aplicacaowebkv.firebaseapp.com',
  projectId: 'aplicacaowebkv',
  storageBucket: 'aplicacaowebkv.appspot.com',
  messagingSenderId: '425651444450',
  appId: '1:425651444450:web:3936918a498ba3b3141cbb',
  measurementId: 'G-S41HLGC70Z',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
