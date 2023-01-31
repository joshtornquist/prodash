import React, { useState } from 'react';
import TeamAccess from '../../Screens/TeamAccess/TeamAccess';
import "./PostFormSubmit.css";

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