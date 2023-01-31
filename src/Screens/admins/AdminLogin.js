import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Admin.css";
import AdminBackground from "./images/admin-background.png"



export var TEAM_NAME = "Non-human"
export var CLIENT_NAME = "Center For Digital Humanities"

export default function AdminAccessPassword() {

    const [passwordCheck, setPasswordCheck] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const navigate = useNavigate();


    // Listening for password to be correctly entered
    function login() {
        if (passwordCheck == "123") { 
            TEAM_NAME = "Admin"  
            CLIENT_NAME = "Center For Digital Humanities"         
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
                    <input placeholder="Organization" className="admin-access-organization-input" ></input>
                    <input type="password" placeholder="Password" className="admin-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="admin-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
