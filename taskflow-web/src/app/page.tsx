"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  AiOutlineFileText,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineRise,
} from "react-icons/ai";
import { TealButton } from "@/components/TealButton";
import StatCard from "@/components/StatCard";
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

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <header className="flex justify-between items-start px-16 py-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white">
            Olá, seja bem-vindo!
          </h1>
          <p className="text-base text-gray-400">
            Aqui está seu resumo de produtividade de hoje.
          </p>
        </div>
        <TealButton icon={<AiOutlinePlus />} size="large">
          Nova Tarefa
        </TealButton>
      </header>
      <div className="grid grid-cols-4 gap-6 px-16 mb-8">
        <StatCard
          title="Total de Tarefas"
          value="5"
          description="tarefas criadas"
          icon={<AiOutlineFileText />}
        />
        <StatCard
          title="Concluídas"
          value="2"
          description="tarefas finalizadas"
          icon={<AiOutlineCheckCircle />}
        />
        <StatCard
          title="Pendentes"
          value="3"
          description="aguardando"
          icon={<AiOutlineClockCircle />}
        />
        <StatCard
          title="Alta Prioridade"
          value="1"
          description="precisam atenção"
          icon={<AiOutlineRise />}
        />
      </div>
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        showHeader={false}
      />
    </>
  );
}
