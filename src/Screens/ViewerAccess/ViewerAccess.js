import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./ViewerAccess.css";
import ViewerBackground from "./images/ViewerBackgroundPostLogin.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import ViewerAccessPassword from './ViewerAccessPassword';
import OrganizationData from '../../Functions/FirebaseData';


const CLIENT_NAME = "Center For Digital Humanities"

function ViewerAccess(props) {

    const [info, setInfo] = useState(null)

    var i = 100
    var calcHight = (1 * i) / 2 + "vh"

        return (
            <>
            <div className="viewer-access-container" style={{ backgroundSize: "cover", backgroundImage: `url(${ViewerBackground})`}}>
                <div className="viewer-stats-container">
                    <div className="viewer-stat-message">
                        This Week in a Nutshell 
                    </div>
                    {/* <button style={{width: "20px", height: "20px"}} onClick={OrganizationData}></button> */}
                        <div className="viewer-access-wrapper-container">
                        <div className="viewer-stat-wrapper">
                            <div className="viewer-stats-bar" style={{height: calcHight}}></div>
                            <div className="viewer-stats-team-name">Web Team</div> 
                        </div>
                        <div className="viewer-stat-wrapper">
                            <div className="viewer-stats-bar" style={{height: calcHight}}></div>
                            <div className="viewer-stats-team-name">Web Team</div> 
                        </div>
                        </div>



                    


                </div>



            </div>
            </>
        )

}
export default ViewerAccess;
