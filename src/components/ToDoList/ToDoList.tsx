import { text } from 'stream/consumers'
import './ToDoList.scss'

import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from '../../models/todo-item'


export const ToDolist = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        )
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo} />
        )
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list-failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
    </div>
  )
}
