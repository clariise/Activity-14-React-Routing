import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDFRrALJZu8E-os4IIzXHjnMAyJufISy-M",
    authDomain: "employeerecords-f5f28.firebaseapp.com",
    projectId: "employeerecords-f5f28",
    storageBucket: "employeerecords-f5f28.appspot.com",
    messagingSenderId: "16841233938",
    appId: "1:16841233938:web:aa80d1b02686b7d747aacb",
    measurementId: "G-WN3W1P5M1K"
};

    //initialization firebase
    const app= initializeApp(firebaseConfig);

    export default app;