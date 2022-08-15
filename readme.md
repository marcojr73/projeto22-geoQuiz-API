
# GeoQuiz
Aos 5 anos de idade Magnus Carlsen memorizou a superfície, população e as capitais de todos os países, anos mais tarde esse jovem viria a se tornar para muitos o maior jogador de xadrez de todos os tempos

<p align="center">
   <img width=350 src="https://projeto22-geo-quiz.vercel.app/static/media/logo.83d2cab8.png"/>
</p>


- Vivemos na era da comunicação, e é cada vez mais nos exigido se manter atualizado não só sobre nossa cidade mas sobre os mais diversos países do globo o tempo todo, (pois como diria o ditado "Sem geografia, você não está em lugar nenhum")
- *Ok, Ok, Entendi, mas como faço para compreender todas as informações se não mando bem em geografia?*
- Não tema! para isso surgiu o GeoQuiz, um site onde você pode testar e praticar seus conhecimentos sobre o tema, será que você consegue chegar ao top #1 do nosso placar diário?
- [Veja meu deploy na Heroku desta API aqui](https://geo-quiz-api.herokuapp.com)
- [veja meu deploy na Vercel da página aqui](https://projeto22-geo-quiz.vercel.app/)

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

##	 Tecnologias e Conceitos

- Node.js
- TypeScript
- ORM (prisma)
- Autenticação por token JWT

***
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`email` | `string` |
| `body` |`password` | `string` |

#### Sign-in

```
  POST /sign-in
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `body` |`email` | `string` | 
| `body` |`password` | `string` |

#### Create test 

```
  POST /tests/create
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `body` |`name` | `string` | 
| `body` |`pdfUrl` | `string` |
| `body` |`category*` | `string` | 
| `body` |`discipline*` | `string` | 
| `body` |`teacher*` | `string` | 

category, teacher and discipline must be consistent with the bank's rules

#### Views the tests by discipline

```
  GET /tests/disciplines
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 

#### Views the tests by teacher

```
  GET /tests/disciplines
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` |