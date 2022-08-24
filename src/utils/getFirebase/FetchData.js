import db from './getData.js';
import { collection, getDocs, query, where } from '@firebase/firestore';

async function getData(db) {
    const getCollection = collection(db, 'productos');
    const data = await getDocs(getCollection);
    const firestoreData = data.docs.map(item => item.data());
    return firestoreData;
}

export const getFetch = new Promise( (res, rej) => { 
    let condition = true
    if (condition) {
        res(getData(db))
    } else {
        rej(console.log('Ocurrio un error, reinicie la pagina.'))
    }
});

export const getItemById = async (id) => {

    const q = query(collection(db, "productos"), where("id", "==", id));

    const querySnapshot = await getDocs(q);

    const firestoreData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));


    return new Promise ((resolve, reject) => { 

        resolve(firestoreData)

    })
}
  