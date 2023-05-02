function menuClick(){
  let ul = document.querySelector('.navbar ul');

  if (ul.classList.contains("open")){
    ul.classList.remove("open");
  }else{
    ul.classList.add("open");
  }
}

/* window.alert(" se estiver no celular, para fechar o menu recarregue a página")*/
