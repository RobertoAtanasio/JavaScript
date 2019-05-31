function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, Math.random() * 1000);
    });
}
Promise.race([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(value) {
    console.log(">>>  O ganhador foi:",value);
    return delayedSum(value, value).then(function(result) {
        console.log(result);
    });
}).catch(function (e) {
    console.log("ERRO:",e);
});

// a Promise.race retorna quando a primeira for executada com sucesso.

// é possível recorrer a bibliotecas de promises que trarão API ricas.

Promise.race([
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('A');
      }, 500);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('B');
      }, 300);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('C');
      }, 500);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('D');
      }, 500);
    }),
    new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve('E');
      }, 500);
    })
  ]).then(result=>{
    console.info("Resultado: ",result);
  }).catch(reason=>{
    console.warn('Failed: ', reason);
  });