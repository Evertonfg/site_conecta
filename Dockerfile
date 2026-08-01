# Etapa 1 — Build com Bun
FROM oven/bun:1 as builder

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

# Etapa 2 — Servir o build com uma imagem leve
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

