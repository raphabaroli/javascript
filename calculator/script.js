//area pra definir variaveis globais
let flagApaga = false;
let numAux = 0;

function ponto(elemento)
{
    let mostrador = document.getElementById("num");
    if (mostrador.value.indexOf(".") == -1)
    {mostrador.value += elemento.value;}
}

function digito(elemento)
{
    mostrador = document.getElementById("num");
    if (mostrador.value == "0" || flagApaga == true)
    {mostrador.value = elemento.value}
    else {mostrador.value += elemento.value;}
    flagApaga = false;
}

function sinal(elemento)
{
    let opera = document.getElementById("signal");
        if (opera.value != "") {igual();}

    opera.value = elemento.value;
    flagApaga = true;
    numAux = parseFloat(document.getElementById("num").value);
}

function igual()
{
    let result = 0;
    let parcela = parseFloat(document.getElementById("num").value);
    let opera = document.getElementById("signal").value;
    switch (opera)
    {
    case "+":
        result = numAux + parcela;
    break;
  
    case "-":
        result = numAux - parcela;
    break;
    
    case "*":
        result = numAux * parcela;
    break;
    
    case "/":
        result = numAux / parcela;
    break;
    }
    document.getElementById("num").value = result;
    numAux = 0;
    document.getElementById("signal").value = "";
    flagApaga = true;
}

//funcao clear
function limpar()
{
    mostrador = document.getElementById("num");
    mostrador2 = document.getElementById("signal");
    mostrador.value = ""
    mostrador2.value = ""
}

