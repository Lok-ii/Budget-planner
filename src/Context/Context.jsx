import React, { createContext, useContext, useEffect, useRef, useState } from "react";

export const BudgetContext = createContext({});

export const useBudget = () => {
  return useContext(BudgetContext);
};

const Context = (props) => {

    const [expenseList, setList] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const nameRef = useRef();
    const costRef = useRef();

    useEffect(() => {
        setList((prev) => JSON.parse(localStorage.getItem("expenses")) || prev);
        calculateExpenses();
    }, []);

    const submitHandler = (e) =>{
        e.preventDefault();
        if(nameRef.current.value !== "" && costRef.current.value !== ""){
            let name = nameRef.current.value.split(/\s+/).join(" ");
            setList((prev) => {
                let newList = [...prev, {name: name, cost: costRef.current.value}]
                localStorage.setItem("expenses", JSON.stringify(newList));
                return newList;
            });
        }else{
            alert('Please enter valid details!')
        }

        nameRef.current.value = "";
        costRef.current.value = "";
    }

    const dltItem = (e) => {
        
        setList((prev) => {
            let filteredItems = prev.filter((item, idx)=> idx !== Number(e.target.id));

            localStorage.setItem("expenses", JSON.stringify(filteredItems));

            return filteredItems;
        });
    }

    const calculateExpenses = () => {
        setTotalExpense(()=>{
            let list = JSON.parse(localStorage.getItem("expenses")) || [];
            let sum = list.reduce((initialValue, currentValue) => {
                return Number(initialValue) + Number(currentValue.cost);
            }, 0);
            return sum;
        })
    }
    const values = {
        expenseList,
        submitHandler,
        dltItem,
        nameRef,
        costRef,
        totalExpense,
        calculateExpenses
    }

  return <BudgetContext.Provider value={values}>{props.children}</BudgetContext.Provider>;
};

export default Context;
