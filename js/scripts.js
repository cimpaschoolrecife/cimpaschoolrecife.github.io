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
