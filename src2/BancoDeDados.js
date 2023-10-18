// Usando o módulo criado no index11.js
const bd = require('./BancoDeDados');

bd.adicionaProduto({nome: 'mousepad',valor: 14.0});
bd.adicionaProduto({nome: 'fone de ouvido', valor: 20.0});
bd.adicionaProduto({nome:'4 pilhas AA', valor: 11.5});

let exibirProduto = p => {
    console.log( p.id + ': ' + ' R$ ' + p.valor.toFixed(2));
}

bd.getProdutos().forEach(exibirProduto);

console.log('Produto id = 1: ');
exibirProduto(bd.getProduto(1));

console.log(' Removendo o produto com id = 1: ');
bd.removerProduto(1);
bd.getProdutos().forEach(exibirProduto);