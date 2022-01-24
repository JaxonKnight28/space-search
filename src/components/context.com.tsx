import React, { useState } from 'react';
import { useContext } from 'react';


export const UserContext = React.createContext({
    user: "en",
    setUser: () => { }
});


// export const UserSetter = () => {
//     const { user, setUser } = useContext(UserContext);
//     setUser()
//     return (
//         <button onClick={() => setUser("jp")}>
//             Switch Language (Current: {user})
//         </button>
//     );
// };

// export function ContextTest() {
//     const userSetter = () => {
//         const { user, setUser } = useContext(UserContext)
//     }
// }