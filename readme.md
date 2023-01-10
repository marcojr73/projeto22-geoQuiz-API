
# GeoQuiz API
Aos 5 anos de idade Magnus Carlsen memorizou a superfície, população e as capitais de todos os países, anos mais tarde esse jovem viria a se tornar para muitos o maior jogador de xadrez de todos os tempos

<p align="center">
   <img width=350 src="https://camo.githubusercontent.com/1057db7ca58a081bf7c7f277be37b010aa944b4836a7bdd2edc4d1eb2afc4eef/68747470733a2f2f70726f6a65746f32322d67656f2d7175697a2e76657263656c2e6170702f7374617469632f6d656469612f6c6f676f2e38336432636162382e706e67"/>
</p>


- Vivemos na era da comunicação, e é cada vez mais nos exigido se manter atualizado não só sobre nossa cidade mas sobre os mais diversos países do globo o tempo todo, (pois como diria o ditado "Sem geografia, você não está em lugar nenhum")
- *Ok, Ok, Entendi, mas como faço para compreender todas as informações se não mando bem em geografia?*
- Não tema! para isso surgiu o GeoQuiz, um site onde você pode testar e praticar seus conhecimentos sobre o tema, será que você consegue chegar ao top #1 do nosso placar diário?
- No total foram 60 territórios, 164 capitais de países e 247 bandeiras cadastradas no banco de dados

- [Veja meu deploy desta API aqui](https://geo-quiz-api.onrender.com)
- [veja meu repositório front-end aqui](https://github.com/marcojr73/projeto22-geoQuiz)
- [veja meu repositório mobile desta aplicação aqui](https://github.com/marcojr73/Geo-Quiz-flutter)



***

## Como usar

Instale meu projeto e configure o .env como no exemplo

```bash
  git clone git@github.com:marcojr73/projeto22-geoQuiz-API.git
```

```bash
  npm install

  npx prisma migrate dev
  
  npm run dev
```

***


## Execute com o docker

Altere o **HOST** da variavel **DATABASE_URL** no .env para "db"

```bash
  npm run docker:run
```

***

## Testes

Configure um arquivo **.env.test** na raiz do projeto para executar os testes

```bash
  npm run test:integration
  npm run test:unity
```

***

## Documentação da API

- Documentação da API utilizando o [Swagger](https://swagger.io/), uma ferramenta que permite a criação de uma *API reference* onde você pode especificar e testar os endpoints de forma organizada 
- Depois de instalado e o projeto esteje executando, a documentação poderá ser acessada na rota "/docs" do seu navegador ou [clicando aqui](http://localhost:5000/docs)

```
  http://localhost:5000/docs
```

***

##	 Tecnologias e Conceitos

- Node.js
- TypeScript
- Express
- ORM (prisma)
- Autenticação por token JWT
- Sendgrid (disparador de emails)
- Testes automatizados
- Docker, docker-compose
- Swagger


    
