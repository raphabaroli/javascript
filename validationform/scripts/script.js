var button = document.getElementById("botaoHello");
button.addEventListener("click", saudar);

function saudar() {
  alert("Seja bem-vindo");
}

var botao = document.getElementById("botaoValida");
botao.addEventListener("click", teste);

function teste() {
  isEmpty("idNome", "errNome", "Informe um nome", 3);
  isEmpty("idCity", "errCity", "Informe a Cidade", 1);
  isEmpty("idData", "errData", "Informe o nome", 1);
  
}

function isEmpty(campo, campoErro, mensagem, minimo) {
  var minhaCity = document.getElementById(campo).value;
  var spanCity = document.getElementById(campoErro);
  minhaCity = minhaCity.trim();
  if (minhaCity.length < minimo) {
    spanCity.innerHTML = mensagem;
  } else {
    spanCity.innerHTML = "";
  }

}

