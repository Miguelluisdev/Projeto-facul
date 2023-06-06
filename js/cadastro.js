let email = ""
let cpf = ""
let senha = ""

function getUsers (){

    const storedStateAsJSON = localStorage.getItem(
        '@user',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return []

}


function obterValor() {
 
     email = document.getElementById("iemail").value;

     cpf = document.getElementById("icpf").value;

     senha = document.getElementById("iconfirm").value;
     
     const localUser = getUsers()
     

     let users = [
        ...localUser,
        {
        chave1: cpf ,
        email: login,
        senha: senha,
        }

    ]

     localStorage.setItem(
        '@user',
    JSON.stringify(users),
  )


}

const usuarios = verificarLog()



