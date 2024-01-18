
FROM node:18.18.2

WORKDIR /usr/src/api

COPY package*.json ./

RUN pip install pip==21.3.1

RUN npm install --quiet --no-optional --no-fund  --loglevel=error

RUN npm install sqlite3 --save

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]