function limpar(){
    let campoProdutos = document.getElementById("lista-produtos");
    campoProdutos.innerHTML = "Seu carrinho está vazio.";
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = parseFloat(0).toFixed(2);
    console.log(valorTotal); 
}