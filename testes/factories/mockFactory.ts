import { faker } from "@faker-js/faker"

function returnNull(){
    return null
}

function returnTrue(){
    return true
}

function returnAnyError(){
    return {
        status: 500,
        message: "erro"
    }
}

function returnFakeCapitalQuiz(){
    return [{
        capitalsQuiz: [
            {
              id: 8,
              country: 'Argentina',
              capital: 'Buenos Aires',
              cityTwo: 'Córdoba',
              cityThree: 'Rosario',
              cityFour: 'Mendoza',
              cityFive: 'La Plata'
            },
            {
              id: 10,
              country: 'Australia',
              capital: 'Canberra',
              cityTwo: 'Sydney',
              cityThree: 'Melbourne',
              cityFour: 'Brisbane',
              cityFive: 'Gold Coast'
            },
            {
              id: 18,
              country: 'Belgium',
              capital: 'Brussels',
              cityTwo: 'Antwerpen',
              cityThree: 'Gent',
              cityFour: 'Charleroi',
              cityFive: 'Liège'
            },
            {
              id: 22,
              country: 'Bolivia',
              capital: 'Sucre',
              cityTwo: 'Santa Cruz de la Sierra',
              cityThree: 'La Paz',
              cityFour: 'Oruro',
              cityFive: 'Sacaba'
            },
            {
              id: 25,
              country: 'Brazil',
              capital: 'Brasilia',
              cityTwo: 'São Paulo',
              cityThree: 'Rio de Janeiro',
              cityFour: 'Belo Horizonte',
              cityFive: 'Mercês'
            },
            {
              id: 30,
              country: 'Canada',
              capital: 'Ottawa',
              cityTwo: 'Toronto',
              cityThree: 'Montréal',
              cityFour: 'Mississauga',
              cityFive: 'Calgary'
            },
            {
              id: 33,
              country: 'Chile',
              capital: 'Santiago',
              cityTwo: 'Puente Alto',
              cityThree: 'Antofagasta',
              cityFour: 'Viña del Mar',
              cityFive: 'Valparaíso'
            },
            {
              id: 34,
              country: 'China',
              capital: 'Beijing',
              cityTwo: 'Shanghai',
              cityThree: 'Shenzhen',
              cityFour: 'Wuhan',
              cityFive: 'Tianjin'
            },
            {
              id: 35,
              country: 'Colombia',
              capital: 'Bogota',
              cityTwo: 'Cali',
              cityThree: 'Medellín',
              cityFour: 'Barranquilla',
              cityFive: 'Cúcuta'
            },
            {
              id: 44,
              country: 'Denmark',
              capital: 'Copenhagen',
              cityTwo: 'Århus',
              cityThree: 'Odense',
              cityFour: 'Aalborg',
              cityFive: 'Esbjerg'
            }]
    }]
}

function returnFakeFlagsQuiz(){
  return [
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      levelId: 3
    },
    {
      country: "Belgium",
      flag: "🇧🇪",
      levelId: 1
    },
    {
      country: "Burkina Faso",
      flag: "🇧🇫",
      levelId: 3
    },
    {
      country: "Bulgaria",
      flag: "🇧🇬",
      levelId: 2
    },
    {
      country: "Bosnia and Herzegovina",
      flag: "🇧🇦",
      levelId: 2
    },
    {
      country: "Barbados",
      flag: "🇧🇧",
      levelId: 3
    },
    {
      country: "Wallis and Futuna",
      flag: "🇼🇫",
      levelId: 3
    },
    {
      country: "Saint Barthelemy",
      flag: "🇧🇱",
      levelId: 3
    },
    {
      country: "Bermuda",
      flag: "🇧🇲",
      levelId: 3
    },
    {
      country: "Brunei",
      flag: "🇧🇳",
      levelId: 3
    },
  ]
}

function returnFakeTerritoryQuiz(){
  return [{
    name: "https://www.arealme.com/geography/images/1.png",
    country: "China",
    levelId: 1,
    options: ["Mongolia", "Russia", "Kazakhstan", "India"]
},
{
    name: "https://www.arealme.com/geography/images/2.png",
    country: "Índia",
    levelId: 1,
    options: ["Pakistan", "Afghanistan", "Ira", "Indonesia"]
},
{
    name: "https://www.arealme.com/geography/images/3.png",
    country: "United States",
    levelId: 1,
    options: ["Canada", "Mexico", "Russia", "Brazil"]
},
{
    name: "https://www.arealme.com/geography/images/4.png",
    country: "Indonesia",
    levelId: 2,
    options: ["Malaysia", "Tayland", "Nyanmar", "philippines"]
},
{   
    name: "https://www.arealme.com/geography/images/5.png",
    country: "Brazil",
    levelId: 1,
    options: ["Argentina", "Mexico", "United States", "Australia"]
},
{
    name: "https://www.arealme.com/geography/images/6.png",
    country: "Russia",
    levelId: 1,
    options: ["China", "Mongolia", "United States", "India"]
},
{
    name: "https://www.arealme.com/geography/images/7.png",
    country: "Japan",
    levelId: 1,
    options: ["Philippines", "South Korea", "north Korea", "Taiwan"]
},
{
    name: "https://www.arealme.com/geography/images/8.png",
    country: "Mexico",
    levelId: 1,
    options: ["United States", "Canada", "Cuba", "Guatemala"]
},
{
    name: "https://www.arealme.com/geography/images/9.png",
    country: "Philippines",
    levelId: 2,
    options: ["vietnam", "Malaysia", "Tailand", "Japan"]
},
{
    name: "https://www.arealme.com/geography/images/11.png",
    country: "Egypt",
    levelId: 2,
    options: ["Algeria", "Libya", "Niger", "Siria"]
},]
}

export { 
    returnNull,
    returnTrue,
    returnAnyError,
    returnFakeCapitalQuiz,
    returnFakeFlagsQuiz,
    returnFakeTerritoryQuiz
}