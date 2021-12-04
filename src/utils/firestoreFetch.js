import db from './firebaseConfig';
import { query, orderBy, collection, getDocs } from 'firebase/firestore';

const firestoreFetch = async () => {
    const q = query(collection(db, "data"), orderBy('title'));
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document =>({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore
}

export default firestoreFetch;