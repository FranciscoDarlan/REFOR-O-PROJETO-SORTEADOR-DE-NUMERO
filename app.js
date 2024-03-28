
function sortear() {

    let inputQuantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let deTalNumero = parseInt(document.getElementById('de').value);
    let ateTalNumero = parseInt(document.getElementById('ate').value);


    let numeroSorteado = [];
    let variavelVaziaParaOsNumerosSorteados;

    for (let i = 0; i < inputQuantidadeNumero; i++) {
        variavelVaziaParaOsNumerosSorteados = gerarNumeroAleatorio(deTalNumero, ateTalNumero);
        
        numeroSorteado.push(variavelVaziaParaOsNumerosSorteados);
    }

    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${numeroSorteado}</label>`;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}