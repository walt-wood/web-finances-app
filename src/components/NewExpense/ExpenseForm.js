import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // Multiple state slice approach
  // target.value is always a string so send useState empty string.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // Above approach is not necessary by passing object to useState({})
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Multiple state approach
    setEnteredTitle(event.target.value);

    // Single state approach
    // Since React replaces old state with this update, must give it all data.
    // setUserInput({
    //   // Copy old object
    //   ...userInput,
    //   // Update title
    //   enteredTitle: event.target.value,
    // });

    // This approach guaranties the previous state is the one we want. The latest previous state.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     entertedTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   // Copy old object
    //   ...userInput,
    //   // Update title
    //   enterdAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   // Copy old object
    //   ...userInput,
    //   // Update title
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // Prevents default behavior of browser sending form info to hosting server.
    event.preventDefault();

    // gather data into new object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Sending data to NewExpense.js
    props.onSaveExpenseData(expenseData);
    // By adding value prop to html <input>'s below, we can reset the displayed data by calling these functions with
    // an empty string as the argument.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required
            value={enteredTitle}
            onChange={titleChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            required
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            required
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
