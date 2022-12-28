import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./TeamAccessPassword.css";
import TeamBackground from "./images/TeamAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const CLIENT_NAME = "Center For Digital Humanities"
const CLIENT_UPDATE = CLIENT_NAME + "_Update"
const TEAM_NAME = "Web Team"

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
const docRef = doc(db,  CLIENT_NAME, "Web Team");


function TeamAccessPassword(props) {

    const [password, setPassword] = useState(null)
 



        return (
            <>
            <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
                <div className="team-access-form-container">
                    <div className="team-access-welcome-message">
                        Enter password
                    </div>
                    <div className="team-access-update-form">
                        <input placeholder="Password" className="team-access-name-input" onChange={(e) => setPassword(e.target.value)}></input>
                        <input title="Access" className="team-access-form-submit" type="submit"></input>
                    </div>

                </div>



            </div>
            </>
        )

}
export default TeamAccessPassword;
