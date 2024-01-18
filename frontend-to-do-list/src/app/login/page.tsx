'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '@/api/crud';
import { useUserContext } from '@/context/user/user.context';
import Loading from '@/components/loading';

 const LoginPage: React.FC = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading]=useState(false);
  const { handleChangeData } = useUserContext();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      if (response?.data.accessToken) {
        notifySuccess
        handleChangeData(response.data.user)
        setIsLoading(true);
        router.push('/dashboard');
      } else {
        console.error('Credenciais inválidas');
        notifyError('Credenciais inválidas, Cadastre-se e aproveite o To Do List completo');
      }
    } catch (error) {
      console.error('Erro ao autenticar:');
      notifyError('Ocorreu um erro ao autenticar. Por favor, tente novamente mais tarde.');

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

 const loginPageHTML = (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-black">
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
        <ToastContainer />
      </div>
    </div>
  );
  const loading = <Loading />
  return isLoading?loading:loginPageHTML
};

export default LoginPage