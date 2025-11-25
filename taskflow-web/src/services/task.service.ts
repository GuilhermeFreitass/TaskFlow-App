import { Task, CreateTaskDTO, UpdateTaskDTO } from "@/types/task"

const BASE_URL = 'http://localhost:3333'

const fetchApi = async (endpoint: string, options?: RequestInit) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export const TaskService = {
    getAll: async (): Promise<Task[]> => {
        return fetchApi('/tasks')
    },

    create: async (data: CreateTaskDTO): Promise<Task> => {
        return fetchApi('/tasks', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    update: async (id: number, data: UpdateTaskDTO): Promise<Task> => {
        return fetchApi(`/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
    },

    delete: async (id: number): Promise<void> => {
        await fetchApi(`/tasks/${id}`, {
            method: 'DELETE',
        })
    }
}