import React, { useState } from 'react';
const Conditionalrendering = () =>{
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <button onClick = {()=>setLoggedIn(!loggedIn)}>
                {loggedIn? "Logout" : "Login"}
            </button>
            {loggedIn?(
                <h1> Hello, Anthony!</h1>
            ):(<div> Please login to continue</div>)}
        </div>
    )

}

export default Conditionalrendering