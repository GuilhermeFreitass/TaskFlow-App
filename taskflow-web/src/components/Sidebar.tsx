"use client";

import {
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineCheckSquare,
  AiOutlineSetting,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: AiOutlineAppstore,
  },
  {
    id: "tasks",
    label: "Tarefas",
    href: "/tarefas",
    icon: AiOutlineCheckSquare,
  },
  {
    id: "calendar",
    label: "Calendário",
    href: "/calendario",
    icon: AiOutlineCalendar,
  },
  {
    id: "settings",
    label: "Configurações",
    href: "/configuracoes",
    icon: AiOutlineSetting,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-gray-800">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500">
          <AiOutlineThunderbolt className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">Taskflow</span>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-teal-500/20 text-teal-400 shadow-sm"
                      : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isActive ? "text-teal-400" : "text-gray-400"
                    }`}
                  />
                  <span className="text-base font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
