import { todoProps } from '@/type/type'
import React from 'react'
import Form from "../form/Form";
import Button from "../button/Button"
import Input from "../input/Input"
import { FaTrash } from 'react-icons/fa';
import * as actions from "@/actions/server-actions"

const DeleteTodo = ({todo} : {todo : todoProps}) => {
  return (
    <div>
        <Form action={actions.deleteTodo}>
            <Input placeholder="" type="hidden" name="inputId" value={todo.id}/>
            <Button text={<FaTrash/>} actionButton bgColor="bg-red-500" type="submit"></Button>
        </Form>
    </div>
  )
}

export default DeleteTodo
