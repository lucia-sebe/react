import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/home.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img id='fotoPerfil' src={user.picture} alt={user.name} />
        <p>{user.Username}</p>
      </div>
    )
  );
};

export default Profile;