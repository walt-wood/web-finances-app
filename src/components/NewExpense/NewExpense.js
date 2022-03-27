import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Copying data from ExpenseForm and adding a key
    const expenseData = {
      ...enteredExpenseData,
      // this is built in unique id generator
      id: crypto.randomUUID(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    // Send data upwards to App.js
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // onSaveExpenseData is a user made prop used to transfer data backwards up the component tree.
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
