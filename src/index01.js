//Para criar um projeto Node.js , primeiramente instale o Node.js na máquina, em seguida , crie uma pasta na sua área de trabalho ou no local que deseja, dentro da pasta 
//abra o terminal cmd, instale a extensão npm init .Abra a pasta criada no Vs Code e inicie suas aplicações.
console.log('Hello World!');

// Criando a arvore e ACSII

const NUM_LINHAS = 10;

for ( let i = 0; i < NUM_LINHAS; i++) {
    let espacos = ' '.repeat(NUM_LINHAS - i);
    let conteudo = 'X'.repeat(i);
    console.log(espacos + conteudo + 'X' + conteudo);
}

console.log((' '.repeat(NUM_LINHAS) + 'X' + '\n').repeat(4));
//Um Hello World Diferente