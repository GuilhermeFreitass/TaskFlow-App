"use client";

import React, { useState } from "react";
import { TaskList } from "@/components/TaskList";
import { Task } from "@/components/TaskCard";

const mockTasks: Task[] = [
  {
    id: "1",
    description: "Finalizar apresentação do projeto",
    completed: false,
    priority: "Alta",
    category: "trabalho",
    dueDate: "02/12/2025",
  },
  {
    id: "2",
    description: "Estudar React hooks avançados",
    completed: true,
    priority: "Média",
    category: "estudos",
  },
  {
    id: "3",
    description: "Fazer 30 minutos de exercício",
    completed: false,
    priority: "Média",
    category: "saúde",
  },
  {
    id: "4",
    description: "Responder emails pendentes",
    completed: true,
    priority: "Baixa",
    category: "trabalho",
  },
  {
    id: "5",
    description: "Organizar arquivos do computador",
    completed: false,
    priority: "Baixa",
    category: "pessoal",
  },
];

export default function TarefasPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />;
}


