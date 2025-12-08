let total = 0;

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nome = produto.split("-")[0];
    let valor = produto.split("R$")[1];
    let campoProdutos = document.getElementById("lista-produtos");  
    let qtdInput = document.getElementById("quantidade").value;  
    let campoTotal = document.getElementById("valor-total");
    
    if (qtdInput <= 0) {
      qtdInput = 1; // Define a quantidade mínima como 1
    }

    campoProdutos.innerHTML += `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdInput}x</span> ${nome} <span class="texto-azul">R$${valor}</span>
        </section>`;
     
    let subtotal  = valor * qtdInput;
    total += subtotal;

    campoTotal.innerText = total.toFixed(2); // Exibe o valor total com duas casas decimais

    return total;
}


function limpar(){
    let campoProdutos = document.getElementById("lista-produtos");
    campoProdutos.innerHTML = "";
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = parseFloat(0).toFixed(2); // Zera o valor total e exibe duas casas decimais
    total = 0;
    return total;
}
