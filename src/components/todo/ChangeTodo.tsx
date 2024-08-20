import React from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'
import * as actions from "@/actions/server-actions"
import { todoProps } from '@/type/type'
import { FaCheck } from 'react-icons/fa'



const ChangeTodo = ({todo} : {todo : todoProps}) => {
  return (
    <>
        <Form action={actions.changeStatus}>
            <Input placeholder='' name='inputId' value={todo.id} type='hidden'/>
            <Button type='submit' text={<FaCheck/>} actionButton bgColor={todo.isCompleted? 'bg-green-400' : 'bg-blue-500'}></Button>
        </Form>
    </>
  )
}

export default ChangeTodo
