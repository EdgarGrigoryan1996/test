import React from 'react';
import {getFirestore,collection, getDocs} from "firebase/firestore"




function Users(props) {
    const db = getFirestore()
    const getUser = async () => {

        const querySnapshot = await getDocs(collection(db, "defaultPlayers"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        })
    }
    return (
        <div>
            <button onClick={getUser}>Get Users</button>
        </div>
    );
}

export default Users;