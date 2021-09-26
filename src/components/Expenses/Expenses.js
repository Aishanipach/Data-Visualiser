import React, { useState } from "react";

import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* Changing expense array element to Expenseitem type */}
        {props.item.map((expense)=> (
          <Expenseitem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))};

        
      </Card>
    </div>
  );
};

export default Expenses;
