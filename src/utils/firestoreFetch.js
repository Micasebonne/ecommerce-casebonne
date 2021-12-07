import db from './firebaseConfig';
import { query, orderBy, collection, getDocs, where } from 'firebase/firestore';
import { doc, getDoc } from '@firebase/firestore';

const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "data"), where('categoryId', '==', idCategory));
    } else {
        q = query(collection(db, "data"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document =>({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore
}

export default firestoreFetch;

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "data", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}