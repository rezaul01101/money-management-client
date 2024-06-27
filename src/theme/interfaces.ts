export interface buttonType {
  text: string;
  handleClick?: () => void;
  loading?: boolean;
  type: any;
}
export interface userRegisterType {
  name: string;
  email: string;
  password: string;
}
export interface userLoginType {
  email: string;
  password: string;
}

export interface registerFormType {
  user_name: string;
  email: string;
  password: string;
  verify_password: string;
}
export interface loginFormType {
  email: string;
  password: string;
}
