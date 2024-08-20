import React from 'react'
import ChangeTodo from './ChangeTodo'
import { todoProps } from '@/type/type'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo} : { todo : todoProps}) => {
  
  return (
    <div>
        <div className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
          <ChangeTodo todo={todo}/>
          <span className={todo?.isCompleted ? 'line-through text-white' : "text-center text-white font-bold uppercase grow"}>{todo.title}</span>
          <div className="flex items-center mx-2">
            <EditTodo todo={todo}/>
          </div>

          <div className="flex items-center">
            <DeleteTodo todo={todo}/>
          </div>
        </div>
    </div>
  )
}

export default Todo
