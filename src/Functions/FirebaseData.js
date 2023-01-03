
import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { doc, getDocs, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";



    const firebaseConfig = {
        apiKey: "AIzaSyA1JzguBn8V2a4Lyp3u7KdN8Xcq2l-av7A",
        authDomain: "prodash-474ff.firebaseapp.com",
        projectId: "prodash-474ff",
        storageBucket: "prodash-474ff.appspot.com",
        messagingSenderId: "5441845336",
        appId: "1:5441845336:web:56bba96aaa9debb3f7f22d"
    };
    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore()
    

export default firebase;