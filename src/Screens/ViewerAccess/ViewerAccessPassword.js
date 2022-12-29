import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import "./ViewerAccess.css";
import ViewerBackground from "./images/ViewerBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import ViewerAccess from './ViewerAccess';



const CLIENT_NAME = "Center For Digital Humanities"
const CLIENT_UPDATE = CLIENT_NAME + "_Update"
const TEAM_NAME = "Web Viewer"

const firebaseConfig = {
  apiKey: "AIzaSyA1JzguBn8V2a4Lyp3u7KdN8Xcq2l-av7A",
  authDomain: "prodash-474ff.firebaseapp.com",
  projectId: "prodash-474ff",
  storageBucket: "prodash-474ff.appspot.com",
  messagingSenderId: "5441845336",
  appId: "1:5441845336:web:56bba96aaa9debb3f7f22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const docRef = doc(db,  CLIENT_NAME, "Web Viewer");


export default function ViewerAccessPassword() {

    const [passwordCheck, setPasswordCheck] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const navigate = useNavigate();
    // Listening for password to be correctly entered
    function login() {
        if (passwordCheck == "123") {            
            return navigate("/viewer")
            
            }
        }

    return (
        <>
        <div className="viewer-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${ViewerBackground})`}}>
            <div className="viewer-access-form-container">
                <div className="viewer-access-welcome-message">
                    Log in
                </div>
                <div className="viewer-access-password-form">
                    <input placeholder="Organization" className="viewer-access-organization-input" onChange={(e) => setOrganizationName(e.target.value)}></input>
                    <input type="password" placeholder="Password" className="viewer-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="viewer-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
