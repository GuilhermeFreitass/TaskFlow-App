"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Calendar, Modal } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Task } from "@/types/task";
import { TaskService } from "@/services/task.service";
import { TaskCard } from "@/components/TaskCard";

dayjs.locale("pt-br");

export default function CalendarioPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await TaskService.getAll();
        setTasks(data);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };
    loadTasks();
  }, []);

  const getTasksByDate = useCallback(
    (date: Dayjs): Task[] => {
      return tasks.filter((task) => {
        if (!task.dueDate) return false;
        const taskDate = dayjs(task.dueDate);
        return taskDate.isSame(date, "day");
      });
    },
    [tasks]
  );

  const getTasksCountByDate = (date: Dayjs): number => {
    return getTasksByDate(date).length;
  };

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const selectedDateTasks = useMemo(() => {
    if (!selectedDate) return [];
    return getTasksByDate(selectedDate);
  }, [selectedDate, getTasksByDate]);

  const dateCellRender = (date: Dayjs) => {
    const count = getTasksCountByDate(date);
    if (count === 0) return null;

    const dayTasks = getTasksByDate(date);
    const hasHighPriority = dayTasks.some((t) => t.priority === "Alta");
    const hasImportant = dayTasks.some((t) => t.isImportant);

    return (
      <div className="flex flex-col gap-1 py-1">
        <div className="flex items-center justify-center gap-1">
          {hasImportant && (
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          )}
          {hasHighPriority && (
            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
          )}
        </div>
        <div className="text-xs text-gray-400 text-center">{count}</div>
      </div>
    );
  };

  return (
    <div className="px-16 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Calendário</h1>
        <p className="text-base text-gray-400 mt-2">
          Visualize suas tarefas por data de vencimento
        </p>
      </header>

      <div className="bg-gray-950 rounded-lg p-6 border border-gray-800">
        <Calendar
          dateCellRender={dateCellRender}
          onSelect={handleDateSelect}
          className="[&_.ant-picker-calendar]:bg-gray-950 [&_.ant-picker-calendar-header]:bg-gray-950 [&_.ant-picker-calendar-header]:border-gray-800 [&_.ant-picker-calendar-header]:text-white [&_.ant-picker-calendar-month-select]:text-white [&_.ant-picker-calendar-year-select]:text-white [&_.ant-picker-calendar-month-select]:hover:text-teal-400 [&_.ant-picker-calendar-year-select]:hover:text-teal-400 [&_.ant-picker-calendar-prev-month-btn]:text-gray-400 [&_.ant-picker-calendar-prev-month-btn]:hover:text-teal-400 [&_.ant-picker-calendar-next-month-btn]:text-gray-400 [&_.ant-picker-calendar-next-month-btn]:hover:text-teal-400 [&_.ant-picker-calendar-date]:min-h-[80px] [&_.ant-picker-calendar-date]:bg-gray-900 [&_.ant-picker-calendar-date]:border-gray-800 [&_.ant-picker-calendar-date]:text-white [&_.ant-picker-calendar-date]:hover:border-gray-700 [&_.ant-picker-calendar-date-content]:min-h-[60px] [&_.ant-picker-calendar-date-content]:text-gray-300 [&_.ant-picker-calendar-date-today]:bg-teal-500/10 [&_.ant-picker-calendar-date-today]:border-teal-500 [&_.ant-picker-calendar-date-selected]:bg-teal-500/20 [&_.ant-picker-calendar-date-selected]:border-teal-500 [&_.ant-picker-calendar-date-selected]:hover:border-teal-400 [&_.ant-picker-calendar-date-panel]:bg-gray-950 [&_.ant-picker-calendar-week-list]:text-gray-400 [&_.ant-picker-calendar-week-list]:border-gray-800"
        />
      </div>

      <Modal
        title={
          <div className="text-white">
            <h2 className="text-xl font-bold">
              Tarefas de {selectedDate?.format("DD [de] MMMM [de] YYYY")}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {selectedDateTasks.length} tarefa
              {selectedDateTasks.length !== 1 ? "s" : ""}
            </p>
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
        className="[&_.ant-modal-content]:bg-gray-950 [&_.ant-modal-content]:border-gray-800 [&_.ant-modal-header]:bg-gray-950 [&_.ant-modal-header]:border-gray-800 [&_.ant-modal-title]:text-white [&_.ant-modal-close]:text-gray-400 [&_.ant-modal-close]:hover:text-teal-400 [&_.ant-modal-body]:bg-gray-950"
      >
        <div className="space-y-4 mt-4">
          {selectedDateTasks.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              Nenhuma tarefa para esta data
            </div>
          ) : (
            selectedDateTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          )}
        </div>
      </Modal>
    </div>
  );
}
