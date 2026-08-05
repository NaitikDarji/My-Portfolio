const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = navLinks?.querySelectorAll('a');
links?.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
