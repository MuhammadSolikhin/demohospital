# Stage 1: Build the Vite React app
FROM node:20 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .
# Accept build arguments
ARG VITE_APP_PRODUCTION
ARG VITE_HOST

ENV VITE_APP_PRODUCTION=$VITE_APP_PRODUCTION
ENV VITE_HOST=$VITE_HOST

# Build the app
RUN npm run build

# Stage 2: Serve using nginx
FROM nginx:alpine

# Clean default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
