
import React, { useEffect, useState, Suspense, useRef, useId } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { doc, getDocs, getDoc, getFirestore, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {TEAM_NAME, CLIENT_NAME, LOGIN_STATUS} from './Login';



    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: "prodash-474ff",
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    };

    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore()
    
    

    // GET ARRAY OF PROJECT NAMES
    async function getTeams(client) {
        var teamsList = []
        const docRef = doc(db, client, "profile");
        const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            var teams = docSnap.get("teams");
            
            for (var i = 0; i < teams.length; i++) {
                teamsList.push(teams[i].team)
                }
            return teamsList;
            }
        }

    // GET ARRAY OF PROJECT NAMES
    async function getProjectsNames(client) {
        var projectsList = []
        const docRef = doc(db, client, "profile");
        const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            var projects = docSnap.get("projects");
            
            for (var i = 0; i < projects.length; i++) {
                projectsList.push(projects[i])
                }
            return projectsList;
            }
        }

    // GET ARRAY OF ORGANIZATION NAMES
    async function getOrganizationList() {
        var organizationsList = new Set()
        const querySnapshot = await getDocs(collection(db, "Organizations"));
        querySnapshot.forEach((doc) => {

          organizationsList.add(<option>{doc.data().organizationName}</option>);
        });
        return organizationsList
    }

    // FETCH HASHED PASSWORD
    var storedHashedPassword = ""
    async function getStoredHashedPassword() {
        const docRef = doc(db, CLIENT_NAME, "profile");
        const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            var teams = docSnap.get("teams");
            teams.forEach((team) => {
                console.log(team.hashedPassword)
                if (team == TEAM_NAME) {
                    storedHashedPassword += team
                    }
                })
            }
        }



export default firebase;
export {getProjectsNames};
export {getTeams};
export {getOrganizationList};
export {getStoredHashedPassword};
export {storedHashedPassword};
export {db}

