import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./TeamAccess.css";
import TeamBackground from "./images/TeamAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import TeamAccessPassword from './TeamAccessPassword';



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


function TeamAccess({ navigate, ...props }) {
    const [info, setInfo] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [teamName, setTeamName] = useState(null)
    const [memberName, setMemberName] = useState(null)
    const [projectName, setProjectName] = useState(null)
    const [description, setDescription] = useState(null)
    

    async function getData() {
            const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setInfo(docSnap.data());
                    setTeamName(docSnap.data().teamName)
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
        }

    // Listening to grab data from Firebase
    useEffect(() => {
        getData()
    }, [])


    // Pushing updates to Firebase
    async function update() {
        await addDoc(collection(db, "Center For Digital Humanities"), {
            teamName: TEAM_NAME,
            memberName: memberName,
            projectName: projectName,
            description: description,
            date: startDate,
                });
            }

        
        return (
            <>
            <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
                <div className="team-access-form-container">
                    <div className="team-access-welcome-message">
                        Welcome, {TEAM_NAME}!
                    </div>
                    <div className="team-access-update-form">
                        <input placeholder="Name" className="team-access-name-input" onChange={(e) => setMemberName(e.target.value)}></input>
                        <input placeholder="Project" className="team-access-project-input" onChange={(e) => setProjectName(e.target.value)}></input>
                        <textarea placeholder="Description" className="team-access-update-description" onChange={(e) => setDescription(e.target.value)} ></textarea>
                        <DatePicker className="team-access-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <input title="Submit" onClick={update} className="team-access-form-submit" type="submit"></input>
                    </div>

                </div>



            </div>
            </>
        )
    



}
export default TeamAccess;
