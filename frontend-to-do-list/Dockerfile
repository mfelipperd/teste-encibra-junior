
FROM node:18.17.0
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /src/app
WORKDIR /src/app
RUN npm install
RUN npm run build
WORKDIR /src/app
EXPOSE 3000
CMD ["npm", "start"]
