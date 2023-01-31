import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import TeamAccess from './Screens/TeamAccess/TeamAccess';
import TeamAccessPassword from './Screens/TeamAccess/TeamAccessPassword';
import ViewerAccess from './Screens/ViewerAccess/ViewerAccess';
import ViewerAccessPassword from './Screens/ViewerAccess/ViewerAccessPassword';
import AdminAccess from './Screens/AdminAccess/AdminAccess';
import AdminAccessPassword from './Screens/AdminAccess/AdminAccessPassword';
import Navbar from "./Components/Navbar"
import Homepage from './Screens/Homepage/Homepage';


function App() {
  return (

        <>
        <Navbar/>
          <Routes>
            
          <Route exact path='/' element={<Homepage/>}/>    
          <Route path='/home' element={<Homepage/>}/>

          <Route exact path='/teams-login' element={<TeamAccessPassword/>}/>
          <Route exact path='/teams' element={<TeamAccess/>}/>

          <Route exact path='/viewer-login' element={<ViewerAccessPassword/>}/>
          <Route exact path='/viewer' element={<ViewerAccess/>}/>

          {/* <Route exact path='/admin-login' element={<AdminAccessPassword/>}/>
          <Route exact path='/admins' element={<AdminAccess/>}/> */}

          </Routes>
          
        </> 
    
      );


}

export default App;

