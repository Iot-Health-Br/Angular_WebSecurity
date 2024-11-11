export interface User {
  id?: number;  // O campo id é opcional porque ele é gerado no back-end
  username: string;  // Login do usuário
  password: string;   // Senha do usuário
  roles: string[] | null;
}
