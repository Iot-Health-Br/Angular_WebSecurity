export interface LoginResponse {
  userId?: number;
  authenticated: boolean;
  message: string;
  username: string | null;
  fullName: string;
  roles: string[] | null;
}
