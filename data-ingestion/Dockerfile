# 1. Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# 2. Final image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
ENV MONGO_URI=
ENV ALPHA_VANTAGE_API_KEY=
ENV PORT=
CMD ["node", "src/index.js"]
