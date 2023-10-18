//Versão recursiva – percorre subpastas
const fs = require('fs');
let pasta =process.argv[2];

let listarArquivos = (pasta, arquivos, nivel) => {
    arquivos.forEach ( a => {
        if ( fs.statSync(pasta, + '/' + a).isDirectory()) {
            console.log(' '.repeat(nivel) + a + ':');
            let subPasta = pasta + '/' + a ;
            fs.readdir(subPasta, (err,arquivosSubPasta) => {
                listarArquivos(subPasta, arquivosSubPasta, nivel + 1); 
            });
        } else {
            console.log(' '.repeat(nivel) + a);
        }
    });
};

fs.readdir(pasta, (err, arquivos) => {
    listarArquivos (pasta, arquivos,0);
});