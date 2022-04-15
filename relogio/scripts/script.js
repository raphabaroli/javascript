var localData = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZoneName: "long",
};
//var localData = {dateStyle:"full",
//timeStyle:full};
var formato = new Intl.DateTimeFormat("pt-BR", localData);

window.onload = function () {
  relogio("meuRelogio");
  setInterval(function () {
    relogio("meuRelogio");
  }, 1000);

  //setTimeout(fimTempo, 3000);
};

function relogio(where_id) {
  var d = new Date();
  document.getElementById(where_id).innerHTML = formato.format(d);
}

/*esta função cria alerta temporizado.
function fimTempo() {
alert("Contando!");
setTimeout(fimTempo, 9000);
}*/
