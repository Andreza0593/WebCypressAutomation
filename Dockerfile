# Use a imagem base do Ubuntu
FROM ubuntu:20.04

# Atualize os pacotes do sistema
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copie o script de inicialização do seu projeto para dentro do contêiner
COPY start.sh /usr/src/app/

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Especifique o comando de inicialização do contêiner
CMD ["bash", "start.sh"]
