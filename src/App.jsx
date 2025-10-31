import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewToDo from './components/NewToDo/NewToDo.jsx'
import ListTodo from './components/ListToDo/ListToDo.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [todoList, setToDoList] = useState([
    { id: 1, learn: 'Learn React' },
    { id: 2, learn: 'Learn Vite'},
    { id: 3, learn: 'Learn JavaScript' }
  ])
  console.log('Todo List:', todoList)
  const addNewTodo = (name) => {
    const newTodo = { id: 5, name: name }
    setToDoList([...todoList, newTodo])
  }

  return (
    <>
    <h1>TodoList</h1>
      <NewToDo 
        addNewTodo={addNewTodo}
      />
      <ListTodo 
        todoList={todoList}
      />
    </>
  )
}

export default App
