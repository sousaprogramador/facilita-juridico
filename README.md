# Roterizando;

## 📋 Pré-requisitos

Para você rodar o projeto em sua maquina local você necessita ter essas tecnologias já instaladas ou você pode instalar:

- Postman ou Insomnia: Você pode escolher qualquer um desses aplicativos para criar o usuário.

- Banco de dados Mysql: Você precisa instalar o MySQL em sua máquina. Você pode seguir este ([guia](https://www.lifewire.com/how-to-install-mysql-on-macos-4586389)).

- NodeJS (versão LTS 18.17.1): É recomendável usar o NVM (Node Version Manager) para gerenciar as versões do NodeJS. Você pode instalar o NVM seguindo ([este guia](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm)).

- Yarn: você pode instalar o yarn ([clicando aqui](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)).

## Configurando o Ambiente

Siga estas etapas para configurar o ambiente de desenvolvimento:

# 1. Instalar versão 18.17.1 do NodeJS

Execute o seguinte comando para instalar a versão LTS do NodeJS:

```
nvm install 18.17.1
```

# 2. Use a versão 18.17.1 do NodeJS

Ative a versão 18.17.1 do NodeJS com o seguinte comando:

```
nvm use 18.17.1
```

# 3. Executando o Docker

Na raiz do projeto suba o docker

```
docker compose up -d
```

# 4. Executando o front-end

Na raiz do projeto front, crie um arquivo chamado .env e adicione o conteúdo do arquivo .env.sample.

```
cd front-end && mv .env.sample .env && yarn install && yarn dev
```

# 5. Executando o Back-end

No diretório raiz dos projetos, execute o seguinte comando para instalar as dependências necessárias:

```
cd back-end && yarn install && yarn dev
```

# 6. Acessando o sistema

Agora você pode abri o navegador na url http://localhost:3000

```
email: sousa.programador@gmail.com
senha: 123
```
