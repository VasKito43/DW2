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
