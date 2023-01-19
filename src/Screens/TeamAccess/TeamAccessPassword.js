import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import "./TeamAccess.css";
import TeamBackground from "./images/TeamAccessBackgroundGradient.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TeamAccess from './TeamAccess';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import greeting from '../../Constants/GreetingsList'
import { 
    getProjectsNames, 
    getOrganizationList, 
    getTeams,
    getStoredHashedPassword,
    storedHashedPassword,
    db
} from '../../Functions/FirebaseData';
import HashPassword from '../../Functions/HashPassword'
import Login from '../../Functions/Login';



export default function TeamAccessPassword() {
    const organizationsList = getOrganizationList()
    
    const [passwordCheck, setPasswordCheck] = useState("")
    const [teamSelection, setTeamSelection] = useState(false)
    const navigate = useNavigate()
    const [teams, setTeams] = useState([])
    const [client, setClient] = useState([])
     

    function updateFormState(e) {
        if (!e.target.value == "select") {
            setClient(e.target.value)
            getTeams(e.target.value).then((response) => 
            setTeams(response)
            )
            setTeamSelection(true)
        }
    }

    useEffect(() => {
        console.log("")
    }, [teams]) 


    // Listening for password to be correctly entered
    function login() {
        var login = Login(passwordCheck)
        if (login == true) {
            return navigate("/teams")
        } else {
            console.log("Not sure")
        }
    }

    return (
        <>
        <div className="team-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${TeamBackground})`}}>
            <div className="team-access-form-container">

                <div className="team-access-password-form">
                    <div className="team-access-welcome-message">
                        Log in
                    </div>
                    <select onChange={(e) => updateFormState(e)} className="team-access-organization-input">
                        <option value="Select organization">Select organization</option>
                        <option value="Center For Digital Humanities">Center For Digital Humanities</option>

                    </select>  
                    {teamSelection && 
                        <select className="admin-access-organization-input" >
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
