import { getOne } from "@/api/crud";
import { Task } from "@/context/task/task.context";
import { useUserContext } from "@/context/user/user.context";
import { useState, useEffect } from "react";
import NavigationBar from "./navbar";
import TaskCard from "./task";
import { TasksListProps } from "@/types/interfaces";

const Dashboard:React.FC<TasksListProps> = ({ title, tipo }) => {
    const { user } = useUserContext();
    const [tasks, setTasks]  = useState<Task[]>([])
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
  
    useEffect(() => {
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
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          {tasks.filter(task => task.finished === tipo).map((task) => (
            <TaskCard 
              task={task}
              key={task.id}
              fetchUserData={fetchUserData}
              {...task}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;