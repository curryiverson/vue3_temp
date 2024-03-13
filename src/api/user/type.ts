export interface LoginData{
  username:string,
  password:string
}

interface tokenData {
  token:string
}
export interface loginResData{
  code:number,
  data:tokenData
}