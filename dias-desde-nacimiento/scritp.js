function calcularDias() {
  const fechaNacimientoInput = document.getElementById('dob').value;

  if (!fechaNacimientoInput) {
    alert('Por favor, ingresa tu fecha de nacimiento.');
    return;
  }

  const fechaNacimiento = new Date(fechaNacimientoInput);
  const fechaHoy = new Date();
  const diferencia = fechaHoy - fechaNacimiento;
  const milisegDias = 1000 * 60 * 60 * 24;
  const diasPasados = Math.floor(diferencia / milisegDias);
  
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = diasPasados;
}