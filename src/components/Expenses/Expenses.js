import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2020');

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    let expensesContent = <p>No expenses found!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(item => 
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
};

export default Expenses;