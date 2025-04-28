document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('active');
    });
  });

  // Scroll para o topo
  const homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Filtros de dia
  const dayFilters = document.querySelectorAll('.day-filter');
  const daySchedules = document.querySelectorAll('.day-schedule');

  if (dayFilters.length && daySchedules.length) {
    dayFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        dayFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');

        const targetDay = this.getAttribute('data-day');
        const targetSchedule = document.getElementById(targetDay);

        daySchedules.forEach(schedule => schedule.classList.remove('active'));
        if (targetSchedule) targetSchedule.classList.add('active');
      });
    });
  }

  // Função genérica para toggles
  function setupToggle(buttonSelector, targetSelector, showText, hideText) {
    document.querySelectorAll(buttonSelector).forEach(button => {
      // Verifica se já foi configurado
      if (!button.hasAttribute('data-toggle-bound')) {
        button.setAttribute('data-toggle-bound', 'true');

        button.addEventListener('click', function() {
          const target = this.closest('.card').querySelector(targetSelector);
          if (target) {
            const isShowing = target.classList.toggle('show');
            this.classList.toggle('active');

            // Atualiza texto do botão
            const toggleText = this.querySelector('.toggle-text');
            if (toggleText) {
              toggleText.textContent = isShowing ? hideText : showText;
            }

            // Rotaciona ícone
            const icon = this.querySelector('.toggle-icon');
            if (icon) {
              icon.style.transform = isShowing ? 'rotate(180deg)' : 'rotate(0deg)';
            }
          }
        });
      }
    });
  }

  // Configura todos os tipos de toggles
  setupToggle('.thematic-toggle', '.thematic-abstract', 'Show Abstract', 'Hide Abstract');
  setupToggle('.session-toggle', '.session-abstract', 'Show Description', 'Hide Description');
  // setupToggle('.abstract-toggle', '.session-abstract', 'Show Abstract', 'Hide Abstract');
  setupToggle('.view-sessions-btn', '.sessions-container', 'View Sessions', 'Hide Sessions');

  // Toggle para áreas compactas
  document.querySelectorAll('.compact-area-header').forEach(header => {
    header.addEventListener('click', function() {
      this.parentElement.classList.toggle('collapsed');
    });
  });

  // Toggle para abstracts em layout compacto
  document.querySelectorAll('.toggle-abstract').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const abstract = this.nextElementSibling;
      if (abstract) {
        abstract.classList.toggle('show');
      }
    });
  });
});
// Configuração específica para os abstracts de pesquisa
document.querySelectorAll('.abstract-toggle').forEach(button => {
  if (!button.hasAttribute('data-toggle-bound')) {
    button.setAttribute('data-toggle-bound', 'true');
    button.addEventListener('click', function() {
      const abstract = this.previousElementSibling;
      if (abstract && abstract.classList.contains('session-abstract')) {
        abstract.classList.toggle('show');
        this.textContent = abstract.classList.contains('show') ? '▲ Hide Abstract' : '▼ Show Abstract';
      }
    });
  }
});