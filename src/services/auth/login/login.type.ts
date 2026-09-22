export interface IRequestLogin {
  email: string;
  password: string;
}

export interface IResponseCredentialsCallback {
  url?: string;
  error?: string;
  ok?: boolean;
  status?: number;
}

export interface IResponseLogin {
  data: {
    accessToken: string;
    refreshToken: string;
  }
}
