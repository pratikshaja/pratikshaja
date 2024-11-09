import React, { useState } from "react";

function Profile(){
   let [loggedIn, setLoggedIn] = useState(false);
    return(
        <div>
            <h3>Profile component</h3>
            {
             loggedIn?
             <h4>Welcome User !!</h4>:
             <h4>Welcome Guest</h4>
            }
            <hr />
        </div>
    )
}
export default Profile;