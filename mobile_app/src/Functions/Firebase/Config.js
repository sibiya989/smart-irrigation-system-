import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBhoyGs4FtRIKIEmFXxCEtCb1pWa4L8DaU',
  authDomain: 'test2-c2636.firebaseapp.com',
  databaseURL: 'https://test2-c2636-default-rtdb.firebaseio.com',
  projectId: 'test2-c2636',
  storageBucket: 'test2-c2636.appspot.com',
  messagingSenderId: '909682595054',
  appId: '1:909682595054:web:e4dd124228c9875c630fff',
  measurementId: 'G-TSY1DCCW54',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);