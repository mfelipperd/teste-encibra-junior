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
      <div>
      <TaskForm task={adjustedTask} />
      </div>
      
    </>
  );
}

