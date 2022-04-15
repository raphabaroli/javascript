var trocar = document.getElementById("botaoTroca");
trocar.addEventListener("click", substituir);

function substituir() {
  var textOrigin = document.getElementById("meuTexto").value;
  var procura = document.getElementById("find").value;
  var troca = document.getElementById("subst").value;
  var retorno = document.getElementById("result");

  if (procura.length > 0 && troca.length > 0) {
    textOrigin = textOrigin.replaceAll(procura, troca);
    retorno.innerHTML = textOrigin;
  }
}

