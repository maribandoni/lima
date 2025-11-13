const input = document.getElementById('druidNameInput');
const btn = document.getElementById('awakenButton');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  const name = (input.value || '').trim();
  if (!name) {
    msg.textContent = 'Por favor, digite seu nome.';
    return;
  }
  const mensagem = `Bem-vindo(a), ${name}! A magia despertou ✨`;
  msg.textContent = mensagem;
});