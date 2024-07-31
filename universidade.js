const prompt = require("prompt-sync")();
const cursos = [];

const modelo = () => {
  const nome = prompt("Digite o nome do curso: ");
  const duracao = prompt("Digite a duração do curso em meses: ");

  const professores = [];
  while (true) {
    const professor = prompt("Digite o nome do professor ou digite FIM");

    if (professor.toLowerCase == "fim") {
      break;
    }
    professores.push(professor);
  }

  const alunos = [];
  while (true) {
    const aluno = prompt("Digite o nome do aluno ou digite FIM");

    if (aluno.toLowerCase == "fim") {
      break;
    }
    alunos.push(aluno);
  }

  const materias = [];
  while (true) {
    const materia = prompt("Digite o nome do materia ou digite FIM");

    if (materia.toLowerCase == "fim") {
      break;
    }
    materias.push(aluno);
  }

  if (
    nome != "" &&
    duracao > 0 &&
    professores.length > 0 &&
    alunos.length > 0 &&
    materias.length > 0
  ) {
    return {
      nome,
      duracao,
      professores,
      alunos,
      materias,
    };
  }
  console.log("Dados inválidos");
  // o return está escondido
};

const criar = () => {
  const novo = modelo();
  if (novo) {
    cursos.push(novo);
    console.log("O curso foi criado com sucesso");
  }
};

const listar = () => {
  if (cursos.length == 0) {
    console.log("Nenhum curso adicionado ainda");
  }
  cursos.forEach((el, i) => {
    //el é de elemento atual
    console.log(`${i + 1},
        nome: ${el.nome},
        duracao: ${el.duracao},
        professores: ${el.professores},
        alunos: ${el.alunos},
        materias: ${el.materias}`);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual indice deseja atualizar? ") - 1;

  const novo = modelo();

  if (novo && indice >= 0 && indice < customElements.length) {
    cursos[indice] = novo;
    console.log("Curso atualizado com sucesso");
  } else {
    console.log("Indice inválido");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Qual indice deseja remover? ") - 1;
  if (indice >= 0 && indice < cursos.length) {
    cursos.splice(indice, 1);
    console.log("Registro removido");
  } else {
    console.log("Indice inválido");
  }
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
};
