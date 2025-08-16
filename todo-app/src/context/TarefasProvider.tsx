"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import dados from "@/data";
import type { Tarefa, TarefasContextType } from "@/types/tarefa";

export const TarefasContext = createContext<TarefasContextType | null>(null);

const TarefasProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const resposta = await axios.get("https://dummyjson.com/todos");
        const tarefasFormatadas = resposta.data.todos.map((todo: any) => ({
          id: todo.id,
          title: todo.todo,
          completed: todo.completed,
          userId: todo.userId,
        }));
        setTarefas(tarefasFormatadas);
      } catch (erro) {
        console.error("Erro ao carregar tarefas:", erro);
        setTarefas(dados);
      } finally {
        setCarregando(false);
      }
    };

    carregarTarefas();
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      title: titulo,
      completed: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const toggleConclusao = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    );
  };

  return (
    <TarefasContext.Provider
      value={{ tarefas, adicionarTarefa, toggleConclusao, carregando }}
    >
      {children}
    </TarefasContext.Provider>
  );
};

export default TarefasProvider;