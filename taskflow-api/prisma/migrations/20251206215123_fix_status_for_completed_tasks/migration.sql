-- Fix status for existing completed tasks
UPDATE "task" SET "status" = 'Concluido' WHERE "done" = true AND "status" = 'Pendente';
