const inputTexto = document.querySelector("#input")

console.log(inputTexto)
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar")

inputTexto.addEventListener("input", contador)

btnContar.addEventListener("click", botao)


let identificador = "caracter"


function contador(){
    if (identificador === "caracter"){
        divContador.innerText = `${String(inputTexto.value).length} caracteres`
    } else {
        divContador.innerText = `${String(inputTexto.value).trim().split(/\s+/).length} palavras`
    }
}

function botao(){
    if (identificador === "caracter"){
        btnContar.innerText = "Contar Caracteres"
        identificador = "palavra"
        contador()
    } else {
        btnContar.innerText = "Contar Palavras"
        identificador = "caracter"
        contador()
    }
}