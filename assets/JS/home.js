// home.js

// Função para o botão de logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    window.location.href = "../index.html"; // Redireciona para a página de login
});


// Dados simulados para pesquisa
const inventoryData = [
    { equipment: "Notebook Dell", employee: "Carlos Silva" },
    { equipment: "Impressora HP", employee: "Carlos Silva" },
    { equipment: "Monitor LG", employee: "Carlos Silva" },
    { equipment: "Teclado Microsoft", employee: "João Souza" },
    { equipment: "Mouse Logitech", employee: "Ana Costa" }
];

// Função para buscar equipamentos ou funcionários
function searchInventory(query) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Limpa os resultados anteriores

    // Filtra os dados com base na consulta
    const results = inventoryData.filter(item =>
        item.equipment.toLowerCase().includes(query.toLowerCase()) ||
        item.employee.toLowerCase().includes(query.toLowerCase())
    );

    // Verifica se houve resultados
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    // Renderiza os resultados
    results.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";
        resultItem.innerHTML = `<p><strong>Equipamento:</strong> ${item.equipment}</p>
                                <p><strong>Funcionário:</strong> ${item.employee}</p>`;
        resultsContainer.appendChild(resultItem);
    });
}

// Evento de clique para o botão de pesquisa
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    searchInventory(query);
});
