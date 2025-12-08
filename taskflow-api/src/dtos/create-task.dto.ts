export interface CreateTaskDTO {
    title: string;
    description?: string;
    priority?: "Alta" | "Media" | "Normal";
    dueDate?: string;
    isImportant?: boolean;
    projectId?: number;
}