export interface FilterTasksDTO {
    priority?: "Alta" | "Media" | "Normal";
    projectId?: number;
    isImportant?: boolean;
    status?: "Pendente" | "EmProgresso" | "Concluido" | "Cancelado";
    startDate?: string;
    endDate?: string;
    search?: string;
}


