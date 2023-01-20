import { useNavigate, Link, useLocation, Navigate } from 'react-router-dom';
import greeting from '../Constants/GreetingsList'
import HashPassword from '../Functions/HashPassword'

export var TEAM_NAME = greeting
export var CLIENT_NAME = "Center For Digital Humanities"
export var LOGIN_STATUS = false

// This function takes the entered password and compares it to the one stored.
    export default function Login(password) {

        if (password == process.env.REACT_APP_WEB_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "Web Team" 
            return true;
            }

        if (password == process.env.REACT_APP_AR_VR_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "AR/VR Team" 
            return true;           
            }
        

        if (password == process.env.REACT_APP_GRAPHIC_DESIGN_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "Graphic Design Team"
            return true;            
            }

        if (password == process.env.REACT_APP_AI_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "AI Team"
            return true;            
            }

        if (password == process.env.REACT_APP_ROBOTICS_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "Robotics Team" 
            return true;           
            }
    
        if (password == process.env.REACT_APP_PHOTOGRAPHY_TEAM_PASSWORD) { 
            LOGIN_STATUS = true
            TEAM_NAME = "Photography Team" 
            return true;           
            }
        
        return false;

        }

