import React, { useContext } from "react";

import UserContext from "./user-context";

const UserSwitcher = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <button onClick={() => setUser("jp")}>
            Switch Language (Current: {user})
        </button>
    );
};

export function ChangeUser(id: any) {
    console.log('worked');

    const { user, setUser } = useContext(UserContext);
    console.log('ID', id.displayName);

    setUser(id)
}
export default UserSwitcher;