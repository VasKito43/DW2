var meuCarro = new Object();
meuCarro.fabricante = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
meuCarro.cor = undefined

console.log(meuCarro)
meuCarro["fabricante"] = "Volvo";
meuCarro["modelo"] = "V40";
meuCarro["ano"] = 2019;
console.log(meuCarro)