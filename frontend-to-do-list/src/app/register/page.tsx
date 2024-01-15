// pages/register.tsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { name, email, password });

      // Verificação de sucesso (substitua por sua lógica real)
      if (response.data.success) {
        // Redirecionar para a página da lista de tarefas após o registro bem-sucedido
        router.push('/tasks');
      } else {
        // Exibir mensagem de erro ou lidar com falha de registro
        console.error('Erro ao cadastrar');
      }
    } catch (error) {
      // Lidar com erros da API
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
              type="button"
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
