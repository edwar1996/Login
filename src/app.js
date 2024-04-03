// Función para validar contraseña
function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
      return false;
    }
    const tieneLetras = /[a-zA-Z]/.test(contrasena);
    const tieneNumeros = /\d/.test(contrasena);
    return tieneLetras && tieneNumeros;
  }
  
  module.exports = validarContrasena;
  