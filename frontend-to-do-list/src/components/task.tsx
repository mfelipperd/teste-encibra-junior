
import { updateTask } from '@/api/crud';
import { useTaskContext } from '@/context/task/task.context';
import { formatData } from '@/functions/function';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsPencil, BsCheck } from 'react-icons/bs';

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  term: string | null;
  priority: number;
  user?:string
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, finished, priority,term }) => {
  const { handleChangeData } = useTaskContext();
  const router = useRouter()

  function editCard(){
    const data = {id, title, description, finished, priority ,term}
    handleChangeData(data);
    router.push('/edit-task')
  }
  async function conclued(){
    if(!finished){
      await updateTask(id, {finished: true})
    }
      await updateTask(id, {finished: false})
  }

  function prioridade(p: number){
    if(p===1)return 'Baixa'
    if(p===2)return 'Média'
    return 'Alta'
  }
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <div className="flex justify-between items-center mb-2"
      >
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            title="Editar"
            className="text-gray-500 hover:text-blue-500 focus:outline-none ml-2"
          >
            <BsPencil onClick={editCard}/>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            title={finished ? 'Desfazer Conclusão' : 'Concluir'}
            className={`text-${finished ? 'green' : 'gray'}-500 hover:text-green-700 focus:outline-none`}
            
          >
            <BsCheck size={30} onClick={() => conclued()}/> 
          </button>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">Prioridade: {prioridade(priority)}</p>
      <p className={`font-bold mt-2 ${finished ? 'text-green-500' : 'text-red-500'}`}>
        {finished ? 'Concluída' : 'Pendente'}
      </p>
      {term && <p className="text-gray-500 mt-2">Prazo: {formatData(term)}</p>}
    </div>
  );
};

export default TaskCard;

