import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import TeamAccess from '../../Screens/TeamAccess/TeamAccess';
import "./PostFormSubmit.css";
import PostFormSubmitBackground from './images/PostSubmitFormBackground.png'

function PostFormSubmit() {

    const [goBack, setGoBack] = useState(false)

    function update() {
        setGoBack(!goBack)
    }

    return (
        <>
        {/* <div className="post-form-submit-container" style={{ backgroundSize: "cover", backgroundImage: `url(${PostFormSubmitBackground})`}}> */}
            <div className="post-form-submit-form-container">
                <div className="post-form-submit-welcome-message">
                    Thanks for the update!
                </div>
            
            {!goBack && 
                <div className="post-form-submit-update-form">
                    <input title="Submit" onClick={update} className="post-form-submit-form-submit" type="submit"></input>
                </div>
            }

            {goBack && 
                <TeamAccess></TeamAccess>
            }
                

            {/* </div> */}



        </div>
        </>
    )



}

export default PostFormSubmit;