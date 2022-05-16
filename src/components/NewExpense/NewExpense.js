import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

    const saveExpenseDataHandler = () => {
        
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;