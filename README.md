# Lume — Salão & Beleza

## Como executar

1. Instale o Node.js (versão 20 ou superior).
2. Abra o terminal dentro desta pasta.
3. Execute `npm install`.
4. Para usar os cadastros administrativos, copie `.env.example` para `.env` e configure `MONGODB_URI` com a string de conexão do seu MongoDB Atlas.
5. Execute `npm start`.
6. Acesse `http://localhost:3000/site` para o site do salão.
7. Acesse `http://localhost:3000/` para a área administrativa.

## Páginas do site

- `/site` — Início
- `/site/servicos` — Serviços
- `/site/profissionais` — Profissionais
- `/site/pacotes` — Pacotes
- `/site/agendar` — Formulário de agendamento
- `/site/confirmacao` — Confirmação e resumo dos dados enviados

## Banco de dados

O site público e a navegação funcionam sem configurar o banco. As funções administrativas de cadastrar, listar, editar e excluir clientes/profissionais precisam de uma conexão válida do MongoDB Atlas no arquivo `.env`.

O formulário de agendamento apresenta os dados na tela de confirmação, mas ainda não grava agendamentos no banco de dados.
