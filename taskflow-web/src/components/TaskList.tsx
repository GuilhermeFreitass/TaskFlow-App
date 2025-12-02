"use client";

import React from "react";
import { TaskCard, Task } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete?: (id: string) => void;
  showHeader?: boolean;
  className?: string;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  showHeader = true,
  className = "",
}: TaskListProps) => {
  const pendingCount = tasks.filter((task) => !task.completed).length;

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
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

