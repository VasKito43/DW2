
const botao = document.querySelector("#button")

botao.addEventListener("click", input)

var num_criadas = document.querySelector("#num_tc")
var num_tarefas = document.querySelector("#n_tarefas")
var num_tarefas_completas = document.querySelector("#n_tarefas_concluidas")
var lista = document.querySelector("#lista")

document.addEventListener("keydown", (evento) => {
    let teclaPressionada = evento.key;

    if (teclaPressionada == "Enter"){
        evento.preventDefault()
        input()
    }

})

cria_img()


function tarefa() {
    const listItems = document.querySelectorAll('#lista li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('completado');
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('info.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                criar(item.tarefa);
            });
        })
        .catch(error => console.error('Erro:', error));
});

function input(){
    let input = document.querySelector("#input")
    if (input.value.trim() !== "") {
        criar(input.value)
        input.value = "";
    }
}


function criar(nome_tarefa) {
    if (nome_tarefa.length < 300){
        let lista = document.querySelector("#lista")

    if (num_criadas.textContent == 0){
        del_img()

    }

    num_criadas.textContent = `${parseInt(num_criadas.textContent) + 1}`
    num_tarefas.textContent = `${parseInt(num_tarefas.textContent) + 1}`
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
    let div = document.createElement('div')
    div.textContent = nome_tarefa
    div.className = 'div_li'

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
        if (num_criadas.textContent == 0){
            cria_img()
        }
        let quantidade = document.querySelectorAll(".completado")
        num_tarefas_completas.textContent = quantidade.length
    })

    // li
    novo_item.appendChild(check_img)
    novo_item.appendChild(div)
    novo_item.appendChild(btn_del)
    lista.appendChild(novo_item)

    }else{
        alert("Texto da tarefa muito grande")
    }

}

function cria_img(){
    let img = document.createElement('img')
    img.src = 'Empty.png'
    img.className = 'empty'
    lista.appendChild(img)
}

function del_img(){
    let img = document.querySelector(".empty")
    lista.removeChild(img)
}