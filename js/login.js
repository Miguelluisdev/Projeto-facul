function validarFormulario() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || senha.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  // Verificar se o formato do e-mail é válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, digite um endereço de e-mail válido.");
    return false;
  }

  // A validação foi bem-sucedida, pode enviar o formulário
  return true;
}