//JSON + Programação Funcional
const produtos = [
    {nome:'Coxinha', preco: 4.0},
    {nome:'Pastel', preco: 3.0},
    {nome:'Suco', preco: 2.0}
]

let exibirProduto = ( p, i) => {
    console.log( i + '. ' + p.nome + 'R$' + p.preco.toFixed(2));
};

console.log('TODOS OS PRODUTOS: ');
produtos.forEach(exibirProduto);

console.log('\nPRODUTOS DE MENOS DE R$ 3,00: ');
produtos.filter(p => p.preco <= 3).forEach(exibirProduto);

console.log('\nAUMENTO DE 20% EM TODOS OS PRODUTOS: ');
produtos.map (p => {
    return {
        nome : p.nome,
        preco : p.preco *= 1.2
    }
}).forEach(exibirProduto);