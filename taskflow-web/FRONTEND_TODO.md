# Lista de Implementações Pendentes no Frontend

## 📋 1. Tipos e Interfaces

### 1.1. Unificar tipos de Task
- [ ] Resolver incompatibilidade entre `Task` em `TaskCard.tsx` (id: string) e `Task` em `types/task.ts` (id: number)
- [ ] Criar tipo único e consistente para Task em todo o projeto
- [ ] Atualizar todos os componentes que usam Task para usar o tipo unificado

### 1.2. Atualizar tipos conforme backend
- [ ] Adicionar campos `priority` ("Alta" | "Média" | "Normal") ao tipo Task
- [ ] Adicionar campo `dueDate` (DateTime/string) ao tipo Task
- [ ] Adicionar campo `isImportant` (boolean) ao tipo Task
- [ ] Adicionar campo `projectId` (number | null) ao tipo Task
- [ ] Adicionar campo `status` ("Pendente" | "Em Progresso" | "Concluído" | "Cancelado") ao tipo Task
- [ ] Criar interface `Project` com campos: id, name, color, createdAt, updatedAt
- [ ] Criar interface `CreateProjectDTO` e `UpdateProjectDTO`
- [ ] Criar interface `FilterTasksDTO` para filtros de busca

### 1.3. Atualizar DTOs
- [ ] Atualizar `CreateTaskDTO` para incluir: priority, dueDate, isImportant, projectId
- [ ] Atualizar `UpdateTaskDTO` para incluir: priority, dueDate, isImportant, projectId, status

---

## 🔧 2. Server Actions (Seguindo Padrão do Projeto)

### 2.1. Criar Server Actions para Tasks
- [ ] Criar `actions/task/create-task.ts` com schema Zod e actionClient
- [ ] Criar `actions/task/update-task.ts` com schema Zod e actionClient
- [ ] Criar `actions/task/delete-task.ts` com schema Zod e actionClient
- [ ] Criar `actions/task/toggle-task.ts` com schema Zod e actionClient
- [ ] Criar `actions/task/get-tasks.ts` para buscar tarefas
- [ ] Criar `actions/task/get-task-by-id.ts` para buscar tarefa específica
- [ ] Criar `actions/task/filter-tasks.ts` para filtros avançados
- [ ] Criar `actions/task/search-tasks.ts` para busca textual
- [ ] Criar `actions/task/get-tasks-today.ts` para tarefas de hoje
- [ ] Criar `actions/task/get-tasks-important.ts` para tarefas importantes
- [ ] Criar `actions/task/get-tasks-by-project.ts` para tarefas por projeto
- [ ] Criar `actions/task/get-tasks-by-priority.ts` para tarefas por prioridade

### 2.2. Criar Server Actions para Projects
- [ ] Criar `actions/project/create-project.ts` com schema Zod e actionClient
- [ ] Criar `actions/project/update-project.ts` com schema Zod e actionClient
- [ ] Criar `actions/project/delete-project.ts` com schema Zod e actionClient
- [ ] Criar `actions/project/get-projects.ts` para listar projetos
- [ ] Criar `actions/project/get-project-by-id.ts` para buscar projeto específico

### 2.3. Criar Server Actions para Estatísticas
- [ ] Criar `actions/statistics/get-statistics.ts` para todas as estatísticas
- [ ] Criar `actions/statistics/get-totals.ts` para totais
- [ ] Criar `actions/statistics/get-pending.ts` para pendentes
- [ ] Criar `actions/statistics/get-high-priority.ts` para alta prioridade

---

## 🎨 3. Componentes de UI

### 3.1. Formulários
- [ ] Criar componente `CreateTaskForm` usando `useSafeActionForm`
- [ ] Criar componente `EditTaskForm` usando `useSafeActionForm`
- [ ] Criar componente `CreateProjectForm` usando `useSafeActionForm`
- [ ] Criar componente `EditProjectForm` usando `useSafeActionForm`
- [ ] Adicionar campos de formulário: priority, dueDate, isImportant, projectId
- [ ] Implementar validação com Zod nos formulários
- [ ] Adicionar mensagens padronizadas "Olá, eu sou a Fê 👩🏾" nos formulários

### 3.2. Modais e Dialogs
- [ ] Criar modal para criar nova tarefa (abrir ao clicar em "Nova Tarefa")
- [ ] Criar modal para editar tarefa existente
- [ ] Criar modal para confirmar exclusão de tarefa
- [ ] Criar modal para criar novo projeto
- [ ] Criar modal para editar projeto
- [ ] Criar modal para confirmar exclusão de projeto

### 3.3. Componentes de Filtro e Busca
- [ ] Criar componente `TaskFilters` para filtros (prioridade, projeto, data, importante)
- [ ] Criar componente `TaskSearch` para busca textual
- [ ] Criar componente `TaskSort` para ordenação (data, prioridade, nome)
- [ ] Integrar filtros na página de tarefas

