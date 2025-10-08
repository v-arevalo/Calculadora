// === Partículas de fondo  ===
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Posición aleatoria
    const size = Math.random() * 4 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 8 + Math.random() * 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;


    // Color neón aleatorio
    const colors = ['#0ff', '#f0f', '#0f0', '#ff0'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);
  }
}

// === Efecto de botones y pantalla ===
let display = document.getElementById("display");

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('mousedown', () => button.classList.add('active'));
  button.addEventListener('mouseup', () => button.classList.remove('active'));
  button.addEventListener('mouseleave', () => button.classList.remove('active'));
});

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];
  if (operators.includes(value) && (display.value === '' || operators.includes(lastChar))) return;
  if (value === '.') {
    const parts = display.value.split(/[\+\-\*\/]/);
    const currentNumber = parts[parts.length - 1];
    if (currentNumber.includes('.')) return;
  }
  display.value += value;
  display.classList.add('pulse');
  setTimeout(() => display.classList.remove('pulse'), 200);
}

function clearDisplay() {
  display.value = '';
  display.classList.add('clear-pulse');
  setTimeout(() => display.classList.remove('clear-pulse'), 300);
}

function calculateResult() {
  let expression = display.value;
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
  if (expression.includes('/0')) {
    alert("Error: División por cero no permitida.");
    display.value = '';
    display.classList.add('error-pulse');
    setTimeout(() => display.classList.remove('error-pulse'), 500);
    return;
  }
  if (expression === '' || /[\+\-\*\/]$/.test(expression)) {
    alert("Expresión incompleta.");
    display.classList.add('error-pulse');
    setTimeout(() => display.classList.remove('error-pulse'), 500);
    return;
  }
  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    display.value = result;
    display.classList.add('result-pulse');
    setTimeout(() => display.classList.remove('result-pulse'), 400);
  } catch (error) {
    alert("Entrada inválida. Solo se permiten números y operadores.");
    display.value = '';
    display.classList.add('error-pulse');
    setTimeout(() => display.classList.remove('error-pulse'), 500);
  }
}

// Iniciar partículas al cargar
window.onload = createParticles;
