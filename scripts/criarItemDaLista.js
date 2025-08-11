import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
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
    const nomeItem = document.createElement("p");

    // Cria um elemento <input> do tipo checkbox para marcar o item como concluído.
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox"; // Define o tipo do input como checkbox.
    inputCheckbox.id = "checkbox-" + contador++; // Define um id único para o checkbox usando um contador.
    containerItemDaLista.appendChild(inputCheckbox); // Adiciona o checkbox ao container do item.

    // Adiciona um evento para riscar ou remover o risco do texto ao marcar/desmarcar o checkbox.
    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through"; // Risca o texto se estiver marcado.
        } else {
            nomeItem.style.textDecoration = "none"; // Remove o risco se estiver desmarcado.
        }
    });
    
    nomeItem.innerText = inputItem.value;

    //inicializar o botão excluir
    const botao = document.createElement("button");
    botao.classList.add("botao-excluir");

    //inicializar o ícone
    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-trash";

    //estilizar o ícone/botão
    botao.style.cursor = "pointer";

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
        const confirmacao = confirm("Deseja realmente deletar esse item?");

        if (confirmacao) {            
            itemDaLista.remove();
            alert("Item deletado");
            verificarListaVazia(listaDeCompras);
        }
    });

    return itemDaLista;
}

// adicionar botão de editar
