# Stage 1: Build the portal frontend
FROM node:20-alpine AS builder
WORKDIR /app
COPY portal/package*.json ./portal/
RUN cd portal && npm ci --legacy-peer-deps
COPY portal/ ./portal/
RUN cd portal && npm run build

# Stage 2: Serve the application
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps
COPY --from=builder /app/portal/dist ./portal/dist
COPY . .
# Remove portal source files to keep image small and secure
RUN rm -rf portal/src portal/public portal/vite.config.js portal/package*.json

EXPOSE 8000
ENV NODE_ENV=production
# Run DB migrations then start the server
CMD ["sh", "-c", "node migrate.cjs && node server.cjs"]
