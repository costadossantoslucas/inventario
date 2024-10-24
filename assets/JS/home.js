  // Evento para o botão de voltar
  document.getElementById('backButton').onclick = () => {
    window.history.back();
  };
  

// Dados de exemplo para simular o banco de dados
const employees = [
    { id: 1, name: 'João Silva', cpf: '123.456.789-00', assignedEquipment: ['Celular 1'], observations: [] },
    { id: 2, name: 'Maria Oliveira', cpf: '987.654.321-00', assignedEquipment: [], observations: [] },
    { id: 3, name: 'Ana Costa', cpf: '123.456.789-00', assignedEquipment: ['Headset 1', 'Celular 2'], observations: [] },
    { id: 4, name: 'Lucas Costa Dos Santos', assignedEquipment: [], observation: []},
    ];
  
  // Função para preencher a lista de funcionários
  function populateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
  
    employees.forEach(employee => {
      const li = document.createElement('li');
      li.textContent = `${employee.name} - ${employee.cpf}`;
      li.onclick = () => showEmployeeDetails(employee.id);
      employeeList.appendChild(li);
    });
  }
  
  // Função para mostrar detalhes do funcionário
  function showEmployeeDetails(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    const assignedEquipment = document.getElementById('assignedEquipment');
    const observationsList = document.getElementById('observationsList');
    const observationInput = document.getElementById('observationInput');
  
    assignedEquipment.innerHTML = `<strong>Equipamentos Atribuídos:</strong> ${employee.assignedEquipment.join(', ') || 'Nenhum'}`;
    observationsList.innerHTML = '';
    employee.observations.forEach(obs => {
      const li = document.createElement('li');
      li.textContent = obs;
      observationsList.appendChild(li);
    });
  
    observationInput.value = '';
    document.getElementById('employeeDetails').style.display = 'block';
  
    // Adicionar evento para o botão de observação
    document.getElementById('addObservation').onclick = () => {
      const observation = observationInput.value.trim();
      if (observation) {
        employee.observations.push(observation);
        populateObservations(observationsList, employee.observations);
        observationInput.value = '';
      }
    };
  }
  
  // Função para preencher a lista de observações
  function populateObservations(observationsList, observations) {
    observationsList.innerHTML = '';
    observations.forEach(obs => {
      const li = document.createElement('li');
      li.textContent = obs;
      observationsList.appendChild(li);
    });
  }
  
  // Função de pesquisa
  document.getElementById('searchEmployee').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredEmployees = employees.filter(emp => 
      emp.name.toLowerCase().includes(searchTerm) || emp.cpf.includes(searchTerm)
    );
    displayFilteredEmployees(filteredEmployees);
  });
  
  // Função para exibir funcionários filtrados
  function displayFilteredEmployees(filteredEmployees) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
  
    filteredEmployees.forEach(employee => {
      const li = document.createElement('li');
      li.textContent = `${employee.name} - ${employee.cpf}`;
      li.onclick = () => showEmployeeDetails(employee.id);
      employeeList.appendChild(li);
    });
  }
  
  // Inicialização
  populateEmployeeList();

