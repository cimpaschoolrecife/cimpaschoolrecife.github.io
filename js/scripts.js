// Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
  });
});
    document.getElementById('home-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dayFilters = document.querySelectorAll('.day-filter');
  const daySchedules = document.querySelectorAll('.day-schedule');

  dayFilters.forEach(filter => {
    filter.addEventListener('click', function () {
      // Remove a classe 'active' de todos os botões
      dayFilters.forEach(f => f.classList.remove('active'));
      // Adiciona a classe 'active' ao botão clicado
      this.classList.add('active');

      // Oculta todos os dias
      daySchedules.forEach(schedule => schedule.classList.remove('active'));

      // Mostra o dia correspondente ao botão clicado
      const targetDay = this.getAttribute('data-day');
      document.getElementById(targetDay).classList.add('active');
    });
  });
});

// Toggle para abstracts das sessões temáticas
document.querySelectorAll('.thematic-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const abstract = this.previousElementSibling;
    abstract.classList.toggle('show');
    this.classList.toggle('active');

    // Atualizar texto do botão
    this.textContent = abstract.classList.contains('show') ? 'Hide Abstract ▲' : 'Show Abstract ▼';
  });
});

// Toggle para abstracts das sessões
document.querySelectorAll('.session-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const abstract = this.previousElementSibling;
    abstract.classList.toggle('show');
    this.classList.toggle('active');

    // Atualizar texto do botão
    this.textContent = abstract.classList.contains('show') ? 'Hide Abstract ▲' : 'Show Abstract ▼';
  });
});
// Toggle dos dropdowns por área
document.querySelectorAll('.dropdown-area-btn').forEach(button => {
  button.addEventListener('click', function() {
    const area = this.parentElement;
    area.classList.toggle('active');
  });
});

// Toggle dos abstracts (mantido do anterior)
document.querySelectorAll('.session-toggle').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    const abstract = this.nextElementSibling;
    abstract.classList.toggle('show');
    this.textContent = abstract.classList.contains('show')
      ? 'Hide Abstract ▲'
      : 'Show Abstract ▼';
  });
});


// Toggle das áreas temáticas
document.querySelectorAll('.view-sessions-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    const card = this.closest('.thematic-area-card');
    card.classList.toggle('active');

    // Atualizar ícone e texto do botão
    if (card.classList.contains('active')) {
      this.innerHTML = 'Hide Sessions ▲';
    } else {
      this.innerHTML = 'View Sessions ▼';
    }
  });
});

// Toggle dos abstracts (mantido do anterior)
document.querySelectorAll('.session-toggle').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    const abstract = this.nextElementSibling;
    abstract.classList.toggle('show');
    this.classList.toggle('active');

    // Atualizar texto do botão
    this.textContent = abstract.classList.contains('show')
      ? 'Hide Abstract ▲'
      : 'Show Abstract ▼';
  });
});

// Toggle das áreas
document.querySelectorAll('.compact-area-header').forEach(header => {
  header.addEventListener('click', function() {
    this.parentElement.classList.toggle('collapsed');
  });
});

// Toggle dos abstracts (modal seria melhor em espaço reduzido)
document.querySelectorAll('.toggle-abstract').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Aqui seria ideal abrir um modal com o abstract completo
    alert("Abstract would show in a modal:\n" + "[Full abstract text here...]");
  });
});

document.querySelectorAll('.abstract-toggle').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    const abstract = this.previousElementSibling;
    abstract.classList.toggle('show');
    this.classList.toggle('active');

    // Atualizar texto do botão
    if (abstract.classList.contains('show')) {
      this.innerHTML = '▲ Hide Abstract';
    } else {
      this.innerHTML = '▼ Show Abstract';
    }
  });
});