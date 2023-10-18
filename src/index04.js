//Listando arquivos de uma pasta

const fs = require('fs');

if (process.argv.length <= 2) {
    console.log("Uso: node index04.js CAMINHO_PARA_PASTA");
    process.exit(-1);
}

let path =  process.argv[2];

fs.readdir(path, (err, arquivos) => {
    arquivos.forEach(a => console.log(a));
});