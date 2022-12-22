import { useState, useEffect } from 'react';
import { dataBase } from '../firebase/config';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';

export function useFetchDoc(id) {
  const [document, setDocument] = useState(null);

  const documentReference = doc(dataBase, 'books', id);

  useEffect(() => {
    let result = {};

    const unsub = onSnapshot(documentReference, doc => {
      setDocument(doc.data());
    });

    return () => unsub();
  }, [id]);

  return { document };
}
