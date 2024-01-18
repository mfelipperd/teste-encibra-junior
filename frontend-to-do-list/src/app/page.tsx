// Importando o Link do Next.js
import Link from "next/link";

// Definindo o componente WelcomePage
const WelcomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200 text-black">
      <div className="bg-gray-100 p-8 rounded shadow-md w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center uppercase">Bem vindo ao To-Do List</h1>
        <p className="mb-6">
          Uma aplicação simples para gerenciar suas tarefas diárias.
        </p>
        <Link href="/login" className="block w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-center uppercase font-bold">
            Gerenciar Tarefas
        </Link>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Atividades que podem ser feitas:</h2>
          <ul className="list-disc pl-6">
            <li>Adicionar tarefas</li>
            <li>Gerenciar tarefas</li>
            <li>Editar tarefas</li>
            <li>Excluir tarefas</li>
            <li>Visualizar apenas tarefas concluídas</li>
            <li>Visualizar apenas tarefas pendentes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Exportando o componente
export default WelcomePage;
