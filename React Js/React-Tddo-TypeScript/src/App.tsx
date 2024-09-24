import './App.css'
import AddToDo from './components/AddToDo'
import TodosData from './components/TodosData'

const  App = () =>  {
  
  return (
    <>
      <h1>TODO APP (React + TypeScript)</h1>
      <AddToDo/>
      <TodosData/>
    </>
  )
}

export default App
