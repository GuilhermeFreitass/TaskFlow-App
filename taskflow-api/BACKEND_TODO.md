# Lista de Implementações Pendentes no Backend

## 📋 1. Modelos e Schema (Prisma)

### 1.1. Adicionar campos ao modelo `Task`
- [ ] `priority` (enum: "Alta" | "Média" | "Normal") - Prioridade da tarefa
- [ ] `dueDate` (DateTime?) - Data de vencimento/planejamento
- [ ] `isImportant` (Boolean @default(false)) - Marca tarefa como importante
- [ ] `projectId` (Int?) - Relacionamento com Project (opcional)
- [ ] `status` (enum: "Pendente" | "Em Progresso" | "Concluído" | "Cancelado") - Status detalhado além de `done`

### 1.2. Criar modelo `Project`
- [ ] Modelo `Project` com campos:
  - `id` (Int @id)
  - `name` (String)
  - `color` (String) - Cor do projeto (hex)
  - `createdAt` (DateTime)
  - `updatedAt` (DateTime)
  - `tasks` (Task[]) - Relacionamento com tarefas

### 1.3. Migrations
- [ ] Criar migration para adicionar novos campos em `Task`
- [ ] Criar migration para criar tabela `Project`
- [ ] Executar migrations no banco

---

## 🔧 2. DTOs (Data Transfer Objects)

### 2.1. Atualizar `CreateTaskDTO`
- [ ] Adicionar `priority?: "Alta" | "Média" | "Normal"`
- [ ] Adicionar `dueDate?: string`
- [ ] Adicionar `isImportant?: boolean`
- [ ] Adicionar `projectId?: number`

### 2.2. Atualizar `UpdateTaskDTO`
- [ ] Adicionar `priority?: "Alta" | "Média" | "Normal"`
- [ ] Adicionar `dueDate?: string | null`
- [ ] Adicionar `isImportant?: boolean`
- [ ] Adicionar `projectId?: number | null`
- [ ] Adicionar `status?: "Pendente" | "Em Progresso" | "Concluído" | "Cancelado"`

### 2.3. Criar novos DTOs
- [ ] `CreateProjectDTO` (name: string, color: string)
- [ ] `UpdateProjectDTO` (name?: string, color?: string)
- [ ] `FilterTasksDTO` (query params para filtros)

---

## 🗄️ 3. Repositories

### 3.1. Atualizar `TaskRepository`
- [ ] Atualizar método `create()` para incluir novos campos
- [ ] Atualizar método `update()` para incluir novos campos
- [ ] Criar método `findByProject(projectId: number)` - Buscar tarefas por projeto
- [ ] Criar método `findByPriority(priority: string)` - Buscar por prioridade
- [ ] Criar método `findByDateRange(startDate: Date, endDate: Date)` - Buscar por intervalo de datas
- [ ] Criar método `findToday()` - Buscar tarefas de hoje (dueDate = hoje)
- [ ] Criar método `findImportant()` - Buscar tarefas importantes
- [ ] Criar método `search(query: string)` - Busca textual (title, description)
- [ ] Criar método `findWithFilters(filters: FilterTasksDTO)` - Busca com múltiplos filtros

### 3.2. Criar `ProjectRepository`
- [ ] Método `create(data: CreateProjectDTO)`
- [ ] Método `findAll()`
- [ ] Método `findById(id: number)`
- [ ] Método `update(data: UpdateProjectDTO)`
- [ ] Método `delete(id: number)`

---

## 🎯 4. Services

### 4.1. Atualizar `TaskService`
- [ ] Atualizar `createTask()` para validar e processar novos campos
- [ ] Atualizar `updateTask()` para validar e processar novos campos
- [ ] Criar método `getTasksByProject(projectId: number)`
- [ ] Criar método `getTasksByPriority(priority: string)`
- [ ] Criar método `getTasksToday()`
- [ ] Criar método `getTasksPlanned()` - Tarefas com dueDate futura
- [ ] Criar método `getTasksImportant()`
- [ ] Criar método `searchTasks(query: string)`
- [ ] Criar método `getTasksWithFilters(filters: FilterTasksDTO)`

### 4.2. Criar `ProjectService`
- [ ] Método `createProject(data: CreateProjectDTO)`
- [ ] Método `getProjects()`
- [ ] Método `getProjectById(id: number)`
- [ ] Método `updateProject(data: UpdateProjectDTO)`
- [ ] Método `deleteProject(id: number)`
- [ ] Validações (nome único, cor válida, etc.)

### 4.3. Criar `StatisticsService` (opcional)
- [ ] Método `getTotalTasks()`
- [ ] Método `getPendingTasks()`
- [ ] Método `getHighPriorityTasks()`
- [ ] Método `getProductivityMetrics()` - Cálculo de produtividade

