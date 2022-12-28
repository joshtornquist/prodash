import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import TeamAccess from './Screens/TeamAccess/TeamAccess';
import Navbar from "./Components/Navbar"




// --------------------------



function App() {
  return (

        <>
        <Navbar/>
          <Routes>
          <Route exact path='/' element={<TeamAccess/>}/>
          <Route path='/home' element={<TeamAccess/>}/>

          </Routes>
          
        </> 
    
      );


}

export default App;

