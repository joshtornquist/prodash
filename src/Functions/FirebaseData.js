
import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { doc, getDocs, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const CLIENT_NAME = "Center For Digital Humanities"

const firebaseConfig = {
    apiKey: "AIzaSyA1JzguBn8V2a4Lyp3u7KdN8Xcq2l-av7A",
    authDomain: "prodash-474ff.firebaseapp.com",
    projectId: "prodash-474ff",
    storageBucket: "prodash-474ff.appspot.com",
    messagingSenderId: "5441845336",
    appId: "1:5441845336:web:56bba96aaa9debb3f7f22d"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()


async function OrganizationData() {

    const [organizationData, setOrganizationData] = useState(20);

    const querySnapshot = await getDocs(collection(db, CLIENT_NAME));
        querySnapshot.forEach((doc) => {
            setOrganizationData(doc.data());
        })
      
    console.log(organizationData)

    // if (data !== null) {
    //     var trackedData = {}
    //     for (const [key, value] of Object.entries(data)) {
    //         if (trackedData[key.teamName] === undefined) {
    //             trackedData[key.teamName] = [key.description]
    //         }
    //         else {
    //             trackedData[key.teamName] += [key.description]
    //         }
    //     }
    
    //     console.table(trackedData)
    // }


    

}

export default OrganizationData;