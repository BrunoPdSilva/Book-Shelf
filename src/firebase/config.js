import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBapmWw5WXOmsl6Qmnen26ZdWqSbmUHac",
  authDomain: "book-shelf-84c1d.firebaseapp.com",
  projectId: "book-shelf-84c1d",
  storageBucket: "book-shelf-84c1d.appspot.com",
  messagingSenderId: "990885781219",
  appId: "1:990885781219:web:3590e0f3b972c7a607afd6"
};

initializeApp(firebaseConfig);

const dataBase = getFirestore();
const auth = getAuth();

export { dataBase, auth };
