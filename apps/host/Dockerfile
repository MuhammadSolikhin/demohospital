# Stage 1: Build the Vite React app
FROM node:20 AS builder

WORKDIR /app

# Accept build-time argument
ARG VITE_REMOTE_DOMAIN
# Make it available to the build process (like Vite)
ENV VITE_REMOTE_DOMAIN=$VITE_REMOTE_DOMAIN

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

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