### 3.4. Componentes de Lista
- [ ] Atualizar `TaskList` para usar dados reais da API (remover mockTasks)
- [ ] Atualizar `TaskCard` para usar tipo unificado de Task
- [ ] Adicionar ações de editar e deletar em `TaskCard`
- [ ] Adicionar indicador visual para tarefas importantes
- [ ] Adicionar indicador visual para tarefas vencidas
- [ ] Criar componente `ProjectList` para listar projetos
- [ ] Criar componente `ProjectCard` para exibir projeto

### 3.5. Componentes de Estatísticas
- [ ] Atualizar `StatCard` para receber dados reais
- [ ] Criar hook ou server action para buscar estatísticas
- [ ] Conectar estatísticas do Dashboard com dados reais da API
- [ ] Adicionar loading state nos StatCards

---

## 📄 4. Páginas

### 4.1. Dashboard (/)
- [ ] Conectar estatísticas com dados reais (remover valores hardcoded "0")
- [ ] Conectar lista de tarefas com dados reais (remover array vazio)
- [ ] Adicionar funcionalidade ao botão "Nova Tarefa" (abrir modal)
- [ ] Adicionar loading states
- [ ] Adicionar tratamento de erros

### 4.2. Página de Tarefas (/tarefas)
- [ ] Remover dados mockados (mockTasks)
- [ ] Integrar com server actions para buscar tarefas
- [ ] Adicionar filtros funcionais
- [ ] Adicionar busca textual funcional
- [ ] Adicionar ordenação funcional
- [ ] Adicionar paginação (se necessário)
- [ ] Conectar toggle de completar tarefa com server action
- [ ] Adicionar ações de editar e deletar tarefas
- [ ] Adicionar loading states
- [ ] Adicionar tratamento de erros
- [ ] Adicionar estado vazio quando não houver tarefas

### 4.3. Página de Calendário (/calendario)
- [ ] Criar página de calendário
- [ ] Implementar visualização de calendário mensal
- [ ] Exibir tarefas com dueDate no calendário
- [ ] Permitir clicar em data para ver tarefas do dia
- [ ] Adicionar navegação entre meses
- [ ] Integrar com server actions para buscar tarefas por data

### 4.4. Página de Configurações (/configuracoes)
- [ ] Criar página de configurações
- [ ] Adicionar seção de gerenciamento de projetos
- [ ] Adicionar formulário para criar/editar/deletar projetos
- [ ] Adicionar preferências de usuário (se necessário)
- [ ] Adicionar tema (se necessário)

### 4.5. Página de Projetos (opcional: /projetos)
- [ ] Criar página dedicada para projetos
- [ ] Listar todos os projetos
- [ ] Permitir criar, editar e deletar projetos
- [ ] Exibir tarefas de cada projeto
- [ ] Adicionar filtro por projeto na página de tarefas

---

## 🔌 5. Services e Integração com API

### 5.1. Atualizar TaskService
- [ ] Adicionar método `getTasksToday()` - Buscar tarefas de hoje
- [ ] Adicionar método `getTasksPlanned()` - Buscar tarefas planejadas
- [ ] Adicionar método `getTasksImportant()` - Buscar tarefas importantes
- [ ] Adicionar método `getTasksByProject(projectId: number)` - Buscar por projeto
- [ ] Adicionar método `getTasksByPriority(priority: string)` - Buscar por prioridade
- [ ] Adicionar método `searchTasks(query: string)` - Busca textual
- [ ] Adicionar método `filterTasks(filters: FilterTasksDTO)` - Filtros combinados
- [ ] Atualizar método `create()` para incluir novos campos
- [ ] Atualizar método `update()` para incluir novos campos

### 5.2. Criar ProjectService
- [ ] Criar `services/project.service.ts`
- [ ] Implementar método `getAll()` - Listar projetos
- [ ] Implementar método `getById(id: number)` - Buscar por ID
- [ ] Implementar método `create(data: CreateProjectDTO)` - Criar projeto
- [ ] Implementar método `update(id: number, data: UpdateProjectDTO)` - Atualizar projeto
- [ ] Implementar método `delete(id: number)` - Deletar projeto

### 5.3. Criar StatisticsService
- [ ] Criar `services/statistics.service.ts`
- [ ] Implementar método `getTotalTasks()` - Total de tarefas
- [ ] Implementar método `getPendingTasks()` - Tarefas pendentes
- [ ] Implementar método `getCompletedTasks()` - Tarefas concluídas
- [ ] Implementar método `getHighPriorityTasks()` - Tarefas de alta prioridade
- [ ] Implementar método `getAllStatistics()` - Todas as estatísticas

---

## 🎣 6. Hooks Customizados

