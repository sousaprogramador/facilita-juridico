# Roteirizador;

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o Docker, Docker Compose e Postman instalados em seu sistema. Caso ainda não os tenha, siga as instruções abaixo para a instalação de cada um:

1. Postman: Baixe e instale o Postman ([aqui](https://www.postman.com/downloads/)).
2. Docker (Linux): Siga as instruções para instalação do Docker no Linux([aqui](https://docs.docker.com/desktop/install/linux-install/)).
3. Docker (Windows): Siga as instruções para instalação do Docker no Windows ([aqui](https://docs.docker.com/desktop/install/windows-install/)).

Após garantir que todos os pré-requisitos estão instalados, execute o seguinte comando para iniciar a aplicação:

```
docker-compose up -d
```

O backend estará rodando em http://0.0.0.0:9000.
O FrontEnd estará rodando em http://0.0.0.0:3000.

# 🚀 Configuração do Usuário

Para começar a usar o roteirizador, é necessário criar um usuário. Siga os passos abaixo utilizando o Postman:

1. Baixar a Coleção do Postman: ([aqui](https://drive.google.com/file/d/1rfXFWQaQb0jNzjnh5WW5XKkCqQBVv5FO/view?usp=sharing)).
2. Importar a Coleção no Postman: Abra o Postman e importe a coleção baixada.
3. Encontrar a Pasta "roteirizador": Na coleção importada, localize a pasta "roteirizador".
4. Acessar a Pasta "users": Dentro da pasta "roteirizador", abra a pasta "users".
5. Abrir o Arquivo "create": No interior da pasta "users", abra o arquivo com o nome "create".
6. Configurar a URL no Postman:
   Clique na {{URL}} indicada (provavelmente será {{URL}}/user).
   No campo "Valor", insira a URL do backend e salve as alterações.

Agora, você está pronto para criar um usuário. Execute a solicitação e, em seguida, faça login com o e-mail e senha do usuário recém-criado.
