let aluno = {
    matricula: 123,
    nome: "Ana Maria",
    curso: "Sistemas de Informação",
    cre: 8.5
};

// Acessando valores por ' dot rotation"
console.log(aluno.nome);
//Acessando valores pelo nome da chave
console.log(aluno['nome']);
aluno.bolsista = true; // adicionando novo atributo
console.log(aluno);