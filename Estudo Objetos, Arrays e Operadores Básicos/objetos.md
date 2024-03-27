# OBJETOS


O conceito de objetos em JavaScript pode ser entendido como objetos tangíveis da vida real. Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.


## Propriedades


Objetos têm suas propriedades ligadas a ele, essas propriedades podem ser interpretadas como variáveis normais do javaScript ligadas ao objeto, elas também definem as características desse objeto. para criar uma propriedade basta uma simples notação de ponto:


```javaScript
nomeDoObjeto.nomeDaPropriedade
```


Como as variáveis em JavaScript, o nome do objeto e um nome de propriedade diferem em maiúsculas e minúsculas. Você pode definir uma propriedade atribuindo um valor a ela. Para propriedades não definidas de um objeto são undefined (e não null).


```javaScript
var meuCarro = new Object();
meuCarro.fabricante = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
meuCarro.cor = undefined
```


Essas propriedades podem ser acessadas e alteradas usando notações com colchetes:


```javaScript
console.log(meuCarro)
meuCarro["fabricacao"] = "Volvo";
meuCarro["modelo"] = "V40";
meuCarro["ano"] = 2019;
console.log(meuCarro)
```


## Exercícios


### Exercício 1


Crie um objeto para representar um livro com as propriedades:


- título (string)
- autor (string)
- numeroPaginas (number)
- lido (booleano)


### Exercício 2


Crie uma função que recebe um objeto livro como parâmetro e imprime na tela as informações do livro no seguinte formato:


Título: O Senhor dos Anéis
Autor: J.R.R. Tolkien
Número de Páginas: 1178
Lido: Sim


### Exercício 3


Crie um objeto para representar um carro com as propriedades:


modelo (string)
ano (number)
cor (string)
combustivel (string)
Adicione um método ao objeto carro chamado abastecer que recebe a quantidade de combustivel como parâmetro e aumenta a quantidade de combustível no tanque.


## Respostas


### 1


```javaScript
const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  numeroPaginas: 1178,
  lido: true,
};
```


### 2


```javaScript
function imprimirInformacoesLivro(livro) {
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Número de Páginas: ${livro.numeroPaginas}`);
  console.log(`Lido: ${livro.lido ? "Sim" : "Não"}`);
}
```


### 3


```javaScript
const carro = {
  modelo: "Gol",
  ano: 2010,
  cor: "branco",
  combustivel: 20,
  abastecer(quantidade) {
    this.combustivel += quantidade;
  },
};


carro.abastecer(10);


console.log(carro.combustivel);
```





