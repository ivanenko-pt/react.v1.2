import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function Expenseltem(props) {
    const [title, setTitle] = useState(props.title);
    console.log("Ex item");

    const clickHandler = () => {
        setTitle("Updated");
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}$</div>

            <button onClick={clickHandler}>Change</button>
        </Card>
    );
}

export default Expenseltem;
