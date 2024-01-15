# Use uma imagem Node.js como base
FROM node:14

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta em que o servidor está ouvindo
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
