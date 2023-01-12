import React, { useEffect, useState, Autocomplete, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./TeamAccess.css";
import TeamBackground from "./images/TeamAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import TeamAccessPassword, {TEAM_NAME, CLIENT_NAME, LOGIN_STATUS} from './TeamAccessPassword';
import { getProjectsNames, 
    getOrganizationList, 
    getTeams,
    getStoredHashedPassword,
    storedHashedPassword,
    db
    } from '../../Functions/FirebaseData';
import PostFormSubmit from '../../Components/PostFormSubmit/PostFormSubmit';




function TeamAccess({ navigate, ...props }) {
    const [info, setInfo] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [teamName, setTeamName] = useState(null)
    const [memberName, setMemberName] = useState(null)
    const [projectName, setProjectName] = useState(null)
    const [description, setDescription] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [welcomeMessage, setWelcomeMessage] = useState(TEAM_NAME)
    const [passwordSuccess, setPasswordSuccess] = useState(false)
    
    


    // Pushing updates to Firebase
    async function update() {
        setSubmitted(!submitted)
        setWelcomeMessage("Submitted Successfully")
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
        setWelcomeMessage(TEAM_NAME)
    }


        
        return (
            <>
            <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
                <div className="team-access-form-container">
                    

                {!submitted && LOGIN_STATUS &&
                    <div className="team-access-update-form">
                        <div className="team-access-welcome-message">
                        <div className="team-access-organization-name">{CLIENT_NAME}</div>
                            {welcomeMessage}
                        </div>
                        <input placeholder="Name" className="team-access-name-input" onChange={(e) => setMemberName(e.target.value)}></input>
                        <input placeholder="Project" className="team-access-project-input" onChange={(e) => setProjectName(e.target.value)}></input>
                        <textarea placeholder="Description" className="team-access-update-description" onChange={(e) => setDescription(e.target.value)} ></textarea>
                        <DatePicker className="team-access-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <input title="Submit" onClick={update} className="team-access-form-submit" type="submit"></input>
                    </div>
                    }

                {submitted && LOGIN_STATUS &&
                    <>
                    <div className="team-access-welcome-message">
                        {welcomeMessage}
                    </div>
                    <div className="team-access-update-form-post-submit">
                        <button onClick={goBack} className="team-access-form-submit-post-submit-new-update">New update</button>
                        <Link to='/home'>
                            <button className="team-access-form-submit-post-submit-home">Home</button>
                        </Link>
                    </div>
                    </>
                    }

                {!submitted && !LOGIN_STATUS &&
                    <>
                    <div className="team-access-welcome-message">
                        {welcomeMessage}
                    </div>
                    <div className="team-access-update-form-post-submit">
                        <div className="teams-access-no-login-text">Login to view this page</div>
                        <Link to='/teams-login'>
                            <button className="team-access-form-submit-post-submit-home">Login</button>
                        </Link>
                    </div>
                    </>
                    }

                </div>



            </div>
            </>
        )
    



}
export default TeamAccess;
