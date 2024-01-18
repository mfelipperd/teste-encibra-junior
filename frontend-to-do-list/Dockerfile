# Use uma imagem de node.js com uma versão mais recente (v18.17.0 ou superior)
FROM node:18.17.0

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o diretório de trabalho
COPY . /app

# Instale as dependências usando o npm
RUN npm install

# Gere o diretório .next
RUN npm run build

# Exponha a porta que a aplicação Next.js vai usar
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]

