import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import app from './app.js';

export async function subscribeToHellfireClub(subscription) {
   const db = getFirestore(app)
   const hellfireClubeCollection = collection(db,'hellfire-clube')
   const docRef = await addDoc(hellfireClubeCollection, subscription)
   return docRef.id
};

