import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Copying data from ExpenseForm and adding a key
    const expenseData = {
      ...enteredExpenseData,
      // this approach could produce duplicate keys..
      id: crypto.randomUUID(),
    };
    console.log(expenseData);
    // Send data upwards to App.js
  };

  // onSaveExpenseData is a user made prop used to transfer data backwards up the component tree.
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
