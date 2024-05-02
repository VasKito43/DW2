var inputTexto = document.querySelector("#input")
var divLink = document.querySelector("#link")
var telefone = ""


inputTexto.addEventListener("input", atualizaTelefone)
divLink.addEventListener("click", copiaLink)

function atualizaTelefone(){
    telefone =  inputTexto.value.replace(/\D/g, "")
    console.log(telefone)
    if (telefone.length == 0) {
        inputTexto.value  = ""
    }else if (telefone.length == 1){
        inputTexto.value = "(" + telefone
    }else if (telefone.length < 8 && telefone.length >= 3){
        inputTexto.value = "(" + telefone.slice(0, 2) + ")" + `${telefone.slice(2, 8)}`
    } else if (telefone.length >= 8 && telefone.length < 12){
        inputTexto.value = "(" + telefone.slice(0, 2) + ")" + `${telefone.slice(2, 7)}` + "-" + `${telefone.slice(7, 11)}`
    } 
}

function geraLink(){
    if (telefone.length == 11){
        divLink.style.borderWidth = "2px";
        divLink.innerText = `https://wa.me//55${telefone}`
    } else {
        alert("Telefone Invalido")
    }
}

function copiaLink(){
    navigator.clipboard.writeText(divLink.innerText);
    alert("Link Copiado")
}

function abreGuia(){
    if (telefone.length == 11){
        window.open(`https://wa.me//55${telefone}`, "_blank")
    } else {
        alert("Telefone Invalido")
    }
}