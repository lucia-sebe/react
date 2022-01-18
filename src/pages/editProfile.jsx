// import userEvent from '@testing-library/user-event';
import React from 'react';
import MovyLogo from '../ images/movylogo.png';
import { useAuth0 } from "@auth0/auth0-react";


function EditProfile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (

            <div className="w-screen h-screen bg-black">
                <div className="p-8">
                    <img src={MovyLogo} className="w-24"></img>
                </div>

                <div className="w-3/6 h-2/3 m-auto">
                    <h1 className="text-5xl">Edit Profile</h1>
                    <div className="flex m-12">
                        <img src={user.picture} alt={user.name} className="h-2/5 mr-16 rounded-sm m-auto" />
                        <div className="flex-col ml-32">
                            <h2>Nombre</h2>
                            <input className="m-4 px-5 text-center bg-black border-blue-500 border-2 rounded-sm outline-none" placeholder={user.nickname}></input>
                            <h2>Gmail</h2>
                            <input className="m-4 px-5 text-center bg-black border-blue-500 border-2 rounded-sm outline-none" placeholder={user.name}></input>
                        </div>
                    </div>
                    <div className="flex ml-20">
                        <p className="m-8 py-1 px-4 text-sm text-center bg-black border-opacity-50 border-blue-500 border-2 rounded-sm outline-none hover:bg-blue-500">SAVE</p>
                        <p className="m-8 py-1 px-4 text-sm text-center bg-black border-opacity-50 border-blue-500 border-2 rounded-sm outline-none hover:bg-blue-500">CANCEL</p>
                        <p className="m-8 py-1 px-4 text-sm text-center bg-black border-opacity-50 border-blue-500 border-2 rounded-sm outline-none hover:bg-blue-500">DELETE PROFILE</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default EditProfile;
