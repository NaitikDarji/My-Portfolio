const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const chatToggle = document.getElementById('chatToggle');
const chatClose = document.getElementById('chatClose');
const chatbotWidget = document.getElementById('chatbotWidget');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = navLinks?.querySelectorAll('a');
links?.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

const addMessage = (text, type) => {
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const getReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes('skill') || text.includes('skills')) {
    return 'I work with HTML, CSS, JavaScript, Python, SQL, and modern web development tools.';
  }

  if (text.includes('project') || text.includes('projects')) {
    return 'My projects include a portfolio website, a restaurant management app, a weather app, and data analysis dashboards.';
  }

  if (text.includes('education') || text.includes('bca') || text.includes('mca')) {
    return 'I completed BCA and I am currently pursuing MCA with a focus on software development and data-related technologies.';
  }

  if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('linkedin')) {
    return 'You can reach me at naitikdarji119@gmail.com or connect on LinkedIn through the Contact section.';
  }

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello! I can help with information about my skills, education, projects, or contact details.';
  }

  return 'Thanks for asking! I can share details about my skills, projects, education, or how to contact me.';
};

chatToggle?.addEventListener('click', () => {
  chatbotWidget.classList.toggle('show');
  chatInput.focus();
});

chatClose?.addEventListener('click', () => {
  chatbotWidget.classList.remove('show');
});

chatForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = chatInput.value.trim();

  if (!userMessage) {
    return;
  }

  addMessage(userMessage, 'user');
  chatInput.value = '';

  window.setTimeout(() => {
    addMessage(getReply(userMessage), 'bot');
  }, 500);
});
