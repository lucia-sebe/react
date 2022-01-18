/* eslint-disable no-unused-vars */
import React from 'react';
import MovyLogo from '../ images/movylogo.png';
import { Link } from 'react-router-dom';
import Lupa from '../ images/lupa.png';
import LogOutButton from './logOut';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="topBar">
                <div className="topBarLeft">
                    <img src={MovyLogo}></img>
                    <div>
                        <a>Home</a>
                        <a>Movies</a>
                        <a>Series</a>
                        <a>Recently Added</a>
                        <a>My List</a>
                    </div>
                </div>

                <div className="topBarRight">
                    <img src={Lupa} className="h-1/5 mr-4"></img>
                    <Link to="/editProfile" className="mr-4">Edit Profile</Link>
                    <LogOutButton />
                    <img src={user.picture} alt={user.name} className="h-2/5 mr-16 rounded-3xl" />
                </div>
            </div>)
    )
}

export default Navbar;
