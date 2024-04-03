const validarContrasena = require('./app');

class Usuario {
  constructor(usuario, contrasena) {
    this.usuario = usuario;
    this.contrasena = contrasena;
  }

  iniciarSesion() {
    if (!validarContrasena(this.contrasena)) {
      return 'La contraseña no cumple con los requisitos mínimos.';
    }
    // Simular lógica de inicio de sesión exitoso
    return `¡Bienvenido, ${this.usuario}! Has iniciado sesión correctamente.`;
  }
}

module.exports = Usuario; // Exportar la clase Usuario
