import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2020');

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;