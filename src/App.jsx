import { useState } from 'react'
import './App.css'
import Context from './Context/Context'
import BudgetPlanner from './Components/BudgetPlanner/BudgetPlanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Context>
        <BudgetPlanner />
      </Context>
      
    </>
  )
}

export default App
