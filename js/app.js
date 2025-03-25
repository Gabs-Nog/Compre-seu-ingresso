function comprar(){

    let ingresso = document.getElementById('tipo-ingresso').value;
    console.log(ingresso);
    let quantidade = parseInt(document.getElementById('qtd').value);
    console.log(quantidade);

    if(ingresso == 'pista'){
        comprarPista(quantidade);
    }else if(ingresso == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    
}

function comprarPista(quantidade){
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > qtdPista){
        alert("Quantidade indisponivel");
    }else{
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}
function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdSuperior){
        alert("Quantidade indisponivel");
    }else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > qtdInferior){
        alert("Quantidade indisponivel");
    }else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}
