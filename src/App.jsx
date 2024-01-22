import { useState } from 'react'
import './App.css'
import Context from './Context/Context'
import BudgetPlanner from './Components/BudgetPlanner/BudgetPlanner'

function App() {
  document.title = "Budget Planner";

  return (
    <>
      <Context>
        <BudgetPlanner />
      </Context>
      
    </>
  )
}

export default App
