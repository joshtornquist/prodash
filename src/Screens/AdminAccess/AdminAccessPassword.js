import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import "./AdminAccess.css";
import AdminBackground from "./images/AdminAccessBackground.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import AdminAccess from './AdminAccess';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'




export var TEAM_NAME = "Non-human"
export var CLIENT_NAME = "Center For Digital Humanities"

export default function AdminAccessPassword() {

    const [passwordCheck, setPasswordCheck] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const navigate = useNavigate();
    // Listening for password to be correctly entered
    function login() {
        if (passwordCheck == "web") { 
            TEAM_NAME = "Web Admin"  
            CLIENT_NAME = "Center For Digital Humanities"         
            return navigate("/admins")
            }

        if (passwordCheck == "arvr") { 
            TEAM_NAME = "AR/VR Admin"           
            return navigate("/admins")
            }
        }

    return (
        <>
        <div className="admin-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${AdminBackground})`}}>
            <div className="admin-access-form-container">
                <div className="admin-access-welcome-message">
                    Log in
                </div>
                <div className="admin-access-password-form">
                    <input placeholder="Organization" className="admin-access-organization-input" onChange={(e) => setOrganizationName(e.target.value)}></input>
                    <input type="password" placeholder="Password" className="admin-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="admin-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
