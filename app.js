let listaDeNumerosSorteados = [];
let quantidadeMaximadeNumeros = 100;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

mensagemInicial();

function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  let mensagemTentativa = tentativa > 1 ? "tentativas" : "tentativa";
  let fraseTentativa = `Você acertou o número secreto com ${tentativa} ${mensagemTentativa}!`;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!!");
    exibirTextoNaTela("p", fraseTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativa++;
    limparCampo();
  }
}

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * quantidadeMaximadeNumeros + 1);
  let tamanhoMaximoDaLista = listaDeNumerosSorteados.length;

  if (tamanhoMaximoDaLista == quantidadeMaximadeNumeros) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return numeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  limparCampo();
  tentativa = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  numeroSecreto = numeroAleatorio();
}
