import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import Teams from './screens/team-access/Teams';
import TeamsLogin from './screens/team-access/TeamsLogin';
import Dashboard from './screens/dashboard/Dashboard';
import DashboardLogin from './screens/dashboard/DashboardLogin';
import Admin from './screens/admins/Admin';
import AdminLogin from './screens/admins/AdminLogin';
import Navbar from "./components/navbar/Navbar"
import Homepage from './screens/homepage/Homepage';


function App() {
  return (

        <>
        <Navbar/>
          <Routes>
            
          <Route exact path='/' element={<Homepage/>}/>    
          <Route path='/home' element={<Homepage/>}/>

          <Route exact path='/teams-login' element={<TeamsLogin/>}/>
          <Route exact path='/teams' element={<Teams/>}/>

          <Route exact path='/dashboard-login' element={<DashboardLogin/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>

          {/* <Route exact path='/admin-login' element={<AdminLogin/>}/>
          <Route exact path='/admins' element={<Admin/>}/> */}

          </Routes>
          
        </> 
    
      );


}

export default App;

