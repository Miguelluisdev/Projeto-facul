let login = ""
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
 
     login = document.getElementById("loginL").value;

     cpf = document.getElementById("cpf").value;

     senha = document.getElementById("senhaCas").value;
     
     const localUser = getUsers()
     

     let users = [
        ...localUser,
        {
        chave1: cpf ,
        login: login,
        senha: senha,
        }

    ]

     localStorage.setItem(
        '@user',
    JSON.stringify(users),
  )


}

const usuarios = verificarLog()



