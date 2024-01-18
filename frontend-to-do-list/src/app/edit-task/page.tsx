// EditTask.tsx
'use client'
import React from 'react';
import NavigationBar from '@/components/navbar';
import { useTaskContext } from '@/context/task/task.context';
import TaskForm from '@/components/task-form';


export default function EditTask() {
    const { task } = useTaskContext();
    const adjustedTask = {
        ...task,
        term: task?.term || '',
      };

  return (
    <>
      <NavigationBar />
      <div className="flex min-h-screen p-5 flex-col items-center justify-center bg-gray-200">
      <TaskForm task={adjustedTask} />
      </div>
      
    </>
  );
}

