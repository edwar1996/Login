const validarContrasena = require('../src/app');
const Usuario = require('../src/index'); // Importar la clase Usuario

describe('Iniciar Sesión', () => {
  test('Contraseña válida', () => {
    const usuario = new Usuario('usuario123', 'abc12345');
    expect(usuario.iniciarSesion()).toBe(`¡Bienvenido, usuario123! Has iniciado sesión correctamente.`);
  });

  test('Contraseña inválida', () => {
    const usuario = new Usuario('usuario123', 'abc');
    expect(usuario.iniciarSesion()).toBe('La contraseña no cumple con los requisitos mínimos.');
  });
});
