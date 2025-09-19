// --- O Feitiço de Invocação ---

// 1. Capturamos o artefato lendário (o botão) pelo seu ID único.
// Usamos 'const' porque este item mágico não mudará.
const botaoAcao = document.getElementById('actionButton');

// 2. Fazemos o mesmo com o nosso "Caldeirão de Exibição" (a div de resposta).
const divResposta = document.getElementById('resposta');

// 3. Lançamos um feitiço de 'escuta' (addEventListener) no botão.
// Ele agora espera atentamente por um evento do tipo 'click'.
// Quando o clique acontece, ele executa a função mágica que está dentro de {}.
botaoAcao.addEventListener('click', function() {
 
  // 4. Forjamos a mensagem que queremos exibir em uma variável.
  // Uma variável é como uma bolsa mágica para guardar informações.
  const nome = document.getElementById("userInput").value
  let mensagem =`Olá ${nome} `

  // 5. Injetamos a mensagem mágica no nosso caldeirão (na div),
  // fazendo-a aparecer na tela para o herói ver!
  divResposta.textContent = mensagem;
});