"use client";

import React, { useState } from "react";
import { TaskList } from "@/components/TaskList";
import { Task } from "@/types/task";

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Finalizar apresentação do projeto",
    description: "Preparar slides e documentação",
    done: false,
    priority: "Alta",
    dueDate: "2025-12-02T00:00:00.000Z",
    isImportant: true,
    status: "EmProgresso",
    projectId: null,
    createdAt: "2025-12-01T10:00:00.000Z",
    updatedAt: "2025-12-01T10:00:00.000Z",
  },
  {
    id: 2,
    title: "Estudar React hooks avançados",
    description: "useMemo, useCallback, useReducer",
    done: true,
    priority: "Media",
    dueDate: null,
    isImportant: false,
    status: "Concluido",
    projectId: null,
    createdAt: "2025-12-01T09:00:00.000Z",
    updatedAt: "2025-12-01T15:00:00.000Z",
  },
  {
    id: 3,
    title: "Fazer 30 minutos de exercício",
    description: "",
    done: false,
    priority: "Media",
    dueDate: null,
    isImportant: false,
    status: "Pendente",
    projectId: null,
    createdAt: "2025-12-01T08:00:00.000Z",
    updatedAt: "2025-12-01T08:00:00.000Z",
  },
  {
    id: 4,
    title: "Responder emails pendentes",
    description: "",
    done: true,
    priority: "Normal",
    dueDate: null,
    isImportant: false,
    status: "Concluido",
    projectId: null,
    createdAt: "2025-12-01T07:00:00.000Z",
    updatedAt: "2025-12-01T12:00:00.000Z",
  },
  {
    id: 5,
    title: "Organizar arquivos do computador",
    description: "",
    done: false,
    priority: "Normal",
    dueDate: null,
    isImportant: false,
    status: "Pendente",
    projectId: null,
    createdAt: "2025-12-01T06:00:00.000Z",
    updatedAt: "2025-12-01T06:00:00.000Z",
  },
];

export default function TarefasPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleToggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />;
}
