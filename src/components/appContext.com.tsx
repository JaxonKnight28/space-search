import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
const auth = getAuth()
type GlobalState = {
    loggedIn: boolean;
    user?: string;
}

type ProviderState = {
    state: GlobalState;
    onLogin?: (name: string) => void
    onLogout?: () => void
}

const GlobalContext = createContext<ProviderState>({ state: { loggedIn: false } });

type Props = {
    children: ReactNode;
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }: Props) {
    const [state, setState] = useState<GlobalState>({ loggedIn: false })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log('STATE WORked', user);

                setState({ ...state, user: user.uid, loggedIn: true })
                //const uid = user.uid;
                // ...
            } else {
                setState({ loggedIn: false })
                // User is signed out
                // ...
            }
        });
    })
    const handleLogout = () => {
        setState({ loggedIn: false })
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    const providerState = useMemo(() => {
        return {
            state,
            onLogout: handleLogout
        }
    }, [state])
    return (
        <GlobalContext.Provider value={providerState}>
            {children}
        </GlobalContext.Provider>
    )
}
