'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });

      // Verificação de sucesso (substitua por sua lógica real)
      if (response.data.success) {
        // Redirecionar para a página da lista de tarefas após o login bem-sucedido
        // router.push('/tasks');
      } else {
        // Exibir mensagem de erro ou lidar com falha de autenticação
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      // Lidar com erros da API
      console.error('Erro ao autenticar:');
    }
  };

  return (
    <div className=''>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
