import React from "react";
import { useBudget } from "../../Context/Context";
import { MdDelete } from "react-icons/md";
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
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default BudgetItem;
