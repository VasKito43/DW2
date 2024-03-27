# ARRAYS


Os arrays são estruturas de dados que armazenam coleções ordenadas de elementos. São semelhantes a uma lista, onde cada elemnto dessa lista tem uma posição que pode ser acessada.


## Acessando um Array


Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na posição equivalente ao valor da propriedade 'length' menos 1.


```javascript
var lista = ["este é o primeiro elemento", "este é o segundo elemento"];
console.log(lista[0]); // exibe 'este é o primeiro elemento'
console.log(lista[1]); // exibe 'este é o segundo elemento'
console.log(lista[lista.length - 1]); // exibe 'este é o segundo elemento'
console.log(lista.lenght); // exibe o número de elementos do array, 2
```


## Métodos dos Arrays


Os Arrays possuem muitos métodos que auxiliam no manuseio deles, exemplo:


- ``length``: Retorna o número de elementos no array.


- ``[]``: Acessa um elemento pelo seu índice.


- ``push()``: Adiciona um novo elemento ao final do array.


- ``pop()``: Remove o último elemento do array.


- ``unshift()``: Adiciona um novo elemento ao início do array.


- ``shift()``: Remove o primeiro elemento do array.


- ``slice()``: Retorna uma parte do array.


- ``splice()``: Remove ou insere elementos em qualquer posição do array.


- ``forEach(``): Executa uma função para cada elemento do array.


- ``map()``: Retorna um novo array com os resultados da função aplicada a cada elemento.


- ``filter()``: Retorna um novo array com os elementos que atendem a uma condição.


- ``find()``: Retorna o primeiro elemento que atende a uma condição.


- ``reduce()``: Reduz o array a um único valor.


## Exercícios


### Exercício 1


Crie um array com 5 nomes de animais e imprima o terceiro elemento.


### Exercício 2


Crie um array com 4 números e calcule a soma dos elementos do array.


### Exercício 3


Crie um array com 3 palavras e verifique se a palavra "banana" está presente no array.


## Respostas


### 1


```javascript
const animais = ["cachorro", "gato", "coelho", "rato", "pássaro"];


console.log(animais[2]);
```


### 2


```javascript
const numeros = [1, 2, 3, 4];


let soma = 0;


for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}


console.log(soma);
```


### 3


```javascript
const palavras = ["maçã", "banana", "laranja"];


const bananaEncontrada = palavras.includes("banana");


console.log(bananaEncontrada);
```



