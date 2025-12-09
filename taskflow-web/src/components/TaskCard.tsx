"use client";

import React from "react";
import { Card } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onToggleComplete?: (id: number) => void;
}

const getPriorityColor = (priority: string) => {
  if (priority === "Alta")
    return "bg-red-500/20 text-red-400 border-red-500/30";
  if (priority === "Media")
    return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  return "bg-green-500/20 text-green-400 border-green-500/30";
};

const getStatusColor = (status: string) => {
  if (status === "Concluido")
    return "bg-teal-500/20 text-teal-400 border-teal-500/30";
  if (status === "EmProgresso")
    return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  if (status === "Cancelado")
    return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
};

const formatDate = (dateString?: string | null) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

export const TaskCard = ({ task, onToggleComplete }: TaskCardProps) => {
  return (
    <Card
      className={`bg-gray-950! border-gray-800! [&_.ant-card-body]:bg-gray-900! [&_.ant-card-body]:p-4 cursor-pointer hover:border-gray-700! transition-colors ${
        task.done ? "opacity-60" : ""
      }`}
      onClick={() => onToggleComplete?.(task.id)}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-1">
          {task.done ? (
            <AiOutlineCheckCircle className="h-6 w-6 text-teal-400" />
          ) : (
            <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-3">
            <h3
              className={`text-base font-medium flex-1 ${
                task.done ? "text-gray-400 line-through" : "text-white"
              }`}
            >
              {task.title}
            </h3>
            {task.isImportant && (
              <AiOutlineStar className="h-5 w-5 text-yellow-400 shrink-0" />
            )}
          </div>
          {task.description && (
            <p className="text-sm text-gray-400 mb-3">{task.description}</p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                task.status
              )}`}
            >
              {task.status}
            </span>
            {task.dueDate && (
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <AiOutlineCalendar className="h-4 w-4" />
                <span>{formatDate(task.dueDate)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
