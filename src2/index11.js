// Novo módulo

//Coisas Privadas
const produtos = [];
const proximoId = 0;

// Corpo da função  e return implicitos

var getIdxProduto =  id => produtos.map( p => p.id).indexOf(id);

//Cosias Publicas
const funcoesPublicas = {
    adicionaProduto: (nome, valor) => {
        produtos.push({id: proximoId, nome, valor});
    },
    getProduto: id => produtos[getIdxProduto(id)],
    removerProdutos : id => {
        produtos.splice(getIdxProduto(id) ,1);
    },
    getProdutos: () => produtos
};

module.exports = funcoesPublicas;