### 6.1. Hooks de Tarefas
- [ ] Atualizar `useTaskController` para usar server actions em vez de services diretos
- [ ] Criar hook `useTaskFilters` para gerenciar filtros
- [ ] Criar hook `useTaskSearch` para gerenciar busca
- [ ] Criar hook `useTaskSort` para gerenciar ordenação
- [ ] Adicionar invalidação de cache com queryKey após mutações

### 6.2. Hooks de Projetos
- [ ] Criar hook `useProjectController` para gerenciar projetos
- [ ] Integrar com server actions
- [ ] Adicionar invalidação de cache

### 6.3. Hooks de Estatísticas
- [ ] Criar hook `useStatistics` para buscar estatísticas
- [ ] Adicionar invalidação automática quando tarefas mudam

---

## 🎯 7. Funcionalidades Especiais

### 7.1. Busca e Filtros
- [ ] Implementar busca textual em tempo real (debounce)
- [ ] Implementar filtros combinados (prioridade + projeto + data + importante)
- [ ] Implementar ordenação (por data, prioridade, nome)
- [ ] Salvar preferências de filtro no localStorage (opcional)
- [ ] Adicionar filtros rápidos (Hoje, Importante, Planejadas)

### 7.2. Estatísticas e Métricas
- [ ] Exibir estatísticas reais no Dashboard
- [ ] Adicionar gráficos de produtividade (opcional)
- [ ] Calcular taxa de conclusão de tarefas
- [ ] Exibir tarefas por categoria (opcional)

### 7.3. Notificações e Feedback
- [ ] Substituir `alert()` por sistema de notificações (usar padrão do projeto)
- [ ] Adicionar mensagens de sucesso/erro padronizadas
- [ ] Adicionar loading states em todas as operações
- [ ] Adicionar estados de erro em todas as páginas

---

## 🐛 8. Correções Necessárias

### 8.1. Inconsistências de Tipos
- [ ] Unificar tipo Task (resolver id: string vs id: number)
- [ ] Atualizar TaskCard para usar tipo correto
- [ ] Atualizar TaskList para usar tipo correto
- [ ] Atualizar todas as páginas que usam Task

### 8.2. Integração com API
- [ ] Remover todos os dados mockados
- [ ] Conectar todas as páginas com dados reais
- [ ] Adicionar tratamento de erros em todas as chamadas de API
- [ ] Adicionar loading states em todas as operações assíncronas

### 8.3. Padrão Arquitetural
- [ ] Migrar de services diretos para server actions (seguir padrão do projeto)
- [ ] Usar `useSafeActionForm` em todos os formulários
- [ ] Usar `useSafeActionHandler` para ações simples
- [ ] Implementar mensagens padronizadas "Olá, eu sou a Fê 👩🏾"
- [ ] Implementar queryKey para invalidação de cache

---

## 🎨 9. Melhorias de UI/UX

### 9.1. Responsividade
- [ ] Garantir que Sidebar seja responsiva (mobile)
- [ ] Garantir que formulários sejam responsivos
- [ ] Garantir que listas sejam responsivas
- [ ] Adicionar menu hambúrguer para mobile (se necessário)

### 9.2. Acessibilidade
- [ ] Adicionar labels adequados em formulários
- [ ] Adicionar aria-labels em botões e ações
- [ ] Garantir navegação por teclado
- [ ] Adicionar foco visual adequado

### 9.3. Performance
- [ ] Implementar paginação ou virtualização para listas grandes
- [ ] Adicionar debounce em busca
- [ ] Otimizar re-renders desnecessários
- [ ] Adicionar memoização onde necessário

---

## 📝 10. Documentação

### 10.1. Documentação de Componentes
- [ ] Documentar props de componentes principais
- [ ] Adicionar exemplos de uso
- [ ] Documentar hooks customizados

### 10.2. Documentação de Padrões
- [ ] Documentar padrão de server actions
- [ ] Documentar padrão de formulários
- [ ] Documentar padrão de mensagens

---

## 🎯 Prioridades Sugeridas

### Alta Prioridade:
1. Unificar tipos de Task e resolver incompatibilidades
2. Remover dados mockados e conectar com API real
3. Criar formulário de criar tarefa com server action
4. Implementar toggle de completar tarefa com server action
5. Conectar estatísticas do Dashboard com dados reais
6. Criar página de Calendário básica

### Média Prioridade:
7. Implementar filtros e busca de tarefas
8. Criar CRUD completo de projetos
9. Adicionar edição e exclusão de tarefas
10. Implementar página de Configurações
11. Adicionar tratamento de erros e loading states

### Baixa Prioridade:
12. Melhorias de UI/UX e responsividade
13. Otimizações de performance
14. Documentação completa
15. Funcionalidades avançadas (gráficos, métricas)

