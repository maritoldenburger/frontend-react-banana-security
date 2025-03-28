import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);

    const authData = {
        isAuth,
        login,
        logout
    };

    return (
    <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthContextProvider;