export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  user: UserAuth;
}

export interface UserAuth {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}
