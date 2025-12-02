"use client";

import React from "react";
import { Card } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";

export interface Task {
  id: string;
  description: string;
  completed: boolean;
  priority: "Alta" | "Média" | "Baixa";
  category: string;
  dueDate?: string;
}

interface TaskCardProps {
  task: Task;
  onToggleComplete?: (id: string) => void;
}

const getPriorityColor = (priority: string) => {
  if (priority === "Alta")
    return "bg-red-500/20 text-red-400 border-red-500/30";
  if (priority === "Média")
    return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  return "bg-green-500/20 text-green-400 border-green-500/30";
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    trabalho: "bg-green-500/20 text-green-400 border-green-500/30",
    estudos: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    saúde: "bg-green-500/20 text-green-400 border-green-500/30",
    pessoal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  };
  return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

export const TaskCard = ({ task, onToggleComplete }: TaskCardProps) => {
  return (
    <Card
      className={`bg-gray-950! border-gray-800! [&_.ant-card-body]:bg-gray-900! [&_.ant-card-body]:p-4 cursor-pointer hover:border-gray-700! transition-colors ${
        task.completed ? "opacity-60" : ""
      }`}
      onClick={() => onToggleComplete?.(task.id)}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-1">
          {task.completed ? (
            <AiOutlineCheckCircle className="h-6 w-6 text-teal-400" />
          ) : (
            <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-base font-medium mb-3 ${
              task.completed ? "text-gray-400 line-through" : "text-white"
            }`}
          >
            {task.description}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                task.category
              )}`}
            >
              {task.category}
            </span>
            {task.dueDate && (
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <AiOutlineCalendar className="h-4 w-4" />
                <span>{task.dueDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
