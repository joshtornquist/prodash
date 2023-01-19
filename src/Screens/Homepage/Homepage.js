import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "./Homepage.css";
import TeamsLogo from "./images/TeamsLogo.png"
import ViewerLogo from "./images/LockedViewersIcon.png"
import AdminLogo from "./images/LockedAdminIcon.png"

function Homepage(props) {

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
                            {/* TODO */}
                            <Link to="/home">
                                <img src={ViewerLogo} className="homepage-viewers-button"></img>
                            </Link>
                                <div className="homepage-font">Viewers</div>
                        </div>
                    

                    
                        <div className="homepage-buttons-wrapper">
                            {/* TODO */}
                            <Link to="/home">
                                <img src={AdminLogo} className="homepage-admin-button"></img>
                            </Link>
                                 <div className="homepage-font">Admins</div>
                        </div>
                    
                    
                    
                </div>

            </div>
            </>
        )

}
export default Homepage;
