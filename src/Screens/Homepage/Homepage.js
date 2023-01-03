import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./Homepage.css";
import TeamsLogo from "./images/TeamsLogo.png"
import ViewerLogo from "./images/ViewerLogo.png"
import AdminLogo from "./images/AdminLogo.png"




const CLIENT_NAME = "Center For Digital Humanities"


function Homepage(props) {

    const [info, setInfo] = useState(null)

    





        return (
            <>
            <div className="homepage-container">
                <div className="homepage-buttons-container">
                    
                        <div className="homepage-buttons-wrapper">
                            <Link to="/teams-login">
                                <img className="homepage-members-button" src={TeamsLogo}></img>
                            </Link>
                                <div className="homepage-font">Teams</div>
                        </div>
                    
                    
                    
                        <div className="homepage-buttons-wrapper">
                            <Link to="/viewer-login">
                                <img src={ViewerLogo} className="homepage-viewers-button"></img>
                            </Link>
                                <div className="homepage-font">Viewers</div>
                        </div>
                    

                    
                        <div className="homepage-buttons-wrapper">
                            <Link to="/admin-login">
                                <img src={AdminLogo} className="homepage-admin-button"></img>
                            </Link>
                                 <div className="homepage-font">Admin</div>
                        </div>
                    
                    
                    
                </div>

            </div>
            </>
        )

}
export default Homepage;
