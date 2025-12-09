"use client";

import React from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete?: (id: number) => void;
  showHeader?: boolean;
  className?: string;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  showHeader = true,
  className = "",
}: TaskListProps) => {
  const pendingCount = tasks.filter((task) => !task.done).length;

  return (
    <div className={`px-16 py-8 ${className}`}>
      {showHeader && (
        <header className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-white">Suas Tarefas</h1>
          <p className="text-base text-gray-400">{pendingCount} pendentes</p>
        </header>
      )}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="block">
            <TaskCard task={task} onToggleComplete={onToggleComplete} />
          </div>
        ))}
      </div>
    </div>
  );
};
