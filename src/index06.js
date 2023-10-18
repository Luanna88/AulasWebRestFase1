// Lendo um arquivo – Funções assíncronas

const fs =require('fs');

if (process.argv.length <= 2) {
    console.log('Uso: node index06.js ARQUIVO_PARA_LER');
    process.exit(-1);
}

let arquivo = process.argv[2];

// CallBack para função assíncrona
fs.readFile(arquivo, (err, buf) => {
    console.log(buf.toString());
});