const livros = require('./database')
// console.log(livros)

// pegar input sobre escolha de categoria

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Se sim, mostra categorias disponíveis e pergunta qual categoria ela escolhe
// Se não, mostra todos livros disponíveis em ordem crescente pela qtdd de páginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Literatura', ' /Psicologia', ' /Ativismo')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são as opções disponíveis:')
    console.table(livrosOrdenados)
}
