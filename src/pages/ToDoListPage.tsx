import { Header } from "../components/header/Header"
import { Form } from "../components/form/Form"
import { ToDolist } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"
export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: 'Первая задача',
      isDone: false
    },
    {
      id: 1,
      text: 'Первая задача',
      isDone: true
    },
    {
      id: 2,
      text: 'третья задача',
      isDone: true
    }
  ])

  const creatNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newToDo])
  }

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
    setTodos(newTodos)
  }
  return (
    <>
      <Header />
      <Form creatNewToDo={creatNewToDo} />
      <ToDolist todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  )
}
