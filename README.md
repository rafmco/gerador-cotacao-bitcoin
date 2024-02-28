<a name="readme-top"></a>
  <h1 align="center">Gerador de Cotações de Bitcoin</h1>
<p align="center">
</p>


## 💡Sobre o projeto

App gerador de cotações de bitcoin através da API Coingecko (https://www.coingecko.com/pt).
Possui 3 módulos:
- Gerador - Utiliza Node.js, TypeScript, Axios e um Docker RabbitMQ, realizando a consulta na API de preços e enviando para a fila;
- API - Utiliza Node.js, TypeScript, Socket.io e um Docker MongoDB, para consumir as cotações da fila no RabbitMQ, salvá-las no MongoDB e emitir via Web Socket para o Frontend cada nova cotação;
- APP - O frontend utiliza Vue 3 com Class Components, Vuex, Socket.io-Client e ApexCharts para receber as novas cotações do Web Socket e exibir em um gráfico de "CandleStick";


## 🛠️ Construído com:
Gerador
- [![Node][Node.js]][Node-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Yarn][Yarn]][Yarn-url]
- amqplib
- [![Docker][Docker]][Docker-url]
- [![RabbitMQ][RabbitMQ]][RabbitMQ-url]

API
- [![Node][Node.js]][Node-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Yarn][Yarn]][Yarn-url]
- [![Express][Express]][Express-url]
 - amqplib
- [![Docker][Docker]][Docker-url]
- [![Socket.io][Socket.io]][Socket.io-url]
- [![MongoDB][MongoDB]][MongoDB-url]

 APP 
- [![Vue][Vue.js]][Vue-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Yarn][Yarn]][Yarn-url]
- Vue-CLI
- Vue 3 + Class Components
- Vuex 4


## 🚀 Instalação

1. Baixe o repositório (`git clone git@github.com:Rafmco/gerador-cotacao-bitcoin.git`)
2. Navegue até a pasta do módulo Gerador (`cd bitcoin-candle-generator`)
3. Instalar dependências
4. Criar docker RabbitMQ
5. Copie e altere os arquivos de configurações conforme desejado
6. `yarn start`
7. Navegue até a pasta do módulo API (`cd bitcoin-candle-api`)
8. Instalar dependências
9. Criar docker MongoDB
10. Copie e altere os arquivos de configurações conforme desejado
11. `yarn start`
12. Navegue até a pasta do módulo APP (`cd bitcoin-candle-app`)
13. Instalar dependências
14. Copie e altere os arquivos de configurações conforme desejado
15. `yarn serve`


## 🔀 Roadmap

- [X] Criar o módulo Gerador de Cotações
- [X] Criar o módulo API
- [X] Criar o Front-End


## © Licença
Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.

<p align="right">(<a href="#readme-top">Voltar ao inicio</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/freitas-miranda/login-nest.svg?style=for-the-badge
[forks-url]: https://github.com/freitas-miranda/login-nest/network/members
[stars-shield]: https://img.shields.io/github/stars/freitas-miranda/login-nest.svg?style=for-the-badge
[stars-url]: https://github.com/freitas-miranda/login-nest/stargazers
[issues-shield]: https://img.shields.io/github/issues/freitas-miranda/login-nest.svg?style=for-the-badge
[issues-url]: https://github.com/freitas-miranda/login-nest/issues
[license-shield]: https://img.shields.io/github/license/freitas-miranda/login-nest.svg?style=for-the-badge
[license-url]: https://github.com/freitas-miranda/login-nest/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/freitas-miranda
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React Native]:https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React Native-url]:https://reactnative.dev/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/pt-br
[Yarn]:https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[Yarn-url]:https://yarnpkg.com/
[Jest]:https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]:https://jestjs.io/pt-BR/
[Git]:https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]:https://git-scm.com/
[GitHub]:https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]:https://github.com/
[GitHubActions]:https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white
[GitHubActions-url]:https://github.com/features/actions
[MariaDB]:https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white
[MariaDB-url]:https://mariadb.org/
[Fastify]:https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white
[Fastify-url]:https://fastify.dev/
[NestJS]:https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[NestJS-url]:https://nestjs.com/
[RabbitMQ]:https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white
[RabbitMQ-url]:https://www.rabbitmq.com/
[AWS]:https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[AWS-url]:https://aws.amazon.com/pt/
[TypeScript]:https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]:https://www.typescriptlang.org/
[Docker]:https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]:https://www.docker.com/
[Notion]:https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white
[Notion-url]:https://www.notion.so/
[Expo]:https://img.shields.io/badge/Build-3275E7.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=FFF
[Expo-url]:https://expo.dev
[Vue.js]:https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]:https://vuejs.org/
[Vuetify]:https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF
[Vuetify-url]:https://vuetifyjs.com/en/
[Express]:https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]:https://github.com/expressjs/express
[MongoDB]:https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white&style=for-the-badge
[MongoDB-url]:https://www.mongodb.com
[Socket.io]:https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101
[Socket.io-url]:https://socket.io
[Vite]:https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]:https://vitejs.dev
[SolidJS]:https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb
[SolidJS-url]:https://www.solidjs.com
[NPM]:https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]:https://www.npmjs.com
