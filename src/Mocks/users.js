const users = []; // Simula os usuários cadastrados

// Função para validar formato de e-mail simples
const validarEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// Endpoint de cadastro
app.post('/api/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Validação simples dos campos obrigatórios
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  // Validação do formato do e-mail
  if (!validarEmail(email)) {
    return res.status(400).json({ mensagem: 'E-mail inválido.' });
  }

  // Verificar se o e-mail já está cadastrado
  const emailExistente = users.find(user => user.email === email);
  if (emailExistente) {
    return res.status(400).json({ mensagem: 'E-mail já cadastrado.' });
  }

  // Simula cadastro - Lembre-se de nunca armazenar senhas em texto simples em sistemas reais
  const novoUsuario = { id: users.length + 1, nome, email, senha };  // Aqui seria bom usar hash para a senha
  users.push(novoUsuario);

  return res.status(201).json({
    mensagem: 'Usuário cadastrado com sucesso!',
    usuario: novoUsuario
  });
});
