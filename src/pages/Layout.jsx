import {Outlet, Link } from "react-router-dom";

function Layout (){


    return (
        <>
        <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className= "container-fluid">
                <Link className="navbar-brand fw-bold p-2 shadow" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                    
                        </ul>
                        
                    </div>
                    </div>
            </nav>
            

            <div className="container p-3">
            <Outlet></Outlet>
            </div>
            </main>

            <footer className="bg-light p-3 text-center footer at-auto" >
                    <p>2023 Developed by | Clarisse Carmona. All rights reserved. </p>

                </footer>

                
        </>
    )
} 

export default Layout;