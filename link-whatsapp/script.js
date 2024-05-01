const inputTexto = document.querySelector("#input")

console.log(inputTexto)


document.addEventListener("keydown", (evento) => {
    let teclapressionada =  evento.key
    let numeros = "0123456789"

    if (numeros.includes(teclapressionada)){
    }
    // if (numeros.includes(teclapressionada)){
    //     adicionaNumero(calculadora, teclapressionada)
    // } else if (operadores.includes(teclapressionada)){
    //     escolheOperador(calculadora, teclapressionada == "/" ? "÷": teclapressionada)
    // } else if (teclapressionada == "Enter"){
        
    // }
});