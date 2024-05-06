const submitButton = document.querySelector("#submit-button");
const textArea = document.querySelector("#note-to-add");
const duties = document.querySelector("#duties");
const selectTask = document.querySelector("#task");

submitButton.addEventListener("click", () => {
  // chrome.runtime.openOptionsPage();
  chrome.runtime.sendMessage({ message: "messageSent", data: textArea.value });
});

submitButton.addEventListener("click", function () {
  submitButton.disabled = true;

  let valor = duties.value;
  let dadosExistente = localStorage.getItem("informacoes");
  let informacoes;

  if (dadosExistente) {
    informacoes = JSON.parse(dadosExistente);
  } else {
    informacoes = {};
  }

  let timestamp = Date.now();
  informacoes[timestamp] = valor;

  localStorage.setItem("informacoes", JSON.stringify(informacoes));
  let option = document.createElement("option");
  option.value = timestamp; // Use o timestamp como valor da option
  option.text = valor;
  selectTask.add(option);
  alert("Tarefa salva com sucesso!");

  submitButton.disabled = false;
});
