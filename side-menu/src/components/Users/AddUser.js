import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    /*Use state
    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    */
    // if  we have one of them (if) .then reset dynamic error
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        // Use ref
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age",
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age ( > 0)",
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };
    /*Use state
    const usernameChangeHande;t ler = (event) => {
        setEnteredUsername(event.target.value);
        console.log(enteredUsername);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    */

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />

                    <label>Years (age)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
