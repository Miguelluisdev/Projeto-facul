function validar(){

  let login = document.getElementById("login");
  if(login.value == ""){
      alert("preencha o campo login");
      login.focus();
      return
  }
  
  let senha = document.getElementById("senha");
  if(senha.value == ""){
      alert("preencha o campo senha");
      senha.focus();
      return
  }



  function getUser(){
      const storedStateAsJSON = localStorage.getItem(
          '@user',
        )
        if (storedStateAsJSON) {
          console.log(storedStateAsJSON)
          return JSON.parse(storedStateAsJSON)
        }
        return []
  }

  const usuarios = getUser()
  
  console.log(usuarios)
  
   const filteUser = usuarios.find((usuario)=>usuario.login == login.value)
   console.log(filteUser)
   if(filteUser) {

       
       if(login.value  === filteUser.login && senha.value === filteUser.senha){
           
           window.open("http://127.0.0.1:5500/tela%20principal2/index2.html","_blank")
           
          }else{
              alert('usuario ou senha incorrect')
          }
          
      }else{
          alert('usuario ou senha incorrect')
       }
}