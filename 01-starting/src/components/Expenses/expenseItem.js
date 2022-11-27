import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  /*   const expansedate = new Date(2022, 7, 13);
  const expensetitle = "car insurance"; */
  //console.log(props);
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
