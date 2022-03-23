import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  // Multiple state slice approach
  // target.value is always a string so send useState empty string.
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");

  // Above approach is not necessary by passing object to useState({})
  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // Multiple state approach
    // setEnteredTitle(event.target.value);

    // Single state approach
    // Since React replaces old state with this update, must give it all data.
    setUserInput({
      // Copy old object
      ...userInput,
      // Update title
      enterdTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      // Copy old object
      ...userInput,
      // Update title
      enterdAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      // Copy old object
      ...userInput,
      // Update title
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
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
