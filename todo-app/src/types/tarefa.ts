export interface Tarefa {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export type TarefasContextType = {
  tarefas: Tarefa[];
  adicionarTarefa: (titulo: string) => void;
  toggleConclusao: (id: number) => void;
  carregando: boolean;
};