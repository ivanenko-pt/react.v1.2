import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App(props) {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUserList) => {
            return [
                ...prevUserList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
        console.log(usersList);
        // setUsersList((prevUserList) => {
        //     const updateUserList = [...prevUserList];
        //     updateUserList.unshift({
        //         id: Math.random().toString(),
        //     });
        //     console.log(updateUserList);
        // });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
