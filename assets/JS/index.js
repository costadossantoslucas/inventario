document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Validação de credenciais
  if (username === 'sicdigital' && password === '123.senha') {
    // Redireciona para a tela inicial
    window.location.href = 'PAGE/home.html';
 // Certifique-se de que este caminho está correto
  } else {
    // Exibe mensagem de erro
    errorMessage.style.display = 'block';
  }
});
