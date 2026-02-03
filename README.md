# Brasil Fazendas Platform

Plataforma de apresentação da Fazenda Projeto Rio Formoso, desenvolvida com Next.js, Shadcn/UI e Tailwind CSS.

## Funcionalidades

- **Acesso Master**: Usuários `allancardozzo@gmail.com` e `kairolopes@gmail.com` (Senha: `123456`) têm acesso total.
- **Acesso de Corretores**: Acesso agendado (dia/hora) gerenciado pelos usuários Master.
- **Videoconferência**: Integração com Jitsi Meet para apresentações virtuais.
- **Portfólio Interativo**: Detalhes da fazenda, mapas e informações técnicas.

## 🚀 Como Executar

### Opção 1: Visualização Imediata (Sem Instalação)
Para testar o layout e funcionalidades básicas imediatamente neste computador:
1. Abra a pasta `preview_static`.
2. Clique duas vezes em `index.html`.
3. Navegue como se fosse o site real (Login, Dashboard, Admin, Videoconferência).

### Opção 2: Desenvolvimento (Requer Node.js)
Se você tiver o Node.js instalado:
1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3.  Acesse `http://localhost:3000`.

## Deploy no Render.com

Este projeto já está configurado para deploy no Render.

1.  Faça o push deste código para um repositório Git (GitHub/GitLab).
2.  No Render, crie um novo **Web Service**.
3.  Conecte seu repositório.
4.  O Render detectará automaticamente as configurações (Node.js).
5.  Comando de Build: `npm install && npm run build`
6.  Comando de Start: `npm start`

Ou utilize a opção **Blueprints** apontando para o arquivo `render.yaml`.
