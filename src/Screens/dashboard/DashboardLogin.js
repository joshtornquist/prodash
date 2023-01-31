import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import "./Dashboard.css";
import DashboardBackground from "./images/dashboard-login-background.png"
import "react-datepicker/dist/react-datepicker.css";
import { doc } from "firebase/firestore";
import {
    db
} from '../../functions/FirebaseData';



const CLIENT_NAME = "Center For Digital Humanities"
const CLIENT_UPDATE = CLIENT_NAME + "_Update"
const TEAM_NAME = "Web Viewer"


const docRef = doc(db,  CLIENT_NAME, "Web Viewer");


export default function DashboardAccessPassword() {

    const [passwordCheck, setPasswordCheck] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const navigate = useNavigate();
    // Listening for password to be correctly entered
    function login() {
        if (passwordCheck == "123") {            
            return navigate("/dashboard")
            
            }
        }

    return (
        <>
        <div className="dashboard-access-container-password" style={{ backgroundSize: "cover", backgroundImage: `url(${DashboardBackground})`}}>
            <div className="dashboard-access-form-container">
                <div className="dashboard-access-welcome-message">
                    Log in
                </div>
                <div className="dashboard-access-password-form">
                    <input placeholder="Organization" className="dashboard-access-organization-input" onChange={(e) => setOrganizationName(e.target.value)}></input>
                    <input type="password" placeholder="Password" className="dashboard-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="dashboard-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
