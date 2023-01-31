import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Teams.css";
import TeamBackground from "./images/teams-background.png"
import "react-datepicker/dist/react-datepicker.css";
import { getOrganizationList, getTeams } from '../../functions/FirebaseData';
import Login from '../../functions/Login';



export default function TeamAccessPassword() {
    const organizationsList = getOrganizationList()
    const navigate = useNavigate()
    const [passwordCheck, setPasswordCheck] = useState("")
    const [teamSelection, setTeamSelection] = useState(false)
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
