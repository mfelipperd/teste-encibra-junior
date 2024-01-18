'use client'
import React, { useEffect, useState } from 'react';
import NavigationBar from '@/components/navbar';
import { useUserContext } from '@/context/user/user.context';
import TaskCard from '@/components/task';
import { getOne } from '@/api/crud';
import { Task } from '@/context/task/task.context';

export default function ConcluedTasks() {
  const { user } = useUserContext();
  const [tasks, setTasks]  = useState<Task[]>([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user.id) {
          const userData = await getOne(user.id);
          setTasks(userData.tasks);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    fetchUserData();
  }, [user.id]);

  if(!tasks || tasks.length <= 0){
    return(
      <>
      <NavigationBar />
      <div className="flex h-screen p-5 flex-col items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md mt-4 text-black">
          Você ainda não tem Tarefas!
        </div>
      </div>
      </>
    )
  }

return (
  <>
    <NavigationBar />
    <div className="flex min-h-screen p-5 flex-col items-center justify-center bg-gray-200 overflow-auto text-black">
      <div className="bg-gray-100 p-4 rounded shadow-md mb-4 flex-grow min-w-[330px]">
        <h1 className="text-2xl font-bold mb-4">Tarefas Concluidas</h1>
        {tasks.filter(task => task.finished === false).map((task) => (
          <TaskCard
            key={task.id}
            {...task}
          />
        ))}
      </div>
    </div>
  </>
);
}