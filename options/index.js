document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("table tbody");
  const searchInput = document.querySelector("#search-input");

  // Função para carregar tarefas salvas
  function carregarTarefas() {
    const savedData = localStorage.getItem("informacoes");
    if (savedData) {
      const tasks = JSON.parse(savedData);
      tbody.innerHTML = ""; // Limpa o corpo da tabela

      Object.keys(tasks).forEach(duty => {
        const taskData = tasks[duty];
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = duty;

        const taskCell = document.createElement("td");
        taskCell.textContent = taskData.text;

        const dateCell = document.createElement("td");
        const date = new Date(taskData.date).toLocaleDateString();
        dateCell.textContent = date;

        row.appendChild(nameCell);
        row.appendChild(taskCell);
        row.appendChild(dateCell);

        tbody.appendChild(row);
      });
    }
  }

  // Chama a função para carregar as tarefas quando a extensão é carregada
  carregarTarefas();

  // Função para destacar as palavras na tabela
  function highlightMatches() {
    const searchTerm = searchInput.value.toLowerCase();

    // Itera por todas as linhas da tabela
    Array.from(tbody.rows).forEach(row => {
      let matchFound = false;

      // Itera por todas as células de cada linha
      Array.from(row.cells).forEach(cell => {
        const text = cell.textContent.toLowerCase();
        if (text.includes(searchTerm) && searchTerm !== "") {
          matchFound = true;
        }
      });

      // Destaque a linha se encontrar correspondência
      if (matchFound) {
        row.style.backgroundColor = "darkblue";
        row.style.color = "white";
      } else {
        row.style.backgroundColor = "";
        row.style.color = "";
      }
    });
  }

  // Adiciona o ouvinte de evento ao campo de busca
  searchInput.addEventListener("input", highlightMatches);
});
