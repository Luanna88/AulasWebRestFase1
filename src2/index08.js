// Exemplo Prático – Gravando objetos

const fs = require ('fs');

const ARQUIVO_BD = 'dados_produtos.json';

let produtos = [
    {nome:'Coxinha', valor:  4.0},
    {nome:'Pastel', valor: 3.5},
    {nome: 'Suco', valor:2.0 }
]

// Gravando o banco de dados 
fs.writeFile(ARQUIVO_BD, JSON.stringify(produtos), (err, data) => {
    if (err) console.log(err);
    console.log('Dados Gravados com sucesso.');
});

// no terminal dentro da pasta faça os comandos : node index08.js rode e em seguida faça type dados_produtos.js