import React from "react";

const AddUser = (props) => {
    const AddUser = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={AddUser}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />

            <label>Year(age)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
