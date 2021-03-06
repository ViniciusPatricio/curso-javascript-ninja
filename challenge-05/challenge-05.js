/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
var vetor = [4,5,'T',6,'Fernando',false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function exibir(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
function exibir2(arg){
    return arg[2];
}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function exibirIndice(arg,x){
    return arg[x];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var vetor2 = [1,3,4,5,6];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

console.log(exibirIndice(vetor2,0));
console.log(exibirIndice(vetor2,1));
console.log(exibirIndice(vetor2,2));
console.log(exibirIndice(vetor2,3));
console.log(exibirIndice(vetor2,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(NomeLivro){
    var todosLivros={
        'Livro 1':{
            quantidadePaginas: 345,
            autor: 'Robson',
            editora: 'Nova'
        },
        'Livro 2':{
            quantidadePaginas: 545,
            autor: 'Robson',
            editora: 'Nova'
        },
        'Livro 3':{
            quantidadePaginas: 545,
            autor: 'Robson',
            editora: 'Nova'
        }

    }
    return !NomeLivro ?  todosLivros :  todosLivros[NomeLivro];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
   

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var livro_teste = 'Livro 2'
console.log('O livro '+livro_teste+' tem '+book(livro_teste).quantidadePaginas+' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O autor do livro '+livro_teste+' é '+book(livro_teste).autor+'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log('O livro '+livro_teste+' foi publicado pela editora '+book(livro_teste).editora);