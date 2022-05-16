import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2020');

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const expenseItems = filteredExpenses.map(item => 
        <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    );

    // console.log('typeof expenseItems[0]: ', typeof expenseItems[0]);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expenseItems}
        </Card>
    );
};

export default Expenses;