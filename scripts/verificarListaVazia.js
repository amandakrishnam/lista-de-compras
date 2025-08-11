// Seleciona o elemento HTML com a classe "mensagem-lista-vazia"
//  e armazena na variável
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

// Define a função que verifica se a lista de compras está vazia
function verificarListaVazia(listaDeCompras) {
    // Seleciona todos os elementos <li> dentro da lista de compras e 
    // retorna um NodeList (array)
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    // Se não houver nenhum <li> na lista (lista vazia)
    if (itensDaLista.length === 0) {
        // Exibe a mensagem de lista vazia
        mensagemListaVazia.style.display = "block";
    } else {
        // Esconde a mensagem de lista vazia
        mensagemListaVazia.style.display = "none";
    }
}

// Exporta a função para ser usada em outros módulos
export default verificarListaVazia;
