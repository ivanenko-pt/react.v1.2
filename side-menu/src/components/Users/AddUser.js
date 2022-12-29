import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const AddUser = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={AddUser}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label>Years (age)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
