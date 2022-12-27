import { useState, useEffect, useRef } from 'react';

import { dataBase } from '../firebase/config';
import { collection, onSnapshot, query, where, addDoc } from 'firebase/firestore';

export function useCollection(collec, _query) {
  const [documents, setDocuments] = useState(null);

  const q = useRef(_query).current;

  useEffect(() => {
    let collectionRef = collection(dataBase, collec);

    if (q) {
      collectionRef = query(collectionRef, where(...q))
    }

    const unsub = onSnapshot(collectionRef, snapshot => {
      let result = [];

      snapshot.docs.forEach(doc => {
        result.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(result);
    });
    return () => unsub();
  }, [collec, q]);

  return { documents };
}
