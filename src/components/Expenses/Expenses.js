import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState('2020');

    const expenseItems = props.items.map(item => 
        <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    );

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