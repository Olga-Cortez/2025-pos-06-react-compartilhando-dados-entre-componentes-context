"use client";

import Link from "next/link";
import Cabecalho from "@/componentes/Cabecalho";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Cabecalho />

      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-3xl font-bold text-amber-50 mb-6">Bem-vindo ao Gerenciador de Tarefas</h1>
        <Link
          href="/tarefas"
          className="px-6 py-3 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 font-medium text-lg"
        >
          Ver Tarefas
        </Link>
      </div>
    </div>
  );
};

export default Home;