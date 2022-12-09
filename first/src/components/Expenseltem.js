import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function Expenseltem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
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
