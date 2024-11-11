export interface LoginResponse {
  authenticated: boolean;
  message: string;
  username: string | null;
  roles: string[] | null;
}
