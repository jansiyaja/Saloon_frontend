 export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms?: boolean;
}
 export interface LoginFormData {

  email: string;
  password: string;

}
