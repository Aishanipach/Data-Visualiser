import React from "react";

import "./Expenseitem.css";
import Expensedate from "./Expensedate";
import Card from "../UI/Card";

const Expenseitem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <Expensedate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default Expenseitem;
