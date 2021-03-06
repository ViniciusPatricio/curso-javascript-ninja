
(function(){
/*             OK
Envolva todo o código desse desafio em uma IIFE.
*/

/*             OK
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var array = [1,2,3,4,5,6];
console.log( 'O array em formato de string é:',array.toString( ));
// ?

/*            OK
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ['Paraná','Santa Catarina','Rio Grande do Sul'];
var sudeste = ['Espírito Santo','Minas Gerais','Rio de Janeiro','São Paulo'];
// ?

/*          OK
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = [];
brasil = brasil.concat(sul,sudeste);
console.log( '\nAlguns Estados do Brasil:',brasil );
// ?

/*         OK
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
brasil=brasil.concat(['Amazonas','Pará','Roraima'])
//console.log( '\nMais estados adicionados:',brasil.slice(7));
console.log( '\nMais estados adicionados:',brasil.slice(7).join(', '));
// ?

/*        OK
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

console.log( '\nEstado removido:',brasil.shift());
// ?

/*       OK
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.slice(0,2);
// ?

/*      OK
Mostre no console os estados que estão em `newSul`.
*/
//console.log( '\nEstados do Sul do Brasil:',newSul);
console.log( '\nEstados do Sul do Brasil:',newSul.join(',') );
// ?

/*      OK
Mostre no console todos os estados que estão em `brasil`.
*/
//console.log( '\nAlguns Estados do Brasil:',brasil);
console.log( '\nAlguns Estados do Brasil:',brasil.join(', '));
// ?

/*      OK
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Alagoas','Bahia','Ceará','Maranhã','Paraíba','Pernambuco','Piauí','Rio Grande do Norte','Sergipe'];
// ?

/*      OK
Mostre no console os estados do nordeste.
*/
//console.log( '\nEstados do Nordeste:',nordeste);
console.log( '\nEstados do Nordeste:',nordeste.join(', '));
// ?

/*      OK
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.splice(2,4);
// ?

/*       OK
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil=brasil.concat(nordeste);
// ?

/*       Ok
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:',newSudeste.join(', '));
// ?

/*       OK
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:',brasil.join(', '));
// ?

/*       OK
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = [];
brasil.forEach(function(item,index,array){
            newBrasil[index]={id:index, estado:item};
})
// ?
 
/*      OK
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:',newBrasil);
// ?

/*     OK
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
var menorQueSete = brasil.every(function(item){
    return item.length>7;
})
 menorQueSete === false ? console.log('Nem todos os estados tem mais de 7 letras!') : console.log("Sim, todos os estados tem mais de 7 letras!")

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?',menorQueSete);
// ?
 
/*       OK
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
var cearaPertence = brasil.some(function(item){
    return item === 'Ceará';
})

cearaPertence === true ? console.log('\nCeará está incluído!') : console.log('\nCeará não foi incluído :(')

console.log( '\nCeará está incluído em `brasil`?',cearaPertence );
// ?

/*      OK
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newBrasil.map(function(item,index,array){
    return {id:index+1, estado: item.estado+' pertence ao Brasil'};
})
// ?

/*      OK
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:',map );
// ?

/*      OK
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/

var filter = map.filter(function(item,index,array){
    return item.id % 2 == 0;
})
// ?

/*      OK
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:',filter);
// ?
})()