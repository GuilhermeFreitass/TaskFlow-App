FROM node:18-alpine

WORKDIR /app

# --- CORREÇÃO AQUI ---
# Instala o OpenSSL necessário para o Prisma rodar no Alpine
RUN apk add --no-cache openssl
# ---------------------

COPY package*.json ./

RUN npm install

COPY . .

# Gera o cliente do Prisma
RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]