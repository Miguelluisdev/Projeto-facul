function alerta(){
  window.alert("Ctrl + e Ctrl - para aumentar e diminuir a fonte")
}
function menuClick(){
  let nav = document.querySelector('.navbar');

  if (nav.classList.contains("open")){
    nav.classList.remove("open");
  }else{
    nav.classList.add("open");
  }
}