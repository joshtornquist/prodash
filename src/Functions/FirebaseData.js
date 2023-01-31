import React from 'react';
import { doc, getDocs, getDoc, getFirestore, addDoc, collection, query, updateDoc, arrayUnion } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {TEAM_NAME, CLIENT_NAME } from './Login';


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
    
    

    // GET ARRAY OF DOCS
    async function getChartData(client) {
        let data = {}
        const q = query(collection(db, client));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        var docRef = doc.data();
        let team = docRef.teamName;
        let name = docRef.memberName;
        if (!data[team]) {
            data[team] = {};
        }
        if (!data[team][name]) {
            data[team][name] = 1;
        } else {
            data[team][name] += 1
        }
         });
         return data;
        }

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
    async function getStoredHashedPassword() {
        var storedHashedPassword = ""
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
        return storedHashedPassword;
        }



export default firebase;
export {
    getProjectsNames,
    getTeams,
    getOrganizationList,
    getStoredHashedPassword,
    getChartData,
    db
};


