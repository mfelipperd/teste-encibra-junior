'use client'
import React, { useEffect, useState } from 'react';
import NavigationBar from '@/components/navbar';
import { useUserContext } from '@/context/user/user.context';
import TaskCard from '@/components/task';
import { getOne } from '@/api/crud';

export default function Dashboard() {
    const { user } = useUserContext();
    const [tasks, setTasks]  = useState([])

    const handleCreateTask = () => {
      // Adicione aqui a lógica para criar uma nova tarefa
      console.log('Criar Nova Tarefa');
    };

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userData = await getOne(user.id);
          console.log('@@@@@@',userData);
          setTasks(userData.tasks)
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };
      fetchUserData();

    }, [user.id]);

  // return (
  //   <>
  //     <NavigationBar />
  //     <div className="flex h-auto p-5 flex-col items-center justify-center bg-gray-200">
  //       <div className="bg-white p-8 rounded shadow-md mt-4">
  //         <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
  //         {tasks.map((task) => (
  //           <TaskCard
  //             id={task.id}
  //             title={task.title}
  //             description={task.description}
  //             finished={task.finished}
  //             term={task.term}
  //             key={task.id}
  //             {...task}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <NavigationBar />
      
      <div className="flex h-auto p-5 flex-col items-center justify-center bg-gray-200">
      
        <div className="bg-white p-8 rounded shadow-md mt-4">
          <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
          {tasks.map((task) => (
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

