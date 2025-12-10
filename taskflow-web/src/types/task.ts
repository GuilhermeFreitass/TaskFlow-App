export interface Task {
    id: number;
    title: string;
    description?: string | null;
    done: boolean;
    priority: "Alta" | "Media" | "Normal";
    dueDate?: string | null;
    isImportant: boolean;
    status: "Pendente" | "EmProgresso" | "Concluido" | "Cancelado";
    projectId?: number | null;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTaskDTO {
    title: string;
    description?: string;
    priority?: "Alta" | "Media" | "Normal";
    dueDate?: string;
    isImportant?: boolean;
    projectId?: number;
}

export interface UpdateTaskDTO {
    title?: string;
    description?: string;
    done?: boolean;
    priority?: "Alta" | "Media" | "Normal";
    dueDate?: string | null;
    isImportant?: boolean;
    projectId?: number | null;
    status?: "Pendente" | "EmProgresso" | "Concluido" | "Cancelado";
}

export interface Project {
    id: number;
    name: string;
    color: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateProjectDTO {
    name: string;
    color: string;
}

export interface UpdateProjectDTO {
    name?: string;
    color?: string;
}

export interface FilterTasksDTO {
    priority?: "Alta" | "Media" | "Normal";
    projectId?: number;
    isImportant?: boolean;
    status?: "Pendente" | "EmProgresso" | "Concluido" | "Cancelado";
    startDate?: string;
    endDate?: string;
    search?: string;
}