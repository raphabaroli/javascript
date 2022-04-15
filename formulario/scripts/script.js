
function estaVazio(conteudo) {
  var mensagem = "";
  if (conteudo === "") {
    mensagem = "o campo está vazio";
  }
  return mensagem;
}

function validaSenha(senha, confirmacao) {
  var mensagem = "";
  if (senha !== confirmacao) {
    mensagem = "As senhas não conferem";
  }
  return mensagem;
}

function validaEmail(conteudo) {
  var mensagem = "";
  mensagem = estaVazio(conteudo);
  return mensagem;
}
