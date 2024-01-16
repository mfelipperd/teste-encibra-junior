'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/api/crud';
import { useUserContext } from '@/context/user/user.context';

const LoginPage: React.FC = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleChangeData } = useUserContext();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      console.log(response);
      if (response?.data.accessToken) {
        handleChangeData(response.data.user)
        router.push('/dashboard');
      } else {
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao autenticar:');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="bg-gray-100 p-8 rounded shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
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
              onClick={handleLogin}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-1/2 mr-2"
            >
              Entrar
            </button>
            <button
              type="button"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-1/2 ml-2"
              onClick={() => router.push('/register')}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
