import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  return isAuthenticated && (
<>
      <div >Hello  {user.name}</div>
      <img src={user.picture}  width="400 px"/>
        
</>
  )

}


export default Profile;
