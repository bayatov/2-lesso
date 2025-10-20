import './ToDoList.scss' // ✅ правильный вариант

import { ToDoListItem } from "./ToDoListItem/ToDoListItem"


export const ToDolist = () => {
  return(
    <div className="todo-container">
        <ToDoListItem />
        <ToDoListItem />
        {/* <ul className="todo-list completed">
            <li className="todo-list-item__wrapper">
                <span>Вторая задача</span>
                <div className="todo-list-item__buttons">
                    <button className="btn-trash"></button>
                    <button className="btn-uncheck"></button>
                </div>
            </li>
        </ul>  */}
    </div>
  )
}
