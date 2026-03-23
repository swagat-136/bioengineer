# Use a modern, secure Node environment
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy root and backend dependency configurations
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install ALL dependencies for both the React frontend and the Express backend
RUN npm install
RUN npm install --prefix backend

# Copy everything else into the container
COPY . .

# Build the React frontend specifically for production
RUN npm run build

# Expose the port Render expects to route to internally
EXPOSE 3001

# Launch the unified server
CMD ["npm", "start"]
