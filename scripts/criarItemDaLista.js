import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

export const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    //inicializar o botão excluir
    const botao = document.createElement("button");
    botao.classList.add("botao-excluir");

    //inicializar o ícone
    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-trash";

    //estilizar o ícone/botão
    botao.style.cursor = "pointer";

    // decoração ao marcar e desmarcar o checkbox
    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    //Adiciona o botão e o ícone excluir dentro do container da lista
    containerItemDaLista.appendChild(botao);

    //adicionar ícone dentro do botão
    botao.appendChild(iconeExcluir);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    botao.addEventListener("click", function () {
        itemDaLista.remove();
    });

    return itemDaLista;
}

