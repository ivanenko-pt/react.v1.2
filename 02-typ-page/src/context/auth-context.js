import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // The code started one time for first cicle
    useEffect(() => {
        const storedUserLogInfo = localStorage.getItem("isLoggedIn");
        if (storedUserLogInfo === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    /*
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}> === second isLoggedIn as a State
     **Everything we tell here is used global, when we are useContext(AuthContext)
    */

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
