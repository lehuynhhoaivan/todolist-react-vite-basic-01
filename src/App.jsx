import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewToDo from './components/NewToDo/NewToDo.jsx'
import ListTodo from './components/ListToDo/ListToDo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>TodoList</h1>
      <NewToDo />
      <ListTodo />
    </>
  )
}

export default App
