export interface updateTaskDTO {
    id: number;
    title?: string;
    description?: string;
    done?: boolean;
    priority?: "Alta" | "Media" | "Normal";
    dueDate?: string | null;
    isImportant?: boolean;
    projectId?: number | null;
    status?: "Pendente" | "EmProgresso" | "Concluido" | "Cancelado";
}