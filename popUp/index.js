const submitButton = document.querySelector("#submit-button");
const textArea = document.querySelector("#note-to-add");
const duties = document.querySelector("#duties");
const selectTask = document.querySelector("#task");

submitButton.addEventListener("click", function () {
  let valor = duties.value;
  let inputValue = textArea.value;
  let dadosExistente = localStorage.getItem("informacoes");
  let informacoes;

  if (dadosExistente) {
    informacoes = JSON.parse(dadosExistente);
  } else {
    informacoes = {};
  }

  // Usando o valor do duties como chave e o valor do note-to-add como valor no localStorage
  informacoes[valor] = inputValue;

  localStorage.setItem("informacoes", JSON.stringify(informacoes));
  let option = document.createElement("option");
  option.value = valor; // Use o valor do duties como valor da option
  option.text = valor;
  selectTask.add(option);
  alert("Tarefa salva com sucesso!");
});

// Adiciona o ouvinte de evento para o evento de mudança no select
selectTask.addEventListener("change", function() {
  // Obtém o valor selecionado no select
  const selectedValue = selectTask.value;

  // Recupera a informação correspondente no localStorage
  const savedData = localStorage.getItem("informacoes");
  if (savedData) {
    const tasks = JSON.parse(savedData);
    
    // Exibe a informação correspondente no campo textarea
    const selectedTask = tasks[selectedValue];
    if (selectedTask) {
      textArea.value = selectedTask;
    } else {
      textArea.value = ""; // Limpa o textarea se não houver informação correspondente
    }
  }
});

// Recupera os dados salvos no localStorage e preenche o campo de entrada de tarefas
function carregarTarefas() {
  const savedData = localStorage.getItem("informacoes");
  if (savedData) {
    const tasks = JSON.parse(savedData);
    
    // Limpa as opções existentes no select
    selectTask.innerHTML = "";
    
    // Adiciona as novas opções
    Object.keys(tasks).forEach(duty => {
      const option = document.createElement('option');
      option.value = duty; // Use a chave como valor da option
      option.text = duty; // Use a chave como texto da option
      selectTask.add(option);
    });
  }
}


// Adiciona o ouvinte de evento para o carregamento da extensão
document.addEventListener("DOMContentLoaded", function () {
  carregarTarefas();
});