import React from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth();
let id = auth.currentUser?.uid;
if (auth.currentUser?.uid == undefined) {
    id = ''
}


// set the defaults
const UserContext = React.createContext({
    user: id,
    setUser: (user: string) => { '' }
});


export default UserContext;
