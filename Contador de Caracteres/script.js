const inputTexto = document.querySelector("#input")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar")

inputTexto.addEventListener("input", contador)

btnContar.addEventListener("click", botao)

function contador(){
    if (btnContar.innerText === "Contar Palavras"){
        divContador.innerText = `${String(inputTexto.value).length} caracteres`
        console.log("meu  pato ".trim().split(/\s+/).length)
    } else {
        divContador.innerText = `${String(inputTexto.value).trim().split(/\s+/).length} palavras`
    }
}

function botao(){
    if (btnContar.innerText === "Contar Palavras"){
        btnContar.innerText = "Contar Caracteres"
        contador()
    } else {
        btnContar.innerText = "Contar Palavras"
        contador()
    }
}