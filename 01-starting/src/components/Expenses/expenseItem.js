import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import React from "react";

function ExpenseItem(props) {
  /*   const expansedate = new Date(2022, 7, 13);
  const expensetitle = "car insurance"; */
  console.log(props);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
