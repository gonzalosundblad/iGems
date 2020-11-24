import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

    const[logged, setlog] = useState()  // renderizar condicionalmente botones de login/signin o el logo de usuario logueado

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/home' className="navbar-brand" >iGems</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to='/wtf' className="nav-link" >whatFor <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/mygems' className="nav-link" >myGems</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/foreign' className="nav-link" >foreignGems</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' className="nav-link" >addGem</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' className="nav-link" >addGem</NavLink>
                        </li>
                        { !logged && (
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link" >Log In</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/signin' className="nav-link" >Sign In</NavLink>
                            </li>
                        </div>
                        )}
                        { logged && 
                             <li className="nav-item">
                             <NavLink to='/myprofile' className="nav-link" >logo</NavLink>
                         </li>
                        }
                        
                    </ul>
                </div>
            </nav>  
    )
}