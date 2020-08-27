
(function(){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name:'Vinícius',lastname:'da Silva',age:20};
// ?


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":',Object.keys(person).join(', '));
// ?

/*
Crie um array vazio chamado `books`.
*/
var book = [];
// ?

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
book = [livro1 = {name:'Apostila 1', pages:100}, livro2 = {name:'Apostila 2', pages:150}, livro3 = {name:'Apostila 3', pages:200}];
// ?


/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:',book);
// ?

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:',book.pop());
// ?



/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:',book);
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/

// ?
book = JSON.stringify(book)
/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:',book);
// ?

/*
Converta os livros novamente para objeto.
*/
book = JSON.parse(book);
// ?
console.log( '\nAgora os livros são objetos novamente:',book);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i=0;i<book.length;i++){
    for(var propriedade in book[i]){
        console.log(propriedade+":",book[i][propriedade]);
    }
}

// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['V','i','n','i','c','i','u','s','P','a','t','r','i','c','i','o','M','e','d','e','i','r','o','s']
// ?


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join());
// ?

console.log( '\nMeu nome invertido é:',myName.reverse());

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:',myName.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

})();