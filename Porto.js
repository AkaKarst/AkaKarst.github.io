function openModal(projectId) {
    document.getElementById(projectId).style.display = "block";
  }
  
  function closeModal(projectId) {
    document.getElementById(projectId).style.display = "none";
  }
  
  // Tambahkan di file Porto.js
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });
});

function openModal(projectId) {
  document.getElementById(projectId).style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId).style.display = "none";
}
// Tambahkan di file Porto.js

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });
});

function openModal(projectId) {
  document.getElementById(projectId).style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId).style.display = "none";
}
// Tambahkan di file Porto.js

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });

  // Click effect on project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mousedown', () => {
          card.style.transform = 'scale(0.98)';
      });
      card.addEventListener('mouseup', () => {
          card.style.transform = 'scale(1.02)';
      });
      card.addEventListener('mouseout', () => {
          card.style.transform = 'scale(1)';
      });
  });
});

function openModal(projectId) {
  document.getElementById(projectId).style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId).style.display = "none";
}
