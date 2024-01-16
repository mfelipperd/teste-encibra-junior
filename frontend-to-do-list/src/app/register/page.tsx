'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { create, getAll } from '@/api/crud';
import { useUserContext } from '@/context/user/user.context';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleChangeData } = useUserContext()
  
  const handleRegister = async () => {
    event?.preventDefault()
    const data = {name, email, password}
    
    try {
        const response = await create(data);
        console.log(response)
      if (response?.data) {
        handleChangeData(response.data)
        router.push('/dashboard');
      } else {
        console.error('Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:',);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="bg-gray-100 p-8 rounded shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
        <form>
          <label className="block mb-2">Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block mb-2">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              onClick={handleRegister}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
