// components/NavigationBar.tsx
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
//import { UserContext } from '../contexts/UserContext';

const NavigationBar: React.FC = () => {
  const router = useRouter();
  //const { user, logout } = useContext(UserContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Título */}
        <div>
          <h1 className="text-xl font-bold">Logo da Empresa</h1>
        </div>

        {/* Botões de Navegação */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Botão Histórico de Tarefas */}
          <button
            onClick={() => router.push('/tasks')}
            className="hover:underline"
          >
            Histórico de Tarefas
          </button>

          {(
            <button onClick={handleLogout} className="hover:underline">
              Sair
            </button>
          )}
        </div>

        {/* Menu Sanduíche para Dispositivos Móveis */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu Sanduíche (Responsivo) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <button
            onClick={() => router.push('/tasks')}
            className="block text-white py-2 px-4 hover:bg-gray-600"
          >
            Histórico de Tarefas
          </button>
          { (
            <button
              onClick={handleLogout}
              className="block text-white py-2 px-4 hover:bg-gray-600"
            >
              Sair
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
