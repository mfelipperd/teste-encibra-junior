'use client'
import React, { useState } from 'react';
import NavigationBar from '@/components/navbar';
import { useUserContext } from '@/context/user/user.context';
import TaskCard from '@/components/task';

export default function Dashboard() {
    const { user } = useUserContext();
    const tasks  = user.tasks

  return (
    <>
      <NavigationBar />
      <div className="flex h-auto p-5 flex-col items-center justify-center h-screen bg-gray-200">
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

