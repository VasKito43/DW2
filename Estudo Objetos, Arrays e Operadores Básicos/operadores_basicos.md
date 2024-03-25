# OPERADORES BÁSICOS

## ARITMÉTICOS

Os operadores aritméticos basicos no javaScript são ultilizados para realizar calculos simples como soma, subtração, divisão, multiplicação entre outras. Os priscipais operadores são:

- `+` = Soma
- `-` = Subtração
- `*` = Multiplicação
- `/` = Divisão
- `%` = Módulo ou Resto da divisão
- `++` = Inclemento
- `--` = Decremento

```javaScript
var a = 20;
var b = 10;
console.log("Soma: " + (a + b)); // 30
console.log("Subtração: " + (a - b)); // 10
console.log("Multiplicação: " + (a * b)); // 200
console.log("Divisão: " + (a / b)); // 2
console.log("Módulo: " + (b % a)); // 0
console.log("Incremento: " + (++a)); // 21 
console.log("Decremento: " + (--b)); // 9
```

## COMPARAÇÃO E LOGICOS

Os operadores de comparação e logicos basicos são ultilizados quando precisamos comparar dois valores no código, como por exemplo em um `if`, quando realizado essa comparação sempre retornará um valor `Booleano`, `True` caso essa comparação seja verdadeira e `False` se for falsa. Os principais operadores de comparação e logicos:

- `a > b` = **a** maior que **b**
- `a < b` = **a** menor que **b**
- `a >= b` = **a** maior ou igual a **b**
- `a <= b` = **a** menor ou igual a **b**
- `a == b` = **a** igual a **b**
- `a != b` = **a** diferete de **b**
- `a === b` = **a** identico a **b**
- `a !== b` = **a** não identico a **b**
- `a && b` = **a** E **b**
- `a || b` = **a** ou **b**

```javaScript
var a = 20;
var b = 10;
var c = 10;
var d = "10";
console.log((a > b)); // True
console.log((a < b)); // False
console.log((a >= b)); // True
console.log((c >= b)); // True
console.log((a <= b)); // False
console.log((c <= b)); // True
console.log((b == a)); // False
console.log((b == c)); // True
console.log((b == d)); // True
console.log((b != a)); // True
console.log((b != c)); // False
console.log((b != d)); // False
console.log((b === a)); // False
console.log((b === c)); // True
console.log((b === d)); // False
console.log((b !== a)); // True
console.log((b !== c)); // False
console.log((b !== d)); // True
console.log((a == b && b == c)); // False
console.log((a == b || b == c)); // True
```

## TYPEOF

O operador typeof retorna uma string indicando o tipo do operando sem avaliação. operando é uma string, variável, palavra-chave ou objeto cujo tipo deve ser retornado.

```javaScript
var meuLazer = new Function("5 + 2");
var forma = "redondo";
var tamanho = 1;
var hoje = new Date();

typeof meuLazer; // retorna "function"
typeof forma; // retorna "string"
typeof tamanho; // retorna "number"
typeof hoje; // retorna "object"
typeof naoExiste; // retorna "undefined"
typeof true; // retorna "boolean"
typeof null; // retorna "object"

```

## Exercicios

### Execicio 1

Crie um codigo que calcule a area de um terre a partir da largura e comprimento dele.

### Exercicio 2

Criar um programa que compare dois números e exiba o resultado da comparação.

- Utilize o prompt para capturar a entrada do usuário para os dois números.
- Converta as entradas (strings) para números usando ``parseFloat``.
- Utilize os seguintes operadores de comparação para comparar os números:
  - Igual a (``==``)
  - Diferente de (``!=``)
  - Maior que (``>``)
  - Menor que (``<``)
  - Maior ou igual a (``>=``)
  - Menor ou igual a (``<=``)
- Exiba o resultado de cada comparação utilizando o ``console.log``.

### Exercicio 3

Crie tres variaveis com o seu nome, idade e um array de amigos, tilize o ``typeof`` para verificar o tipo de cada variável. Exiba o valor da variável e seu tipo de dado utilizando o ``console.log``.

## Respostas

### 1

```javaScript
var a = prompt("Digite a largura em metros:");
var b = prompt("Digite o comprimento, em metros:");
var s = a * b;
console.log("A área do terreno é de " + s + " metros");
```

### 2

```javaScript
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));

console.log(`${numero1} == ${numero2}: ${numero1 === numero2}`);
console.log(`${numero1} != ${numero2}: ${numero1 !== numero2}`);
console.log(`${numero1} > ${numero2}: ${numero1 > numero2}`);
console.log(`${numero1} < ${numero2}: ${numero1 < numero2}`);
console.log(`${numero1} >= ${numero2}: ${numero1 >= numero2}`);
console.log(`${numero1} <= ${numero2}: ${numero1 <= numero2}`);
```

### 3

```javaScript
const nome = "João";
const idade = 20;
const amigos = ["Maria", "Pedro", "Ana"];

console.log(`Valor: ${nome}, Tipo: ${typeof nome}`);
console.log(`Valor: ${idade}, Tipo: ${typeof idade}`);
console.log(`Valor: ${amigos}, Tipo: ${typeof amigos}`);

```
