
const botao = document.querySelector("#button")

botao.addEventListener("click", criar)

var num_criadas = document.querySelector("#num_tc")
var num_tarefas = document.querySelector("#n_tarefas")
var num_tarefas_completas = document.querySelector("#n_tarefas_concluidas")

document.addEventListener("keydown", (evento) => {
    let teclaPressionada = evento.key;

    if (teclaPressionada == "Enter"){
        evento.preventDefault()
        criar()
    }

})

function criar() {
    let input = document.querySelector("#input")
    let lista = document.querySelector("#lista")

    if (input.value.trim() !== "") {
        num_criadas.textContent = `${parseInt(num_criadas.textContent) + 1}`
        num_tarefas.textContent = `${parseInt(num_tarefas.textContent) + 1}`
        console.log(num_tarefas)
        let novo_item = document.createElement('li')

        //cria imagem
        let check_img = document.createElement('img')
        check_img.src = 'check.png'
        check_img.className = 'simbolo'
        check_img.addEventListener('click', function() {
            novo_item.classList.toggle('completado') //toggle: alternar a classe, adiciona ou retira a classe conforme se ela está presente ou não no item
            check_img.src = novo_item.classList.contains('completado') ? 'Layer 1.png' : 'check.png';
            let quantidade = document.querySelectorAll(".completado")
            num_tarefas_completas.textContent = quantidade.length
        })

        // Cria texto
        let Texto = document.createTextNode(input.value) //.createTextNode: cria um texto capaz de anexar no item

        // Cria o botao de deletar
        let btn_del = document.createElement('button')
        btn_del.className = 'btn_del'

        // Cria imagem del
        let trash_img = document.createElement('img')
        trash_img.src = 'trash.png'
        trash_img.className = 'simbolo'
        btn_del.appendChild(trash_img)

        // btn_del
        btn_del.addEventListener('click', function() {
            lista.removeChild(novo_item)
            num_criadas.textContent = `${parseInt(num_criadas.textContent) - 1}`
            num_tarefas.textContent = `${parseInt(num_tarefas.textContent) - 1}`
            let quantidade = document.querySelectorAll(".completado")
            num_tarefas_completas.textContent = quantidade.length
        })

        // li
        novo_item.appendChild(check_img)
        novo_item.appendChild(Texto)
        novo_item.appendChild(btn_del)
        lista.appendChild(novo_item)

        input.value = ""
    }
}
