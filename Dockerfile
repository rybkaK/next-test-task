FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g json-server

CMD ["sh", "-c", "npm run build && npm start & json-server --watch ./data/db.json --port 4000"]
