
# GeoQuiz API
Aos 5 anos de idade Magnus Carlsen memorizou a superfície, população e as capitais de todos os países, anos mais tarde esse jovem viria a se tornar para muitos o maior jogador de xadrez de todos os tempos

<p align="center">
   <img width=350 src="https://projeto22-geo-quiz.vercel.app/static/media/logo.83d2cab8.png"/>
</p>


- Vivemos na era da comunicação, e é cada vez mais nos exigido se manter atualizado não só sobre nossa cidade mas sobre os mais diversos países do globo o tempo todo, (pois como diria o ditado "Sem geografia, você não está em lugar nenhum")
- *Ok, Ok, Entendi, mas como faço para compreender todas as informações se não mando bem em geografia?*
- Não tema! para isso surgiu o GeoQuiz, um site onde você pode testar e praticar seus conhecimentos sobre o tema, será que você consegue chegar ao top #1 do nosso placar diário?
- No total foram 60 territórios, 164 capitais de países e 247 bandeiras cadastradas no banco de dados

- [Veja meu deploy desta API aqui](https://geo-quiz-api.herokuapp.com)
- [veja meu repositório front-end aqui](https://github.com/marcojr73/projeto22-geoQuiz)

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
- Express
- ORM (prisma)
- Autenticação por token JWT
- Sendgrid (disparador de emails)

***
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`name` | `string` |
| `body` |`email` | `string` |
| `body` |`password` | `string` |
| `body` |`confirmPassword` | `string` |
| `body` |`picture*` | `string` |

#### Sign-in

```
  POST /sign-in
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `body` |`email` | `string` | 
| `body` |`password` | `string` |

#### get a list of capitals quizzes

```
  GET /capitals/:level
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `params` |`level` | `string` |

level must be "easy", "medium", "hard"

#### Validate an capital quiz answer

```
  POST /validate/capitals
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `body` |`quizId` | `number` | 
| `body` |`answer` | `string` | 


#### get a list of flags quizzes

```
  GET /flags/:level
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `params` |`level` | `string` |

level must be "easy", "medium", "hard"

#### Validate an flag quiz answer

```
  POST /validate/flags
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `body` |`quizId` | `number` | 
| `body` |`answer` | `string` | 

#### get a list of territories quizzes

```
  GET /territories/:level
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `params` |`level` | `string` |

level must be "easy", "medium", "hard"

#### Validate an territory quiz answer

```
  POST /validate/territories
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 
| `body` |`quizId` | `number` | 
| `body` |`answer` | `string` | 


#### List best players of day

```
  GET /users/ranking
```

| sent by |Parameter | Type     |                 
| :-------- |:-------- | :------- | 
| `header` |`authorization` | `Bearer token` | 


