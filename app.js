//Função de sortear os números
function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    //Validação dos campos
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    //Validação do intervalo a ser sorteado com a quantidade de números
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
    }
    
    let numerosSorteados = []; //array para armazenar os números sorteados
    let numeroSorteado; //variável para armazenar o número sorteado

    //Loop para sortear os números e incluir no array
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numeroSorteado = obterNumerosSorteados(numeroInicial, numeroFinal);

       //Consultar se o número sorteado já está no array
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumerosSorteados(numeroInicial, numeroFinal);
        }

        numerosSorteados.push(numeroSorteado); //adiciona o número sorteado no array
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`; //exibe os números sorteados na página web

    alterarStatusBotaoReiniciar(); //chama a função para alterar o status do botão de reiniciar
}

//Função para obter os números sorteados
function obterNumerosSorteados(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
//Função para alterar o status do botão reinciar
function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

//Função para reiniciar o jogo
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar(); //chama a função para alterar o status do botão de reiniciar
}
