// Validación del formulario de login
function validarLogin(usuario, password) {
  if (!usuario || usuario.length < 3 || !validarEmail(usuario)) {
    return "El usuario debe tener al menos 3 caracteres";
  }
  if (!password || password.length < 8 || !validarEmail(password)) {
    return "La contraseña debe tener al menos 8 caracteres";
  }
  return null;
}

document.querySelector(".login").addEventListener("submit", function (e) {
  const error = validarLogin(
    document.getElementById("usuario").value,
    document.getElementById("password").value
  );
  if (error) {
    e.preventDefault();
    alert(error);
  }
});
