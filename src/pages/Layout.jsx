import {Outlet, Link, useNavigate} from "react-router-dom";
import {useState,useEffect } from 'react';
import firebaseApp from "./firebaseConfig";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

function Layout (){

    const [authenticated, setAuthenticated] = useState (false)

    let navigate = useNavigate ();
    useEffect(() => {
        
        const auth = getAuth(firebaseApp);

        onAuthStateChanged(auth, (user) => {

            console.log(user);
            if (user) {
                console.log(user.email);
                setAuthenticated (true);
                //user is signed in, look for docs for a list of available properties
                const uid = user.uid;
            }else {

                //user is signed out
            }
        });

        }, [])

        const logout = () => {
            const auth = getAuth (firebaseApp);
            signOut (auth).then(() => {
                setAuthenticated (false);
                navigate("/login");
            }).catch ((error) => {
                //an error happened
            });
        }

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
                  
                          
                                <ul className="navbar-nav ms-auto">
                                { authenticated
                                ? 
                                    <li className="nav-item active">
                                        <Link className="nav-link" onClick={logout} >Logout</Link>
                                    </li>
                                        :
                                    <>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="login">Login</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link className="nav-link" to="register">Register</Link>
                                        </li>
                                    </>
                                    }
                                 </ul>
                    </div>
                    </div>
            </nav>
            

            <div className="container p-3">
            <Outlet ></Outlet>
            </div>
            </main>

            <footer className="bg-light p-3 text-center footer at-auto" >
                    <p>2023 Developed by | Clarisse Carmona. All rights reserved. </p>

                </footer>

                
        </>
    )
} 

export default Layout;