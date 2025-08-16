"use client";

import { useContext, useState } from "react";
import { TarefasContext } from "@/context/TarefasProvider";
import ModalTarefa from "@/componentes/ModalTarefa";

const Tarefa = ({
  tarefa,
  onToggle,
}: {
  tarefa: any;
  onToggle: (id: number) => void;
}) => {
  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    tarefa.completed
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;

  const classeCorDoTexto = tarefa.completed ? "text-amber-50" : "";

  return (
    <div className={classeCard} onClick={() => onToggle(tarefa.id)}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>
        {tarefa.title}
      </h3>
      <p className={`text-sm ${classeCorDoTexto}`}>
        {tarefa.completed ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
};

const PageListaTarefas = () => {
  const { tarefas, toggleConclusao, carregando } = useContext(TarefasContext)!;
  const [mostrarModal, setMostrarModal] = useState(false);

  if (carregando) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-amber-50">Carregando tarefas...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-amber-50">Minhas Tarefas</h1>
        <button
          onClick={() => setMostrarModal(true)}
          className="px-4 py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 font-medium"
        >
          Adicionar Tarefa
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tarefas.map((tarefa) => (
          <Tarefa key={tarefa.id} tarefa={tarefa} onToggle={toggleConclusao} />
        ))}
      </div>

      {mostrarModal && <ModalTarefa onClose={() => setMostrarModal(false)} />}
    </div>
  );
};

export default PageListaTarefas;