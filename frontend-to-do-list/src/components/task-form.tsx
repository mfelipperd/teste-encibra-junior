'use client'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { create, updateTask } from '@/api/crud';
import { useRouter } from 'next/navigation';

interface TaskFormProps {
  task: {
    id: string;
    title: string;
    description: string;
    term: string;
    finished: boolean;
  };
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [term, setTerm] = useState<string | null>(null);
  const [createComp, setCreate] = useState(true);
  const router = useRouter();

  const handleSubmitEdited = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || (term && !term.trim())) {
      notifyError('Todos os campos são obrigatórios.');
      return;
    }

    const data = {
      title,
      description,
      term,
      finished: task.finished,
    };

    try {
      createComp ? await create(data) : await updateTask(task.id, data);
      notifySuccess('Tarefa salva com sucesso!');
      setTitle('');
      setDescription('');
      setTerm(null);
      router.push('/dashboard')
    } catch (error) {
      notifyError('Ocorreu um erro ao salvar a tarefa. Por favor, tente novamente.');
    }
  };

  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (task) {
      setDescription(task.description);
      setTitle(task.title);
      setTerm(task.term);
      setCreate(false);
    }
  }, [task]);

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{createComp ? 'Adicionar Nova Tarefa' : 'Editar Tarefa'}</h2>
      <form onSubmit={handleSubmitEdited} className="flex flex-col items-center">
      <label htmlFor="title" className="text-gray-700 mb-2">
           Título da Tarefa:
        </label>         
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full text-black"
          required
        />

        <label htmlFor="description" className="text-gray-700 mb-2">
          Descrição:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full text-black"
          required
        />

        <label htmlFor="term" className="text-gray-700 mb-2 ">
          Prazo (opcional):
        </label>
        <input
          type="date"
          id="term"
          value={term || ''}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full text-black"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {createComp ? 'Adicionar Tarefa' : 'Editar Tarefa'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TaskForm;
