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

