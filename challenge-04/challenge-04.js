//# Desafio da semana #4

//js

//Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
//um único parâmetro como argumento. Essa função deve retornar `true` se o
//equivalente booleano para o valor passado no argumento for `true`, ou `false`
//para o contrário.
var isTruthy = function FTruthy(x){
    if(x){ return true;}else{ return false;}
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(undefined);
console.log(isTruthy(undefined));
isTruthy(null);
console.log(isTruthy(null));
isTruthy(NaN);
console.log(isTruthy(NaN));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
console.log(isTruthy(10));
isTruthy('Robson');
console.log(isTruthy('Robson'));
isTruthy(312);
console.log(isTruthy(312));
isTruthy('A');
console.log(isTruthy('A'));
isTruthy('Vinicius');
console.log(isTruthy('Vinicius'));
isTruthy(55);
console.log(isTruthy(55));
isTruthy('Renato');
console.log(isTruthy('Renato'));
isTruthy('Vitor');
console.log(isTruthy('Vitor'));
isTruthy('Raquel');
console.log(isTruthy('Raquel'));
isTruthy('33');
console.log(isTruthy('33'));
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {marca:'Fiat', modelo:'Uno', placa:'XLW423', ano:2015, cor:'Preto', quantasPortas:4, assentos:5, quantidadePessoas:0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function Mudarcor(y){
    carro.cor=y;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function obtermodelo(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function obterMarca(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function ObterMarcaModelo(){
    return "Esse carro é um "+carro.marca+" "+carro.modelo;
}
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarCarro = function adicionarCarro(x){
    var vagas_disponiveis = carro.assentos - carro.quantidadePessoas;
    
    if(vagas_disponiveis==0 && x>0){
        return "O carro já está lotado!!"    
    }else if (vagas_disponiveis<x){
        return "Só cabem mais "+vagas_disponiveis+" pessoas!"
    }else if (x<=vagas_disponiveis){
        carro.quantidadePessoas+=x;
        return "Já temos "+carro.quantidadePessoas+" pessoas no carro!";
    }

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');


// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.adicionarCarro(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarCarro(4));

// Faça o carro encher.
console.log(carro.adicionarCarro(3));

// Tire 4 pessoas do carro.
console.log(carro.adicionarCarro(-4));

// Adicione 10 pessoas no carro.
console.log(carro.adicionarCarro(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);

