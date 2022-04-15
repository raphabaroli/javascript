document.getElementById("meuForm").addEventListener("submit", test);

function test(event) {
  var nome;
  var senha;
  var confsenha;
  var email;
  nome = document.getElementById("idNome").value;
  senha = document.getElementById("idSenha").value;
  confsenha = document.getElementById("idconfSenha").value;
  email = document.getElementById("idEmail").value;

  var erro = false;
  var mensagem = estaVazio(nome);
  if (mensagem !== "") {
    alert("Nome " + mensagem);
    erro = true;
  }

  mensagem = validaSenha(senha, confsenha + estaVazio(senha));
  if (mensagem !== "") {
    alert("Senhas " + mensagem);
    erro = true;
  }

  mensagem = validaEmail(email);
  if (mensagem !== "") {
    alert("Email " + mensagem);
    erro = true;
  }
  if (erro === true) {
    event.preventDefault();
  }
  return false;
}
