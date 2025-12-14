// Credenciales de ejemplo (NO usar en producción)
const VALID_USER = "admin";
const VALID_PASS = "password123";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  message.className = "message"; // reset
  if (user === VALID_USER && pass === VALID_PASS) {
    message.textContent = "Login exitoso. Redirigiendo...";
    message.classList.add("success");
    // Simular acceso / redirección
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 800);
  } else {
    message.textContent = "Usuario o contraseña incorrectos.";
    message.classList.add("error");
  }
});
