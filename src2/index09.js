// Exemplo Prático – Lendo objetos

const fs = require ('fs');

const ARQUIVO_BD = 'dados_produtos.json';

//Lendo o arquivo do banco de dados

fs.readFile(ARQUIVO_BD, (err,buf) => {
    if (err) {
        console.log('Não foi possivel ler os dados', err);
    } else {
        let produtos = JSON.parse(buf.toString());
        produtos.forEach((p, i) => {
            console.log(i + ' - ' + p.nome + ' - R$ ' + p.valor.toFixed(2));
        });
    }
});