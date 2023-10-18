//Argumentos de linha de comando

process.argv.forEach((val, index, array) => {
    console.log(index + ': ' + val);
});
//process é um objeto implicitp do Node.js

// para rodar o comando no terminal digite node index03.js arg1 arg2=valor arg4