// Gravando um arquivo – Funções assíncronas

const fs = require('fs');

if (process.argv.length <= 2) {
    console.log('Uso: node index07.js ARQUIVO_PARA_ESCREVER');
    process.exit(-1);
}

let arquivo = process.argv[2];
let dados = 'Dados que vão ser gravados';

fs.writeFile(arquivo, dados, (err) => {
    if (err) {
        console.error('Erro ao gravar os dados:', err);
    } else {
        console.log('Dados gravados com sucesso!');
    }
});
// no terminal dentro da pasta donde esta o arquivo faça: node index07.js README; node index07.js saida.txt ; type saida.txt.