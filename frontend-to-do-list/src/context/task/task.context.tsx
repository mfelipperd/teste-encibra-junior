'use client'
import React, { ReactNode, useCallback, useState, createContext, useContext } from "react";

export interface Task {
    id:string;
    title: string;
    description: string;
    finished: boolean;
    priority: number;
    term: string | null;
  }

  interface TaskContextData{
    task: Task;
    handleChangeData: (task:Task) => void;
  }

  interface TaskProviderProps{
    children: ReactNode
  }

  const TaskContext = createContext<TaskContextData | undefined>(undefined);

  export const TaskProvider = ({children}:TaskProviderProps) => {
    const [task, setTask] = useState<Task>({
        id:'',
        title:'',
        description:'',
        finished:false,
        priority:0,
        term: ''
    });

    const handleChangeData = useCallback((data: Task) => {
        setTask(data);
    }, []);

    return (
        <TaskContext.Provider value={{task, handleChangeData}}>
            {children}
        </TaskContext.Provider>
    )
  }

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error('useTaskContext must be used with in a TaskProvider')
    }
    return context
}

