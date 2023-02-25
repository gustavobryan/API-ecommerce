fetch("http://localhost:3000/produtos?_sort=produtoId&_order=cres")
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));
    
let listaProdutos = [mostraProdutos]; 

function array_chunk(arr, len) {
    let
}

function mostraProdutos(produtos) {
    const htmlProdutos = produtos.map(
        (produto) => `
        <img src ="${produto.img}">
        <h2>${produto.nome}</h2>
        <h3>${produto.preco}</h3>
        <h4>${produto.autor}</h4>
        <h5>${produto.sobre}</h4>`        

    );
        console.log(produtos);
    document.getElementById("app").innerHTML = htmlProdutos;
}    
