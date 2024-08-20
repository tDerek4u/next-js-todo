"use client"
import React, { useState } from 'react'
import Button from '../button/Button';
import { MdEdit } from 'react-icons/md';
import Form from '../form/Form';
import Input from '../input/Input';
import { todoProps } from '@/type/type';
import * as actions from "@/actions/server-actions";

const EditTodo = ({ todo }: { todo: todoProps }) => {

  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  }

  const handleSubmit = () => {
    setEditTodo(false);
  }
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodo ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name='inputId' value={todo.id} type='hidden' placeholder='' />
          <div className="flex justify-center">
            <Input name='editTodo' value={todo.title} type='text' placeholder='Edit Todo Here...' />
            <Button type='submit' text="Update" bgColor='bg-blue-600' />
          </div>

        </Form>
      ) : ""}
    </div>
  )
}

export default EditTodo;