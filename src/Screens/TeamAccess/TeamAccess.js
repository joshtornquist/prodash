import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./TeamAccess.css";
import TeamBackground from "./images/TeamAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import TeamAccessPassword, {TEAM_NAME, CLIENT_NAME} from './TeamAccessPassword';
import firebase from '../../Functions/FirebaseData';
import PostFormSubmit from '../../Components/PostFormSubmit/PostFormSubmit';

const db = getFirestore()


function TeamAccess({ navigate, ...props }) {
    const [info, setInfo] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [teamName, setTeamName] = useState(null)
    const [memberName, setMemberName] = useState(null)
    const [projectName, setProjectName] = useState(null)
    const [description, setDescription] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [welcomeMessage, setWelcomeMessage] = useState(TEAM_NAME)
    


    // Pushing updates to Firebase
    async function update() {
        setSubmitted(!submitted)
        setWelcomeMessage("Update Submitted Successfully")
        // await addDoc(collection(db, CLIENT_NAME), {
        //     teamName: TEAM_NAME,
        //     memberName: memberName,
        //     projectName: projectName,
        //     description: description,
        //     date: startDate,
        //         });
        //     setSubmitted(!submitted)
        }

    // Go back
    function goBack() {
        setSubmitted(!submitted)
        setWelcomeMessage(TEAM_NAME + "!")
    }


        
        return (
            <>
            <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
                <div className="team-access-form-container">
                    <div className="team-access-welcome-message">
                        {welcomeMessage}
                    </div>
                {!submitted && 
                    <div className="team-access-update-form">
                        <input placeholder="Name" className="team-access-name-input" onChange={(e) => setMemberName(e.target.value)}></input>
                        <input placeholder="Project" className="team-access-project-input" onChange={(e) => setProjectName(e.target.value)}></input>
                        <textarea placeholder="Description" className="team-access-update-description" onChange={(e) => setDescription(e.target.value)} ></textarea>
                        <DatePicker className="team-access-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <input title="Submit" onClick={update} className="team-access-form-submit" type="submit"></input>
                    </div>
                    }

                {submitted && 
                    <div className="team-access-update-form-post-submit">
                        <button onClick={goBack} className="team-access-form-submit-post-submit-new-update">New update</button>
                        <Link to='/home'>
                            <button className="team-access-form-submit-post-submit-home">Home</button>
                        </Link>
                    </div>
                    }

                </div>



            </div>
            </>
        )
    



}
export default TeamAccess;
