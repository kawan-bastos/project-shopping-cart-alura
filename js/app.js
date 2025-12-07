function adicionar() {
    let produto = document.querySelector("#produto").value;
    let nome = produto.split("-")[0];
    let valor = produto.split("-")[1]
    let campoProdutos = document.getElementById("lista-produtos");
    let valorTotal = document.getElementById("valor-total");    
    let quantidaDeProdutos = document.getElementById("quantidade").value;  


     if (quantidaDeProdutos <= 0) {
        quantidaDeProdutos = 1;
     }; 
     
        campoProdutos.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidaDeProdutos}x</span> ${nome}  <span class="texto-azul">${valor}</span>
        </section>
      </section>`;

    
    let valorAtual = parseFloat(valorTotal.innerHTML);
    let valorAdicional = parseFloat(valor.replace("R$", ""));
    let valorFinal = valorAtual + (valorAdicional * quantidaDeProdutos);
    valorTotal.innerHTML = valorFinal.toFixed(2); // Exibe o valor total com duas casas decimais\
    return;
  

    
}


function limpar(){
    let campoProdutos = document.getElementById("lista-produtos");
    campoProdutos.innerHTML = "";
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = parseFloat(0).toFixed(2); // Zera o valor total e exibe duas casas decimais

    return;
}