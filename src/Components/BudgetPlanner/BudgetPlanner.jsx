import React from "react";
import { useBudget } from "../../Context/Context";
import BudgetItem from "../BudgetItem/BudgetItem";
import "./budgetplanner.css";

const BudgetPlanner = () => {
  const budgetCtx = useBudget();

  return (
    <div className="budgetPage">
      <h1>My Budget Planner</h1>
      <div className="budgetCalculation">
        <p className="totalBudget">Budget: Rs. {10000} </p>
        <p className="remainingBudget">
          Remaining : Rs. {(10000) - (budgetCtx.totalExpense)}
        </p>
        <p className="spent">Spent so far: Rs. {budgetCtx.totalExpense}</p>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          budgetCtx.submitHandler(e);
          budgetCtx.calculateExpenses();
        }}
        className="addItems"
      >
        <div className="nameContainer">
          <label htmlFor="expenseName">Name</label>
          <input ref={budgetCtx.nameRef} type="text" id="expenseName" />
        </div>
        <div className="amountContainer">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" ref={budgetCtx.costRef} />
        </div>
        <button className="submitBtn">Add Item</button>
      </form>

      <div className="expenseContainer">
        <h1 className="expenseHead">Expenses</h1>
        <div className="expenseList">
          {budgetCtx.expenseList.length === 0 ? (
            <p className="noData">Add Data to List . . . .</p>
          ) : (
            budgetCtx.expenseList.map((item, idx) => {
              return <BudgetItem item={item} key={idx} idx={idx} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
