//instalando um pacote no projeto (npm install archiver -save), aqui criar uma pasta node_modules dentro do seu projeto
// Compactando um arquivo

const fs = require ('fs');
const archiver = require ('archiver');

var saida = fs.createWriteStream('target.zip');
var compactador = archiver('zip');

saida.on('close', () => {
    console.log(compactador.pointer() + 'bytes totais');
});

//Grava os arquivos na saída 
compactador.pipe(saida);

var arquivo = __dirname + '/index10.js';
compactador.append(fs.createReadStream(arquivo), {name : 'index10.js'});

compactador.finalize();    // criará uma pasta zipada dentro do seu projeto chamada 'target.zip'.