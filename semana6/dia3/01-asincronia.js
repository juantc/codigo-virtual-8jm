const getCoordenadas = (ciudad,callback) => {
  console.log(1);
  console.log(2);

  console.log(3);


  console.log(4);
  console.log(5);
  
  
    let rpt = [];

  setTimeout(() => {
    console.log("modificando respuesta");
    rpta = [-16.1535, -70.5468];
    callback(rpta);

  }, 2000);
};



getCoordenadas('Arequipa',(rpta)=>{
    console.log(rpta);
});


