# Use a imagem oficial do Jenkins
FROM jenkins/jenkins:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte do projeto para o diretório de trabalho
COPY . .

# Exemplo de comando para executar os testes Cypress
CMD ["npm", "run", "test"]
