# Variaveis

Em JavaScript, uma variável é um contêiner nomeado para armazenar dados. Você pode pensar nelas como caixas onde você pode colocar informações para uso posterior. Ao contrário de algumas linguagens de programação, como C ou Java, em JavaScript, você não precisa declarar explicitamente o tipo de uma variável ao criá-la. Em vez disso, você simplesmente usa a palavra-chave let, const ou var, seguida pelo nome da variável e, opcionalmente, atribui um valor a ela.

### let:

- Âmbito (escopo): Local (bloco de código)
- Redeclaração: Não permite redeclarar a variável com o mesmo nome dentro do mesmo escopo.
- Reatribuição: Permite reatribuir um novo valor à variável.

```javascript
// Exemplo de let
if (true) {
  let mensagem = "Olá dentro do bloco"
}

console.log(mensagem) // Erro: mensagem não está definida fora do bloco 'if'
```
### var:

- Âmbito: Global ou de função, pode  acessar em qualquer parte do codigo.
- Redeclaração: Permite redeclarar a variável com o mesmo nome dentro do mesmo escopo.
- Reatribuição: Permite reatribuir um novo valor à variável.

```javascript
// Exemplo de var
var fruta = "Maçã"

if (true) {
  var fruta = "Laranja"
  console.log(fruta) // Laranja 
}

console.log(fruta) // Laranja (var pode ser acessada de fora do bloco)

```

### const:

- Âmbito: Local (bloco de código)
- Redeclaração: Não permite redeclarar a variável com o mesmo nome dentro do mesmo escopo.
- Reatribuição: Não permite reatribuir um novo valor à variável (valor constante).

```javascript
// Exemplo de const
const PI = 3

PI = 4 // Erro: tentativa de reatribuir valor a uma constante

console.log(PI) // 3
```

# Tipos Primitivos

Os tipos primitivos são as formas de armazenar um dados que podem ser manipulados no programa, esses dados podem ser como String, Number, Boolean, Null e Undefined.

### String:

Uma string é uma sequência de caracteres, como letras, números, ou símbolos, que são usados para representar texto. Elas podem ser definidas utilizando aspas simples (') ou duplas ("). 

```javascript
let mensagem = 'Ola Mundo'
let nome = "Gabriel"
```

### Number:
O tipo number é usado para representar valores numéricos, sejam inteiros ou de ponto flutuante. 
```javascript
let inteiro = 12
let flutuante = 3,14
```
### Boolean:
Boolean é um tipo que tem apenas dois valores possíveis: true ou false.

```javascript
let verdadeiro = True
let falso = False
```
### Null:

Null é um tipo que representa a ausência intencional de qualquer valor ou objeto. Quando uma variável é definida como null, significa que ela não possui nenhum valor atribuído. 

```javascript
let  vazio = null // a variável não apresenta  nenhum valor
```

### Undefined:
Undefined é um tipo que indica que uma variável foi declarada, mas não foi inicializada com um valor. Quando uma variável é declarada sem atribuir-lhe um valor, ela automaticamente recebe o valor undefined.

```javascript
let  indefinido // a variável de tipo indefinido
```

# Exercicios:

1. Declare variáveis usando `const` para armazenar as seguintes informações:

    - Seu nome completo
    - Sua idade
    - Sua cidade natal
    - Se você está estudando JavaScript no momento usando valor Booleano
    - O número de irmãos que você tem
    - Seu prato favorito
2. Crie um script que calcule a soma, a diferença, o produto e o quociente de dois números digitados pelo usuário usando o `let`.

3. Escreva um código que verifica se um número digitado pelo usuário é par ou ímpar usando o `var`.

4. Implemente um programa que pede ao usuário o nome e a idade e exibe a seguinte mensagem:

    Olá, [nome do usuário]! Você tem [idade do usuário] anos.
5. Crie um script que verifica se o valor de uma variável é null, undefined, true ou false.

## Respostas

1.
```javascript
const nomeCompleto = "Gabriel Vasco da Silva";
const idade = 17;
const cidadeNatal = "Campo Mourão";
const estudandoJS = true;
const numeroIrmãos = 1;
const pratoFavorito = "Lasanha";

console.log(`Nome completo: ${nomeCompleto}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade natal: ${cidadeNatal}`);
console.log(`Estudando JavaScript: ${estudandoJS}`);
console.log(`Número de irmãos: ${numeroIrmãos}`);
console.log(`Prato favorito: ${pratoFavorito}`);

```
2.
```javascript
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let diferenca = num1 - num2;
let produto = num1 * num2;
let quociente = num1 / num2;

console.log(`Soma: ${soma}`);
console.log(`Diferença: ${diferenca}`);
console.log(`Produto: ${produto}`);
console.log(`Quociente: ${quociente}`);

```
3.
```javascript
let numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
  console.log("O número é par!");
} else {
  console.log("O número é ímpar!");
}

```
4.
```javascript
let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

```
5.
```javascript
let valor = prompt("Digite um valor: ");

if (valor === null) {
  console.log("O valor é null");
} else if (valor === undefined) {
  console.log("O valor é undefined");
} else if (valor === true) {
  console.log("O valor é true");
} else if (valor === false) {
  console.log("O valor é false");
} else {
  console.log("O valor não é null, undefined, true ou false");
}

```