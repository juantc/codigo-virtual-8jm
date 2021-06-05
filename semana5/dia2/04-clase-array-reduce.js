/**
 * array.reduce((sumatoria, valorActual)=>{}, valor_inicial)
 * 
 */

let numeros=[4,3,45,2,20];

let users = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      age: 15,
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      age: 40,
    },
    {
      id: 3,
      email: "emma.wong@gmail.com",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      age: 17,
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      age: 60,
    },
    {
      id: 5,
      email: "charles.morris@gmail.com",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      age: 15,
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      age: 40,
    },
  ];

  let sumaEdades=users.age.reduce(
      (sumatoria,elementoActualE) =>{
      return sumatoria+elementoActualE;
  },0);
  console.log(sumaEdades);
