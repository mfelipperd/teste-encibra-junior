'use client'
import React, { useEffect, useState } from 'react';
import NavigationBar from '@/components/navbar';
import { useUserContext } from '@/context/user/user.context';
import TaskCard from '@/components/task';
import { getOne } from '@/api/crud';

export default function ConcluedTasks() {
    const { user } = useUserContext();
    const [tasks, setTasks]  = useState([])

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userData = await getOne(user.id);
          setTasks(userData.tasks)
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };
      fetchUserData();
    }, [user.id]);
    console.log(tasks)

  return (
    <>
      <NavigationBar />
      
      <div className="flex min-h-screen p-5 flex-col items-center justify-center bg-gray-200">
        <div className="bg-gray-100 p-8 rounded shadow-md mb-4 flex-grow text-black min-w-[330px]">
          <h1 className="text-2xl font-bold mb-4">Tarefas Concluidas</h1>
          {tasks.filter(task => task.finished === true).map((task) => (
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              finished={task.finished}
              term={task.term}
              key={task.id}
              {...task}
            />
          ))}
        </div>
      </div>
    </>
  );
}