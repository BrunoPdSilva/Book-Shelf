import { useState, useEffect } from 'react';

import { dataBase } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export function useCollection(collec) {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const collectionRef = collection(dataBase, collec);

    const unsub = onSnapshot(collectionRef, snapshot => {
      let result = [];

      snapshot.docs.forEach(doc => {
        result.push({ ...doc.data() });
      });

      setDocuments(result);
    });
    return () => unsub();
  }, [collec]);

  return { documents };
}
