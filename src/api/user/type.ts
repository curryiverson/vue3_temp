export interface LoginData {
  username: string
  password: string
}

interface tokenData {
  token?: string
  message?: string
}
export interface loginResData {
  code: number
  data: tokenData
}
