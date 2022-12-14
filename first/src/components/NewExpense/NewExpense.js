import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    console.log(isEditing);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    // Default component state is 'false'
    // this is the default content we should
    // display
    let editContent = (
        <button onClick={startEditingHandler}>Add New Expense</button>
    );

    // If our 'isEditing' state is flipped to true
    // set 'editContent' to display our form instead
    if (isEditing) {
        editContent = (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />
        );
    }

    return <div className="new-expense">{editContent}</div>;
};
export default NewExpense;
