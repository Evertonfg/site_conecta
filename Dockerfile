FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

RUN echo "===== DIST ====="
RUN find dist -maxdepth 2 -type f

RUN echo "===== INDEX ====="
RUN cat dist/index.html

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/ /usr/share/nginx/html/

RUN echo "===== NGINX ====="
RUN ls -lah /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