---

## 🎮 5. Controllers

### 5.1. Atualizar `TaskController`
- [ ] Atualizar `createTask()` para receber novos campos
- [ ] Atualizar `updateTask()` para receber novos campos
- [ ] Criar endpoint `GET /tasks/project/:projectId` - Buscar por projeto
- [ ] Criar endpoint `GET /tasks/priority/:priority` - Buscar por prioridade
- [ ] Criar endpoint `GET /tasks/today` - Buscar tarefas de hoje
- [ ] Criar endpoint `GET /tasks/planned` - Buscar tarefas planejadas
- [ ] Criar endpoint `GET /tasks/important` - Buscar tarefas importantes
- [ ] Criar endpoint `GET /tasks/search?q=:query` - Busca textual
- [ ] Criar endpoint `GET /tasks/filter` - Busca com múltiplos filtros (query params)

### 5.2. Criar `ProjectController`
- [ ] Endpoint `POST /projects` - Criar projeto
- [ ] Endpoint `GET /projects` - Listar projetos
- [ ] Endpoint `GET /projects/:id` - Buscar projeto por ID
- [ ] Endpoint `PATCH /projects/:id` - Atualizar projeto
- [ ] Endpoint `DELETE /projects/:id` - Deletar projeto

### 5.3. Criar `StatisticsController` (opcional)
- [ ] Endpoint `GET /statistics` - Retornar todas as estatísticas
- [ ] Endpoint `GET /statistics/totals` - Total de tarefas
- [ ] Endpoint `GET /statistics/pending` - Tarefas pendentes
- [ ] Endpoint `GET /statistics/high-priority` - Tarefas de prioridade alta

---

## 🛣️ 6. Routes

### 6.1. Atualizar `task.routes.ts`
- [ ] Adicionar rota `GET /tasks/today`
- [ ] Adicionar rota `GET /tasks/planned`
- [ ] Adicionar rota `GET /tasks/important`
- [ ] Adicionar rota `GET /tasks/project/:projectId`
- [ ] Adicionar rota `GET /tasks/priority/:priority`
- [ ] Adicionar rota `GET /tasks/search`
- [ ] Adicionar rota `GET /tasks/filter`

### 6.2. Criar `project.routes.ts`
- [ ] Definir todas as rotas de projetos
- [ ] Registrar rotas no `app.ts`

### 6.3. Criar `statistics.routes.ts` (opcional)
- [ ] Definir rotas de estatísticas
- [ ] Registrar rotas no `app.ts`

---

## ✅ 7. Validações

### 7.1. Validações de Task
- [ ] Validar `priority` (deve ser um dos valores permitidos)
- [ ] Validar `dueDate` (deve ser uma data válida, não pode ser no passado se necessário)
- [ ] Validar `projectId` (deve existir no banco se fornecido)
- [ ] Validar `status` (deve ser um dos valores permitidos)

### 7.2. Validações de Project
- [ ] Validar `name` (obrigatório, mínimo de caracteres)
- [ ] Validar `color` (formato hex válido)
- [ ] Validar nome único (não pode ter dois projetos com mesmo nome)

---

## 🔍 8. Funcionalidades Especiais

### 8.1. Busca e Filtros
- [ ] Implementar busca textual (title, description)
- [ ] Implementar filtro combinado (prioridade + projeto + data + importante)
- [ ] Implementar ordenação (por data, prioridade, nome)
- [ ] Implementar paginação (se necessário)

### 8.2. Estatísticas
- [ ] Calcular total de tarefas
- [ ] Calcular tarefas pendentes
- [ ] Calcular tarefas de prioridade alta
- [ ] Calcular métricas de produtividade (taxa de conclusão, etc.)

---

## 🐛 9. Correções Necessárias

### 9.1. Inconsistências de Rotas
- [x] Corrigir rota de update no frontend: `/task/:id` vs `/tasks/:id` (verificar qual está correto)
- [x] Padronizar todas as rotas (usar `/tasks` ou `/task` consistentemente)

---

## 📝 10. Documentação

### 10.1. Documentação da API
- [ ] Documentar novos endpoints
- [ ] Documentar novos campos nos DTOs
- [ ] Atualizar exemplos de requisições/respostas

---

## 🎯 Prioridades Sugeridas

### Alta Prioridade:
1. Adicionar campos `priority`, `dueDate`, `isImportant` ao modelo Task
2. Criar modelo Project e relacionamento
3. Implementar filtros básicos (hoje, importante, planejado)
4. Implementar busca textual

### Média Prioridade:
5. Criar CRUD completo de Projects
6. Implementar filtros avançados (combinados)
7. Implementar estatísticas

### Baixa Prioridade:
8. Melhorias de performance (índices, paginação)
9. Documentação completa da API

