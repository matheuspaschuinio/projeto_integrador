/** Variáveis */
const inputLogin = document.getElementById("input-login");
const inputSenha = document.getElementById("input-senha");
const btnEntrar = document.getElementById("btn-entrar");

function entrar() {

  /** Alunos */
  if (inputLogin.value === "123" && inputSenha.value === "123") {

    alert("Bem vindo Aluno");
    window.location.href = "../../sidebar.html";

  /** Professores */
  } else if (inputLogin.value == "prof1" && inputSenha.value == "prof1") {

    alert("Bem vindo prof1");

  /** Direção e Secretaria */
  } else if (inputLogin.value == "direcao1" && inputSenha.value == "direcao1") {

    alert("Bem vindo direcao1");

  /** Pais e responsáveis */
  } else if (inputLogin.value == "pais1" && inputSenha.value == "pais1") {

    alert("Bem vindo pais1");

  /** Input vazio */
  } else if (inputLogin.value == "" && inputSenha.value == "") {

    alert("Preencha os campos login e senha!");

  /** Login inválidos */
  } else {

    alert("Login ou senha inválidos!");

  }

}

/**

btnEntrar.addEventListener("click", function () {
  alert("Bem vindo aluno1");
  if (inputLogin === "aluno1" && inputSenha === "aluno1") {
    alert("Bem vindo aluno1");
  }

  //   if (inputLogin == "prof1" && inputSenha == "prof1") {
  //     alert("Bem vindo prof1");
  //   }

  //   if (inputLogin == "direcao1" && inputSenha == "direcao1") {
  //     alert("Bem vindo direcao1");
  //   }

  //   if (inputLogin == "pais1" && inputSenha == "pais1") {
  //     alert("Bem vindo pais1");
  //   }
});

*/
