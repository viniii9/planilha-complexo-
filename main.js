// Animação suave ao rolar para seções
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Realce de linha ao clicar (na tabela)
const rows = document.querySelectorAll('tbody tr');
rows.forEach(row => {
  row.addEventListener('click', () => {
    rows.forEach(r => r.classList.remove('highlight'));
    row.classList.add('highlight');
  });
});

// Estilo aplicado via JavaScript
const style = document.createElement('style');
style.textContent = `
  tr.highlight {
    background-color: #ffecec !important;
    font-weight: bold;
    transition: background-color 0.3s;
  }
`;
document.head.appendChild(style);

// Exibição automática de um toast (alerta leve)
function showToast(msg, duration = 3000) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.right = '30px';
  toast.style.background = '#e50914';
  toast.style.color = '#fff';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s';

  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.opacity = '1');
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => document.body.removeChild(toast), 500);
  }, duration);
}

// Mensagem de boas-vindas ao carregar
window.addEventListener('load', () => {
  showToast('Bem-vindo à Planilha Complexo Apostas!');
});
