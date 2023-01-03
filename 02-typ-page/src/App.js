import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import { AuthContextProvider } from "./context/auth-context";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // The code started one time for first cicle
    useEffect(() => {
        const storedUserLogInfo = localStorage.getItem("isLoggedIn");
        if (storedUserLogInfo === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };
    /*
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}> === second isLoggedIn as a State
     **Everything we tell here is used global, when we are useContext(AuthContext)
    */

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
            }}
        >
            <MainHeader />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>
    );
}

export default App;
