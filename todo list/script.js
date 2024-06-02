document.addEventListener('DOMContentLoaded', function() {
    tarefa();  // Inicializa os event listeners para os itens existentes
});

let botao = document.querySelector("#button");

botao.addEventListener("click", criar);

function tarefa() {
    const listItems = document.querySelectorAll('#lista li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('completado');
        });
    });
}

function criar() {
    let input = document.querySelector("#input");
    let lista = document.querySelector("#lista");

    if (input.value.trim() !== "") {
        let novo_item = document.createElement('li');
        novo_item.textContent = input.value;
        novo_item.addEventListener('click', function() {
            novo_item.classList.toggle('completado');
        });
        lista.appendChild(novo_item);

        input.value = ""; // Limpar o campo de entrada após adicionar a tarefa
    }
}