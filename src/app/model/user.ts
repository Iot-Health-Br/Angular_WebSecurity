export interface User {
  id?: number;  // O campo id é opcional porque ele é gerado no back-end
  username: string;  // Login do usuário
  nome: string;
  password: string;   // Senha do usuário
  roles: string;
}
