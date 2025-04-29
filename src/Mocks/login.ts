export interface ILogin {
  email: string;
  senha: string;
}

// Simula a resposta da API para o login
export function ResponseLogin(request: ILogin) {
  // Verifique se os campos email e senha estão corretos
  if (request.email === 'user@example.com' && request.senha === 'password123') {
    return {
      status: 200,
      data: {
        mensagem: "LOGIN EFETUADO COM SUCESSO!",
      },
    };
  } else {
    return {
      status: 400,
      data: {
        mensagem: "EMAIL OU SENHA INCORRETOS!",
      },
    };
  }
}
