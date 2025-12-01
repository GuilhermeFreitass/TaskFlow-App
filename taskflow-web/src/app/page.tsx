"use client";

import { AiOutlinePlus } from "react-icons/ai";
import {
  AiOutlineFileText,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineRise,
} from "react-icons/ai";
import { TealButton } from "@/components/TealButton";
import StatCard from "@/components/StatCard";

export default function Home() {
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
      <div className="grid grid-cols-4 gap-6 px-16">
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
    </>
  );
}
