import Input from "@/components/input/Input";
import AddTodo from "@/components/todo/AddTodo";
import Todo from "@/components/todo/Todo";
import { prisma } from "@/utils/prisma";

async function getData(){
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted : true
    },
    orderBy : {
      createdAt : "desc"
    }
  });

  return data;
}

export default async function Home() {

  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">w/</span>Server Actions
      </h1>

      <div className="flex justify-center flex-col items-center">
        {/* input todo */}
        <AddTodo/>
          <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
            {data.map((todo,id) => (
              <div className="" key={id}><Todo todo={todo}/></div>
            ))}
          </div>
      </div>
    </div>
  );
}
