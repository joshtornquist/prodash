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
import greeting from '../../Constants/GreetingsList'
import { getProjectsNames, 
        getOrganizationList, 
        getTeams,
        getStoredHashedPassword,
        storedHashedPassword
    } from '../../Functions/FirebaseData';
import HashPassword from '../../Functions/HashPassword'

const organizationsList = getOrganizationList()

export var TEAM_NAME = greeting
export var CLIENT_NAME = "Center For Digital Humanities"
export var LOGIN_STATUS = false

export default function TeamAccessPassword() {
    
    
    const [passwordCheck, setPasswordCheck] = useState("")
    const [teamSelection, setTeamSelection] = useState(false)
    
    const [teams, setTeams] = useState([])
    const navigate = useNavigate();
     

    function updateFormState(e) {
        getTeams(e.target.value).then((response) => 
            setTeams(response)
        )
        setTeamSelection(true)
        
    }

    useEffect(() => {
        console.log("")
    }, [teams]) 


    // Listening for password to be correctly entered
    function login() {
        const newWelcomeMessage = " updates"
        if (passwordCheck == "web") { 
            LOGIN_STATUS = true
            TEAM_NAME = "Web Team" + newWelcomeMessage 
            CLIENT_NAME = "Center For Digital Humanities"  
            return navigate("/teams")
            }

        if (passwordCheck == "arvr") { 
            LOGIN_STATUS = true
            TEAM_NAME = "AR/VR Team" + newWelcomeMessage            
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
                    <select placeholder="Organization" onChange={(e) => updateFormState(e)} className="team-access-organization-input">
                        <option value="Center For Digital Humanities">Center For Digital Humanities</option>
                        <option value="Center For Digital Humanities">Center For Digital Humanities</option>

                    </select>  
                    {teamSelection && 
                        <select placeholder="Organization" className="admin-access-organization-input" >
                            {teams.map((team, index) => (
                                <option key={index}>{team}</option>
                            ))}
                            
                        </select>
                    }                  
                    <input type="password" placeholder="Password" className="team-access-password-input" onChange={(e) => setPasswordCheck(e.target.value)}></input>
                    <input title="Submit" onClick={login} className="team-access-form-submit" type="submit"></input>
                </div>

            </div>



        </div>
        </>
    )    

}
