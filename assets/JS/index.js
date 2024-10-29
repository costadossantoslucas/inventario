document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Validação de credenciais
  if (username === '123' && password === '123') {
    // Redireciona para a tela inicial
    window.location.href = './page/home.html';
  } else {
    // Exibe mensagem de erro
    errorMessage.style.display = 'block';
  }
});
