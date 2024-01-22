import React from "react";
import { useBudget } from "../../Context/Context";
import "./budgetitem.css";

const BudgetItem = (props) => {
  const budgetCtx = useBudget();
  return (
    <div className="budgetItem">
      <p className="expenseItem">{props.item.name}</p>
      <div className="amountAndDlt">
        <p className="spentAmount">Rs. {props.item.cost}</p>
        <button
          onClick={(e) => {
            budgetCtx.dltItem(e);
            budgetCtx.calculateExpenses();
          }}
          id={props.idx}
        >
          dlt
        </button>
      </div>
    </div>
  );
};

export default BudgetItem;
