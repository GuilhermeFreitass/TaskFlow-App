"use client";

import { useState } from "react";
import { useTaskController } from "@/hooks/useTaskController";
import { Task } from "@/types/task";

export default function Home() {
  const {
    tasks,
    isLoading,
    createTask,
    toggleTask,
    deleteTask,
    updateTask, // <--- Agora importamos a função nova
  } = useTaskController();

  const [inputValue, setInputValue] = useState("");

  // --- NOVOS ESTADOS PARA EDIÇÃO ---
  const [editingId, setEditingId] = useState<number | null>(null); // Qual ID estou editando?
  const [editText, setEditText] = useState(""); // O texto temporário da edição

  // Inicia a edição
  const startEditing = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.title);
  };

  // Cancela a edição
  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  // Salva a edição
  const saveEditing = (id: number) => {
    if (editText.trim()) {
      updateTask(id, editText); // Chama o controller
      setEditingId(null); // Sai do modo edição
    }
  };

  // Funções de Criar (as mesmas de antes)
  const handleAdd = () => {
    if (inputValue.trim()) {
      createTask(inputValue, "");
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-xl mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">TaskFlow</h1>
      </div>

      <div className="w-full max-w-xl bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
        {/* Input de Adicionar */}
        <div className="p-6 border-b border-gray-800 flex gap-3">
          <input
            type="text"
            className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="O que precisa ser feito hoje?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Adicionar
          </button>
        </div>

        {/* Lista */}
        <div className="p-2 min-h-[200px]">
          <ul className="space-y-1">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="group flex items-center justify-between p-3 hover:bg-gray-800/50 rounded-lg transition-colors min-h-[60px]"
              >
                {/* --- LÓGICA DE EXIBIÇÃO: MODO EDIÇÃO vs MODO VISUAL --- */}

                {editingId === task.id ? (
                  // MODO EDIÇÃO (Mostra Input + Botões Salvar/Cancelar)
                  <div className="flex gap-2 w-full animate-fadeIn">
                    <input
                      type="text"
                      autoFocus
                      className="flex-1 bg-gray-950 border border-blue-500 text-white rounded px-3 py-1 outline-none"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEditing(task.id);
                        if (e.key === "Escape") cancelEditing();
                      }}
                    />
                    <button
                      onClick={() => saveEditing(task.id)}
                      className="text-green-500 px-2 text-sm font-bold"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="text-gray-500 px-2 text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  // MODO VISUAL (Mostra Checkbox + Texto + Botões)
                  <>
                    <div className="flex items-center gap-4 overflow-hidden flex-1">
                      <button
                        onClick={() => toggleTask(task.id, task.done)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          task.done
                            ? "bg-green-500 border-green-500"
                            : "border-gray-600"
                        }`}
                      >
                        {task.done && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </button>

                      <span
                        onDoubleClick={() => startEditing(task)} // Dica: Duplo clique edita também!
                        className={`truncate select-none cursor-pointer flex-1 ${
                          task.done
                            ? "text-gray-500 line-through"
                            : "text-gray-200"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>

                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* Botão Editar (Lápis) */}
                      <button
                        onClick={() => startEditing(task)}
                        className="text-gray-400 hover:text-blue-400 p-2"
                        title="Editar"
                      >
                        ✏️
                      </button>

                      {/* Botão Deletar (Lixeira) */}
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-gray-400 hover:text-red-500 p-2"
                        title="Excluir"
                      >
                        🗑️
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
