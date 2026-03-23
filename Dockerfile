FROM node:20-alpine

WORKDIR /app

# Copy dependency config and install
COPY package*.json ./
RUN npm install

# Copy everything and build frontend
COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
