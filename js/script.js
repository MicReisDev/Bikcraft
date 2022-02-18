const links = document.querySelectorAll(".menu a")

function ativar(link){
  var url = window.location.href
  var local = link.href
  if(url.includes(local)){
    link.classList.add("ativo")
  }
  
}

links.forEach(ativar)
//parte 2//
parametros = new URLSearchParams(location.search);

function ativarproduto(parametro){
  var elemento = document.getElementById(parametro)
  if(elemento){
  elemento.checked = true}
}

parametros.forEach(ativarproduto)
