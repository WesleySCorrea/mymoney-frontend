export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
    tokenType: string;
    userId: number;
    username: string;
    role: string;
  }