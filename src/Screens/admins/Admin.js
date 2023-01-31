import React, { useState } from 'react';
import "./Admin.css";
import AdminBackground from "./images/admin-background.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDoc, collection } from "firebase/firestore";
import {TEAM_NAME, CLIENT_NAME} from './AdminLogin';
import { db } from '../../functions/FirebaseData';


function AdminAccess({ navigate, ...props }) {
    const [info, setInfo] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [adminName, setAdminName] = useState(null)
    const [memberName, setMemberName] = useState(null)
    const [projectName, setProjectName] = useState(null)
    const [description, setDescription] = useState(null)
    


    // Pushing updates to Firebase
    async function update() {
        await addDoc(collection(db, CLIENT_NAME), {
            adminName: TEAM_NAME,
            memberName: memberName,
            projectName: projectName,
            description: description,
            date: startDate,
                });
            }

        
        return (
            <>
            <div className="admin-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${AdminBackground})`}}>
                <div className="admin-access-form-container">
                    <div className="admin-access-welcome-message">
                        Welcome, {TEAM_NAME}!
                    </div>
                    <div className="admin-access-update-form">
                        <input placeholder="Name" className="admin-access-name-input" onChange={(e) => setMemberName(e.target.value)}></input>
                        <input placeholder="Project" className="admin-access-project-input" onChange={(e) => setProjectName(e.target.value)}></input>
                        <textarea placeholder="Description" className="admin-access-update-description" onChange={(e) => setDescription(e.target.value)} ></textarea>
                        <DatePicker className="admin-access-date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <input title="Submit" onClick={update} className="admin-access-form-submit" type="submit"></input>
                    </div>

                </div>



            </div>
            </>
        )
    



}
export default AdminAccess;
