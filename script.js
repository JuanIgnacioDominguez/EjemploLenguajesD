/* ===============================================
   JAVASCRIPT: COMPORTAMIENTO E INTERACTIVIDAD
   =============================================== */

// Variable para el contador
let contador = 0;

// Función para cambiar colores del display
function cambiarColor(color) {
  const display = document.getElementById('colorDisplay');
  
  switch(color) {
    case 'rojo':
      display.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
      display.textContent = '¡Ahora soy rojo! 🔴';
      break;
    case 'verde':
      display.style.background = 'linear-gradient(45deg, #4ecdc4, #44bd87)';
      display.textContent = '¡Ahora soy verde! 🟢';
      break;
    case 'naranja':
      display.style.background = 'linear-gradient(45deg, #ffa726, #fb8c00)';
      display.textContent = '¡Ahora soy naranja! 🟠';
      break;
    case 'original':
      display.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
      display.textContent = '¡Volví al color original! 🌈';
      break;
  }
  
  // Agregar animación
  display.classList.add('pulse');
  setTimeout(() => {
    display.classList.remove('pulse');
  }, 1000);
}

// Función para incrementar contador
function incrementar() {
  contador++;
  document.getElementById('contador').textContent = contador;
  
  // Efecto visual
  const contadorEl = document.getElementById('contador');
  contadorEl.style.color = '#28a745';
  setTimeout(() => {
    contadorEl.style.color = '#495057';
  }, 300);
}

// Función para decrementar contador
function decrementar() {
  contador--;
  document.getElementById('contador').textContent = contador;
  
  // Efecto visual
  const contadorEl = document.getElementById('contador');
  contadorEl.style.color = '#dc3545';
  setTimeout(() => {
    contadorEl.style.color = '#495057';
  }, 300);
}

// Función para resetear contador
function resetear() {
  contador = 0;
  document.getElementById('contador').textContent = contador;
  
  // Efecto visual
  const contadorEl = document.getElementById('contador');
  contadorEl.style.color = '#ffc107';
  setTimeout(() => {
    contadorEl.style.color = '#495057';
  }, 300);
}

// Función para mostrar hora actual
function mostrarHora() {
  const ahora = new Date();
  const horaFormateada = ahora.toLocaleString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  document.getElementById('contenidoDinamico').innerHTML = `
    <strong>🕐 Hora actual:</strong><br>
    ${horaFormateada}
  `;
}

// Función para generar saludo aleatorio
function generarSaludo() {
  const saludos = [
    '¡Hola! 👋 Bienvenido al mundo del frontend',
    '¡Excelente! 🎉 Estás aprendiendo JavaScript',
    '¡Fantástico! ⭐ El desarrollo web es increíble',
    '¡Genial! 🚀 Sigue practicando y mejorando',
    '¡Perfecto! 💡 Cada clic es una nueva interacción'
  ];
  
  const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
  
  document.getElementById('contenidoDinamico').innerHTML = `
    <strong>💬 Mensaje generado:</strong><br>
    ${saludoAleatorio}
  `;
}

// Agregar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Animar las tarjetas al cargar
  const cards = document.querySelectorAll('.tech-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 200);
  });
  
  console.log('🎉 ¡Página cargada! JavaScript está funcionando correctamente.');
  console.log('📚 Este ejemplo muestra cómo HTML, CSS y JS trabajan juntos.');
});

// Función para mostrar información en consola (para estudiantes curiosos)
function mostrarInfoConsola() {
  console.log('=== INFORMACIÓN PARA DESARROLLADORES ===');
  console.log('🏗️ HTML: Define la estructura del documento');
  console.log('🎨 CSS: Controla la presentación visual');
  console.log('⚡ JavaScript: Añade interactividad y lógica');
  console.log('=======================================');
}

// Llamar función informativa
mostrarInfoConsola();
