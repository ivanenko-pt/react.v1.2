import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    console.log(title);

    const clickHandler = () => {
        setTitle("Updated");
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">{props.amount}$</div>

                <button onClick={clickHandler}>Change</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
