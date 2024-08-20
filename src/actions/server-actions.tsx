"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../utils/prisma";

export async function createTodo(formData : FormData){
    const input = formData.get("input") as string | null;
    if(!input?.trim()){
        throw new Error("Input is required");
    }

    console.log(input);
    
    await prisma.todo.create({
        data: {
            title: input,
            
        }
    })

    revalidatePath("/");
}

export async function changeStatus(formData : FormData){
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    })

    const updateStatus = !todo?.isCompleted;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updateStatus,
        },
    })

    revalidatePath("/");
}

export async function editTodo(formData : FormData){
    const inputId = formData.get("inputId") as string;
    const editTodo = formData.get("editTodo") as string;

    await prisma.todo.update({
        where : {
            id : inputId
        },
        data : {
            title : editTodo
        }
    });

    revalidatePath("/");
}

export async function deleteTodo(formData : FormData){
    const inputId = formData.get("inputId") as string;
    
    await prisma.todo.delete({
        where : {
            id : inputId
        }
    });

    revalidatePath("/");
}