var option = document.querySelector("#option")
var radio = document.querySelector("radio")


// ------- INCREMENTO INVISÍVEL --------------


option.addEventListener("click", function (e) {
  var chaves = document.querySelector("#chaves");
    if (option.value === "2") {
      chaves.style.display = "flex";
    } else { 
      chaves.style.display = "none";
    }
  });


  radio.addEventListener('click', function (e) {
    if (codificar.checked) {
        botao.innerHTML = `<input class="botao" type="button" value="codificar" onclick="codificar()">`
    }

})
radio.addEventListener('click', function (e) {
    if (decodificar.checked) {
        botao.innerHTML = `<input class="botao" type="button" value="decodificar" onclick="decodificar()">`
    }

})


// ------- BASE 64 --------------


var base = document.querySelector("#base64")
var textDaEsquerda = document.querySelector("#textDaEsquerda")
var txt = ""
var textDaDireita = document.querySelector("#textDaDireita")

// -------- CODIFICANDO a base 64 -----------------


function codBase(){
  var base = document.querySelector("#base64")
  var textDaEsquerda = document.querySelector("#textDaEsquerda")
  var txt = ""
  var textDaDireita = document.querySelector("#textDaDireita")
  var select = document.querySelector("#option")
  if(codificar.checked && select.value == '1' ){
    txt = textDaDireita.value 
    textDaEsquerda.value = btoa(txt)
  }
}

// -------------- DECODIFICANDO a base 64 ---------------

function decodificar(){
  var base = document.querySelector('#base64')
  var textDaEsquerda = document.querySelector('#textDaEsquerda')
  var txt = ""
  var textDaDireita = document.querySelector('#textDaDireita')
  if(decodificar.checked && seletor.value == '1' )
  txt = textDaDireita.value
  textDaEsquerda.value = atob(txt)
}

// ------- SUBSTITUI BOTÃO --------------

seletor.addEventListener("click", function () {
  var code = document.querySelector("#codificar");
  var decode = document.querySelector("#decodificar");
  var mostre = document.querySelector("#mostre");
  if (code.checked && option = 1 ) {
    mostre.innerHTML = `<input id="codificar" name="seletor_codificar" value="cod" onclick="cod();creatCopy();">`;
    document.querySelector("radioCod").addEventListener("click", Codifique);
  } else if (decode.checked && option == 1) {
    mostre.innerHTML = `<input id="decodificar" name="seletor_decodificar" value="decod" onclick="decod();creatCopy();">`;
    document.querySelector("#radioDecod").addEventListener("click", Descodifique);
  }
});
