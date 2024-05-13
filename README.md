### Projeto Medieval Store

Este projeto consiste na criação de uma API para uma loja de itens medievais, focando em produtos personalizados, como espadas sob encomenda. Desenvolvido utilizando Typescript e Sequelize, o projeto possui endpoints que suportam operações de criação, leitura e atualização de informações.

#### Funcionalidades

1. **Cadastro de Produtos**: Endpoint para cadastrar novos produtos, com testes para garantir seu funcionamento.

2. **Listagem de Produtos**: Endpoint para listar todos os produtos disponíveis, com testes para assegurar seu correto funcionamento.

3. **Listagem de Pedidos**: Endpoint para listar todos os pedidos e os IDs dos produtos associados a estes, com testes abrangendo essa funcionalidade.

4. **Login de Usuários**: Endpoint para autenticar usuários, gerando um token JWT que contém o ID e o nome de usuário. Testes foram desenvolvidos para garantir a correta autenticação.

5. **Validações de Produtos**: Implementação de validações para o cadastro de produtos, com testes para garantir a eficácia dessas validações.

#### Execução e Testes

Para executar a API, siga as instruções abaixo:

1. Clone o repositório para sua máquina local.
2. Instale as dependências utilizando o gerenciador de pacotes npm (`npm install`).
3. Configure as variáveis de ambiente, se necessário.
4. Execute o servidor utilizando o comando `npm start`.
5. Para executar os testes, utilize o comando `npm test`.
