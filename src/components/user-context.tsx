import React from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const id = auth.currentUser?.uid;


// set the defaults
const UserContext = React.createContext({
    user: id,
    setUser: (user: string) => { }
});

export default UserContext;
