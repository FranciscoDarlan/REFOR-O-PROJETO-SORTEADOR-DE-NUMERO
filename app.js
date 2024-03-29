
function sortear() {
    // mapeando as tag que quero manusear
    let inputQuantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let deTalNumero = parseInt(document.getElementById('de').value);
    let ateTalNumero = parseInt(document.getElementById('ate').value);

    //preciso criar um arrey para colocar os numero gerados pela função gerarNumero()
    let numeroSorteado = [];
    let variavelVaziaParaOsNumerosSorteados;

    //looping de repetição até chegar no valor que informei sempre acrescentando com ++
    for (let i = 0; i < inputQuantidadeNumero; i++) {
        variavelVaziaParaOsNumerosSorteados = gerarNumeroAleatorio(deTalNumero, ateTalNumero);


        //loopping booleano enquanto a resposta for true 
        while (numeroSorteado.includes(variavelVaziaParaOsNumerosSorteados)) {
            variavelVaziaParaOsNumerosSorteados = gerarNumeroAleatorio(deTalNumero, ateTalNumero);
        }

        numeroSorteado.push(variavelVaziaParaOsNumerosSorteados);
    }



    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${numeroSorteado}</label>`;

    alterarStatusBotao();
}

//função de gerar numero aleatorio, função math.floor para arredondar o numero.
function gerarNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min
}
// função para alterar caractreristica do butão com classList ADD/REMOVE/CONTAINS
function alterarStatusBotao() {
    let button = document.getElementById('btn-reiniciar');

    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}

// FUNÇÃO QUE zera todas as infomações voltando para o inicial da paggina.
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let button = document.getElementById('btn-reiniciar');

    let textNumero = document.getElementById('resultado');
    textNumero.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao()

}