import {Outlet, Link } from "react-router-dom";
import {useState,useEffect } from 'react';
import firebaseApp from "./firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";

function Layout (){

    const [authenticated, setAuthenticated] = useState (false)

    useEffect(() => {
        
        const auth = getAuth(firebaseApp);
        const user = auth.currentUser;

        onAuthStateChanged(auth, (user) => {

            console.log(user);
            if (user) {
                setAuthenticated (true);
                //user is signed in, look for docs for a list of available properties

                const uid = user.uid;
               

            }
        });

        }, [])

    return (
        <>
        <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className= "container-fluid">
                <Link className="navbar-brand fw-bold p-2 shadow" to="/">Home</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <Link className="nav-link" to="about">About</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="services">Services</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="register">Register</Link>
                            </li>

                            { auth 
                                ? 
                                <li className="nav-item active">
                                <Link className="nav-link" to="logout">Logout</Link>
                                 </li>
                                :
                                <></>
                        }
                    
                        </ul>
                        
                    </div>
                    </div>
            </nav>
            

            <div className="container p-3">
            <Outlet auth={authenticated} ></Outlet>
            </div>
            </main>

            <footer className="bg-light p-3 text-center footer at-auto" >
                    <p>2023 Developed by | Clarisse Carmona. All rights reserved. </p>

                </footer>

                
        </>
    )
} 

export default Layout;