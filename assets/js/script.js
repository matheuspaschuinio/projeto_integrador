/** Variáveis */
const inputLogin = document.getElementById("input-login");
const inputSenha = document.getElementById("input-senha");
const btnEntrar = document.getElementById("btn-entrar");

function entrar() {

  /** Alunos */
  if (inputLogin.value === "aluno1" && inputSenha.value === "aluno1") {

    alert("Bem vindo Aluno 1");

    window.location.href = "../../pages/alunos/home.html";

  /** Professores */
  } else if (inputLogin.value == "prof1" && inputSenha.value == "prof1") {

    alert("Bem vindo Professor 1");

    window.location.href = "../../pages/professores/home.html";

  /** Direção e Secretaria */
  } else if (inputLogin.value == "direcao1" && inputSenha.value == "direcao1") {

    alert("Bem vindo Direção e Secretaria 1");

    window.location.href = "../../pages/direcao_secretaria/home.html";

  /** Pais e responsáveis */
  } else if (inputLogin.value == "pais1" && inputSenha.value == "pais1") {

    alert("Bem vindo Pais 1");

    window.location.href = "../../pages/pais_responsaveis/home.html";

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
