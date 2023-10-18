//console.log("Hello World!")

let compras = []; // criando array vazio

compras.push('Abacate');//indice 0
compras.push('Areia de gato');//indice 1
compras.push('Papel A4');//indice 2

// Acessando os elementos do array 
console.log(compras[0]);
compras.splice(1, 1); // removendo a partir do indice 1
console.log(compras);
// Quantos elementos tem no array?
console.log(compras.length);