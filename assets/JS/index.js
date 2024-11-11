// Importando funções necessárias do SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBuhY2akcdvPLRHYLaZWa2R0tyu0lBnTvU",
    authDomain: "iventariosic.firebaseapp.com",
    projectId: "iventariosic",
    storageBucket: "iventariosic.firebasestorage.app",
    messagingSenderId: "269223068053",
    appId: "1:269223068053:web:1e3a6b42878795533db69c",
    measurementId: "G-6E11HE69B1"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Inicializando a autenticação

// Função de login
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const login = document.getElementById("login").value;  // E-mail
    const password = document.getElementById("password").value;  // Senha

    // Tentando fazer login com e-mail e senha
    signInWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            console.log("Usuário autenticado:", user);
            window.location.href = "home.html";  // Redireciona para home.html
        })
        .catch((error) => {
            // Em caso de erro
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Erro ao fazer login: " + errorMessage);
        });
});
