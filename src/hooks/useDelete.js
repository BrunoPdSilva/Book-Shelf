import { dataBase } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export async function useDelete(id) {
  const docRef = doc(dataBase, 'books', id);
  await deleteDoc(docRef)
}