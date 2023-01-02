import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import "./TeamAccess.css";
import TeamBackground from "./images/TeamAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import TeamAccess from './TeamAccess';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'




export var TEAM_NAME = "Non-human"
export var CLIENT_NAME = "Center For Digital Humanities"

export default function TeamAccessPassword() {

    const [passwordCheck, setPasswordCheck] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const navigate = useNavigate();
    // Listening for password to be correctly entered
    function login() {
        if (passwordCheck == "web") { 
            TEAM_NAME = "Web Team"  
            CLIENT_NAME = "Center For Digital Humanities"         
            return navigate("/teams")
            }

        if (passwordCheck == "arvr") { 
            TEAM_NAME = "AR/VR Team"           
            return navigate("/teams")
            }
        }

    return (
        <>
        <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
            <div className="team-access-form-container">
                <div className="team-access-welcome-message">
                    Log in
                </div>
                <div className="team-access-password-form">
                    <input placeholder="Organization" className="team-access-organization-input" onChange={(e) => setOrganizationName(e.target.value)}></input>
                    <input type="password" placeholder="Password" className="team-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="team-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
